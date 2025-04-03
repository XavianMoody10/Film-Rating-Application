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

      return HttpResponse.text("Error getting trending data", { status: 404 });
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/movie/now_playing",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      const results = nowPlayingMoviesMockdata.find((p) => p.page === page);
      return HttpResponse.json(results);

      return HttpResponse.text("Error list of movies data", { status: 404 });
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/movie/popular",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      const results = popularMoviesMockdata.find((p) => p.page === page);
      return HttpResponse.json(results);

      return HttpResponse.text("Error list of movies data", { status: 404 });
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/movie/top_rated",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      const results = topRatedMoviesMockdata.find((p) => p.page === page);
      return HttpResponse.json(results);

      return HttpResponse.text("Error list of movies data", { status: 404 });
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/movie/upcoming",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      const results = upcomingMoviesMockdata.find((p) => p.page === page);
      return HttpResponse.json(results);

      return HttpResponse.text("Error list of movies data", { status: 404 });
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/tv/airing_today",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      const results = tvShowsAiringTodayMockdata.find((p) => p.page === page);
      return HttpResponse.json(results);

      return HttpResponse.text("Failed getting tv shows airing today", {
        status: 404,
      });
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/tv/on_the_air",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      const results = tvShowsOnTheAirMockdata.find((p) => p.page === page);
      return HttpResponse.json(results);

      return HttpResponse.text("Failed getting tv shows on the air", {
        status: 404,
      });
    }
  ),

  http.get("https://api.themoviedb.org/3/tv/popular", async ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page"));

    const results = popularTVShowsMockdata.find((p) => p.page === page);
    return HttpResponse.json(results);

    return HttpResponse.text("Failed getting tv shows on the air", {
      status: 404,
    });
  }),

  http.get("https://api.themoviedb.org/3/tv/top_rated", async ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page"));

    const results = topRatedTVShowsMockdata.find((p) => p.page === page);
    return HttpResponse.json(results);

    return HttpResponse.text("Failed getting tv shows on the air", {
      status: 404,
    });
  }),

  http.get("https://api.themoviedb.org/3/tv/:id", async ({ params }) => {
    const { id } = params;

    const results = allTrendingDayMockdata.results.find((r) => r.id == id);

    if (results) {
      return HttpResponse.json(results);
    }

    return HttpResponse.text("Error getting data", { status: 404 });
  }),

  http.get("https://api.themoviedb.org/3/movie/:id", async ({ params }) => {
    const { id } = params;

    const results = allTrendingDayMockdata.results.find((r) => r.id == id);

    if (results) {
      return HttpResponse.json(results);
    }

    return HttpResponse.text("Error getting data", { status: 404 });
  }),
];
