import React, { useState } from "react";
import { Main } from "../../layouts/Main/Main";
import { fetchMovieDetails } from "../../services/movies.services";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { MediaBackdrop } from "../../components/MediaBackdrop/MediaBackdrop";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { ErrorMessageOverlay } from "../../components/ErrorMessageOverlay/ErrorMessageOverlay";
import Rating from "@mui/material/Rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { postMediaReview } from "../../services/reviews.services";

export const MovieDetails = () => {
  const { id } = useParams();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const { data, isFetching, isFetched, isSuccess, error } = useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => fetchMovieDetails(id, "en-US"),
    retry: false,
    staleTime: 300000,
  });

  const mutation = useMutation({
    mutationFn: () => postMediaReview("12121211", review, rating),
    onSuccess: async (data, variables, context) => {
      console.log(data);
    },
    onError: async (data, eror, context) => {
      console.log(data.message);
    },
  });

  const onSubmit = (event) => {
    event.preventDefault();
    mutation.mutate();
  };

  return (
    <Main>
      <LoadingOverlay isLoading={isFetching} />

      <ErrorMessageOverlay error={error} />

      <section className=" w-[90%] max-w-[1600px] mx-auto">
        {isFetched && isSuccess && (
          <MediaBackdrop
            backdrop_path={data.backdrop_path}
            title={data.title || data.name || data.original_name}
            overview={data.overview}
          />
        )}
      </section>

      <section className=" w-[90%] max-w-[1600px] mx-auto space-y-7 mt-7">
        <h2 className=" text-3xl text-white border-b-2 border-white/10 pb-5">
          Leave a review
        </h2>

        <form
          method="post"
          className=" flex flex-col gap-5"
          onSubmit={onSubmit}
        >
          <textarea
            name="comment"
            id="comment"
            rows={6}
            className=" text-white text-lg p-2 outline-none resize-none border-2 border-white/20"
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
          <div className=" w-full border flex flex-col justify-between items-center gap-4 min-[500px]:flex-row">
            <Rating
              name="half-rating"
              defaultValue={0}
              precision={0.5}
              onChange={(e, v) => {
                setRating(v);
              }}
              emptyIcon={
                <StarBorderIcon sx={{ color: "white", fontSize: 30 }} />
              }
              icon={<StarIcon sx={{ color: "white", fontSize: 30 }} />}
            />

            <button className=" w-full bg-gray-500 text-white py-3 text-lg rounded-sm hover:bg-white hover:text-black duration-150 min-[500px]:max-w-[300px]">
              Add Comment
            </button>
          </div>
        </form>
      </section>
    </Main>
  );
};
