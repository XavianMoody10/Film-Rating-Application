import React from "react";
import { Main } from "../../layouts/Main/Main";
import { useQuery } from "@tanstack/react-query";
import {
  fetchAllTrendingMedia,
  fetchTrendingMovies,
  fetchTrendingTVShows,
} from "../../services/trending.services";
import { MediaBackdropSlider } from "../../components/MediaBackdropSlider/MediaBackdropSlider";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { ErrorMessageOverlay } from "../../components/ErrorMessageOverlay/ErrorMessageOverlay";
import { Swiper, SwiperSlide } from "swiper/react";

const MediaPosterSlider = ({ results }) => {
  const slides = results.map((s) => {
    const imageURL = `https://image.tmdb.org/t/p/original/${s.poster_path}`;

    return (
      <SwiperSlide>
        <div>
          <div>
            <img src={imageURL} alt="" />
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.2}
      breakpoints={{
        400: {
          slidesPerView: 2.2,
        },

        800: {
          slidesPerView: 3.2,
        },

        1200: {
          slidesPerView: 4.2,
        },
      }}
    >
      {slides}
    </Swiper>
  );
};

export const Home = () => {
  const allTrendingQuery = useQuery({
    queryKey: ["trending-all"],
    queryFn: fetchAllTrendingMedia,
    retry: false,
    staleTime: 300000,
  });

  const trendingMoviesQuery = useQuery({
    queryKey: ["trending-movies"],
    queryFn: fetchTrendingMovies,
    retry: false,
    staleTime: 300000,
  });

  const trendingTVShowsQuery = useQuery({
    queryKey: ["trending-tv-shows"],
    queryFn: fetchTrendingTVShows,
    retry: false,
    staleTime: 300000,
  });

  return (
    <Main>
      <section className=" w-[90%] max-w-[1700px] mx-auto">
        <div className=" min-h-[88vh] relative">
          <LoadingOverlay isLoading={allTrendingQuery.isFetching} />

          {allTrendingQuery.isFetched && allTrendingQuery.isSuccess && (
            <MediaBackdropSlider
              results={allTrendingQuery.data.results}
              autoPlay={true}
            />
          )}

          {allTrendingQuery.isError && (
            <ErrorMessageOverlay message={allTrendingQuery.error.message} />
          )}
        </div>
      </section>

      <section className=" w-[90%] max-w-[1700px] mx-auto mt-10 space-y-4">
        <h2 className=" text-2xl text-white font-extrabold min-[800px]:text-3xl">
          Trending Movies
        </h2>

        <div className=" min-h-[300px] lg:min-h-[400px] relative">
          <LoadingOverlay isLoading={trendingMoviesQuery.isFetching} />

          {trendingMoviesQuery.isFetched && trendingMoviesQuery.isSuccess && (
            <MediaPosterSlider
              results={trendingMoviesQuery.data.results}
              autoPlay={true}
            />
          )}

          {trendingMoviesQuery.isError && (
            <ErrorMessageOverlay message={trendingMoviesQuery.error.message} />
          )}
        </div>
      </section>

      <section className=" w-[90%] max-w-[1700px] mx-auto mt-10 space-y-4">
        <h2 className=" text-2xl text-white font-extrabold min-[800px]:text-3xl">
          Trending TV Shows
        </h2>

        <div className=" min-h-[300px] lg:min-h-[400px] relative">
          <LoadingOverlay isLoading={trendingTVShowsQuery.isFetching} />

          {trendingTVShowsQuery.isFetched && trendingTVShowsQuery.isSuccess && (
            <MediaPosterSlider
              results={trendingTVShowsQuery.data.results}
              autoPlay={true}
            />
          )}

          {trendingTVShowsQuery.isError && (
            <ErrorMessageOverlay message={trendingTVShowsQuery.error.message} />
          )}
        </div>
      </section>
    </Main>
  );
};
