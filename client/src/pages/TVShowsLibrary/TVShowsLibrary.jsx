import React from "react";
import { Main } from "../../layouts/Main/Main";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { ErrorMessageOverlay } from "../../components/ErrorMessageOverlay/ErrorMessageOverlay";
import { MediaSelection } from "../../components/MediaSelection/MediaSelection";
import { MediaPosterGrid } from "../../components/MediaPosterGrid/MediaPosterGrid";
import { MediaPagination } from "../../components/MediaPagination/MediaPagination";
import { fetchTVShowsList } from "../../services/tvShows.services";

export const TVShowsLibrary = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const list = searchParams.get("list") || "airing_today";
  const page = searchParams.get("page") || 1;
  const listOptions = [
    { option: "--Choose List--", value: "" },
    { option: "Airing Today", value: "airing_today" },
    { option: "On The Air", value: "on_the_air" },
    { option: "Popular", value: "popular" },
    { option: "Top Rated", value: "top_rated" },
  ];

  // Fetch top trending movies and TV shows
  const tvShowsQuery = useQuery({
    queryKey: ["tv-shows", list, page],
    // Paramaters Explained
    // "movie" value tells server to retrieve only movies.
    // "list" value tells server to retrieve movies based on list. example: now_playing, popular.
    // "page" value tells server to retrieve movies from a specific page number
    // "en-US" is the langauge the data is returned.
    queryFn: () => fetchTVShowsList(list, page, "en-US"),
    retry: false, // Stops data from being fetched multiple times if it fails the first time.
    staleTime: 300000, // After 5 minutes, the cached data is considered stale and will be refetched.
  });

  return (
    <Main>
      <section className=" w-[90%] max-w-[1600px] mx-auto min-h-[800px] relative flex flex-col gap-16 items-center">
        <LoadingOverlay isLoading={tvShowsQuery.isPending} />
        <ErrorMessageOverlay error={tvShowsQuery.error} />

        <div className=" w-full">
          <MediaSelection
            optionsArray={listOptions}
            defaultValue={list}
            onChange={(e) => {
              setSearchParams({ list: e.target.value, page: 1 });
            }}
          />
        </div>

        <MediaPosterGrid data={tvShowsQuery.data} media_type={"tv"} />

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
