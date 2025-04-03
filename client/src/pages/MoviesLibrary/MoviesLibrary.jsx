import React from "react";
import { Main } from "../../layouts/Main/Main";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { ErrorMessageOverlay } from "../../components/ErrorMessageOverlay/ErrorMessageOverlay";
import { MediaSelection } from "../../components/MediaSelection/MediaSelection";
import { MediaPagination } from "../../components/MediaPagination/MediaPagination";
import { MediaPosterGrid } from "../../components/MediaPosterGrid/MediaPosterGrid";
import { fetchMoviesByList } from "../../services/movies.services";

export const MoviesLibrary = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const list = searchParams.get("list") || "now_playing";
  const page = searchParams.get("page") || 1;
  const listOptions = [
    { option: "--Choose List--", value: "" },
    { option: "Now Playing", value: "now_playing" },
    { option: "Popular", value: "popular" },
    { option: "Top Rated", value: "top_rated" },
    { option: "Upcoming", value: "upcoming" },
  ];

  // Fetch top trending movies and TV shows
  const moviesQuery = useQuery({
    queryKey: ["movies", list, page],
    // Paramaters Explained
    // "movie" value tells server to retrieve only movies.
    // "list" value tells server to retrieve movies based on list. example: now_playing, popular.
    // "page" value tells server to retrieve movies from a specific page number
    // "en-US" is the langauge the data is returned.
    queryFn: () => fetchMoviesByList(list, page, "en-US"),
    retry: false, // Stops data from being fetched multiple times if it fails the first time.
    staleTime: 300000, // After 5 minutes, the cached data is considered stale and will be refetched.
  });

  return (
    <Main>
      <section className=" w-[90%] max-w-[1600px] mx-auto min-h-[800px] relative flex flex-col gap-16 items-center">
        <LoadingOverlay isLoading={moviesQuery.isPending} />
        <ErrorMessageOverlay error={moviesQuery.error} />

        <div className=" w-full">
          <MediaSelection
            optionsArray={listOptions}
            defaultValue={list}
            onChange={(e) => {
              setSearchParams({ list: e.target.value, page: 1 });
            }}
          />
        </div>

        <MediaPosterGrid data={moviesQuery.data} media_type={"movie"} />

        <MediaPagination
          amoutOfPages={3}
          currentPage={page}
          onChange={(e, v) => {
            setSearchParams({ list: list, page: v });
          }}
        />
      </section>
    </Main>
  );
};
