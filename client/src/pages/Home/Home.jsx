import React from "react";
import { Main } from "../../layouts/Main/Main";
import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMediaData } from "../../services/trending.services";
import { MediaBackdropSlider } from "../../components/MediaBackdropSlider/MediaBackdropSlider";
import { ErrorMessageOverlay } from "../../components/ErrorMessageOverlay/ErrorMessageOverlay";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { MediaPosterSlider } from "../../components/MediaPosterSlider/MediaPosterSlider";

export const Home = () => {
  // Fetch top trending movies and TV shows
  const allTrendingQuery = useQuery({
    queryKey: ["trending-all"],
    // Paramaters Explained
    // "all" value tells server to retrieve top trending movies and tv shows in one request.
    // "day" value tells server to retrieve top trending movies and tv shows for the current day/
    // "en-US" is the langauge the data is returned.
    queryFn: () => fetchTrendingMediaData("all", "day", "en-US"),
    retry: false, // Stops data from being fetched multiple times if it fails the first time.
    staleTime: 300000, // After 5 minutes, the cached data is considered stale and will be refetched.
  });

  // Fetch all trending movies
  const trendingMoviesQuery = useQuery({
    queryKey: ["trending-movies"],
    // Paramaters Explained
    // "movie" value tells server to retrieve all trending movies.
    queryFn: () => fetchTrendingMediaData("movie", "day", "en-US"),
    retry: false,
    staleTime: 300000,
  });

  // Fetch all trending TV shows
  const trendingTVShowsQuery = useQuery({
    queryKey: ["trending-tv-shows"],
    // Paramaters Explained
    // "tv" value tells server to retrieve all trending tv shows.
    queryFn: () => fetchTrendingMediaData("tv", "day", "en-US"),
    retry: false,
    staleTime: 300000,
  });

  return (
    <Main>
      <section className=" w-[90%] max-w-[1600px] mx-auto h-[750px] relative">
        <MediaBackdropSlider data={allTrendingQuery.data} autoPlay={true} />
        <LoadingOverlay isLoading={allTrendingQuery.isFetching} />
        <ErrorMessageOverlay error={allTrendingQuery.error} />
      </section>

      <section className=" w-[90%] max-w-[1600px] mx-auto min-h-[450px] relative mt-20 space-y-5">
        <h2 className=" text-white font-bold text-2xl lg:text-3xl">
          Trending Movies
        </h2>
        <MediaPosterSlider
          data={trendingMoviesQuery.data}
          // In the API, theres no way to differentiat between what are movies and tv shows
          // I needed to add this prop to tell the component whether the data displayed are movies or tv shows
          // Doing this allows me to do certain things.
          // For example, Theres certain API calls that will only work based on if a film is a movie or tv show, which are located in the details page. In order for the requests to work properly, i have to give the details page a way to differentiate between whether to fetch a movie or tv show. When a user clicks on a film details button, they will be navigated to the details page, which has a "media" path parameter of either a value of "movie" or "tv" along with the film "id".
          media_type={"movie"}
        />
        <LoadingOverlay isLoading={trendingMoviesQuery.isFetching} />
        <ErrorMessageOverlay error={trendingMoviesQuery.error} />
      </section>

      <section className=" w-[90%] max-w-[1600px] mx-auto min-h-[450px] relative mt-20 space-y-5">
        <h2 className=" text-white font-bold text-2xl lg:text-3xl">
          Trending TV Shows
        </h2>
        <MediaPosterSlider data={trendingTVShowsQuery.data} media_type={"tv"} />
        <LoadingOverlay isLoading={trendingTVShowsQuery.isFetching} />
        <ErrorMessageOverlay error={trendingTVShowsQuery.error} />
      </section>
    </Main>
  );
};
