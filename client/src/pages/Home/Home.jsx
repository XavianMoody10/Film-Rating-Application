import React from "react";
import { Main } from "../../layouts/Main/Main";
import { useQuery } from "@tanstack/react-query";
import { fetchAllTrendingMedia } from "../../services/trending.services";
import { MediaBackdropSlider } from "../../components/MediaBackdropSlider/MediaBackdropSlider";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { ErrorMessageOverlay } from "../../components/ErrorMessageOverlay/ErrorMessageOverlay";

export const Home = () => {
  const trendingQuery = useQuery({
    queryKey: ["trending-all"],
    queryFn: fetchAllTrendingMedia,
    retry: false,
    staleTime: 300000,
  });

  return (
    <Main>
      <section className=" w-[90%] max-w-[1700px] mx-auto">
        <div className=" min-h-[88vh] relative">
          <LoadingOverlay isLoading={trendingQuery.isFetching} />

          {trendingQuery.isFetched && trendingQuery.isSuccess && (
            <MediaBackdropSlider
              results={trendingQuery.data.results}
              autoPlay={true}
            />
          )}

          {trendingQuery.isError && (
            <ErrorMessageOverlay message={trendingQuery.error.message} />
          )}
        </div>
      </section>
    </Main>
  );
};
