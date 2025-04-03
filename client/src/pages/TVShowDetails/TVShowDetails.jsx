import React from "react";
import { Main } from "../../layouts/Main/Main";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTVShowDetails } from "../../services/tvShows.services";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { ErrorMessageOverlay } from "../../components/ErrorMessageOverlay/ErrorMessageOverlay";
import { MediaBackdrop } from "../../components/MediaBackdrop/MediaBackdrop";

export const TVShowDetails = () => {
  const { id } = useParams();

  const { data, isFetching, isFetched, isSuccess, error } = useQuery({
    queryKey: ["tv-shows-details", id],
    queryFn: () => fetchTVShowDetails(id, "en-US"),
    retry: false,
    staleTime: 300000,
  });

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
    </Main>
  );
};
