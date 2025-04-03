import { http, HttpResponse } from "msw";
import allTrendingDayMockdata from "./mocksdata/trending/day/allTrendingDay.mockdata.js";
import allTrendingWeekMockdata from "./mocksdata/trending/week/allTrendingWeek.mockdata.js";
import trendingMoviesDayMockdata from "./mocksdata/trending/day/trendingMoviesDay.mockdata.js";
import trendingMoviesWeekMockdata from "./mocksdata/trending/week/trendingMoviesWeek.mockdata.js";
import trendingTVShowsWeekMockdata from "./mocksdata/trending/week/trendingTVShowsWeek.mockdata.js";
import trendingTVShowsDayMockdata from "./mocksdata/trending/day/trendingTVShowsDay.mockdata.js";
import nowPlayingMoviesMockdata from "./mocksdata/movies/nowPlayingMovies.mockdata.js";
import popularMoviesMockdata from "./mocksdata/movies/popularMovies.mockdata.js";
import topRatedMoviesMockdata from "./mocksdata/movies/topRatedMovies.mockdata.js";
import upcomingMoviesMockdata from "./mocksdata/movies/upcomingMovies.mockdata.js";
import tvShowsAiringTodayMockdata from "./mocksdata/tvshows/tvShowsAiringToday.mockdata.js";
import tvShowsOnTheAirMockdata from "./mocksdata/tvshows/tvShowsOnTheAir.mockdata.js";
import popularTVShowsMockdata from "./mocksdata/tvshows/popularTVShows,mockdata.js";
import topRatedTVShowsMockdata from "./mocksdata/tvshows/topRatedTVShows.mockdata.js";

export const handlers = [
  http.get(
    "https://api.themoviedb.org/3/trending/:media/:time_window",
    async ({ params }) => {
      const { media, time_window } = params;

      if (media === "all") {
        if (time_window === "day") {
          return HttpResponse.json(allTrendingDayMockdata);
        }

        if (time_window === "week") {
          return HttpResponse.json(allTrendingWeekMockdata);
        }
      }

      if (media === "movie") {
        if (time_window === "day") {
          return HttpResponse.json(trendingMoviesDayMockdata);
        }

        if (time_window === "week") {
          return HttpResponse.json(trendingMoviesWeekMockdata);
        }
      }

      if (media === "tv") {
        if (time_window === "day") {
          return HttpResponse.json(trendingTVShowsDayMockdata);
        }

        if (time_window === "week") {
          return HttpResponse.json(trendingTVShowsWeekMockdata);
        }
      }

      return HttpResponse.text("Error getting data", { status: 404 });
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/movie/:list",
    async ({ params, request }) => {
      const { list } = params;
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      if (list === "now_playing") {
        const results = nowPlayingMoviesMockdata.find((p) => p.page === page);
        return HttpResponse.json(results);
      }

      if (list === "popular") {
        const results = popularMoviesMockdata.find((p) => p.page === page);
        return HttpResponse.json(results);
      }

      if (list === "top_rated") {
        const results = topRatedMoviesMockdata.find((p) => p.page === page);
        return HttpResponse.json(results);
      }

      if (list === "upcoming") {
        const results = upcomingMoviesMockdata.find((p) => p.page === page);
        return HttpResponse.json(results);
      }

      return HttpResponse.text("Error getting data", { status: 404 });
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/tv/:list",
    async ({ params, request }) => {
      const { list } = params;
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      if (list === "airing_today") {
        const results = tvShowsAiringTodayMockdata.find((p) => p.page === page);
        return HttpResponse.json(results);
      }

      if (list === "on_the_air") {
        const results = tvShowsOnTheAirMockdata.find((p) => p.page === page);
        return HttpResponse.json(results);
      }

      if (list === "popular") {
        const results = popularTVShowsMockdata.find((p) => p.page === page);
        return HttpResponse.json(results);
      }

      if (list === "top_rated") {
        const results = topRatedTVShowsMockdata.find((p) => p.page === page);
        return HttpResponse.json(results);
      }

      return HttpResponse.text("Error getting data", { status: 404 });
    }
  ),
];
