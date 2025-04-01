import { http, HttpResponse } from "msw";
import allTrendingDayMockdata from "./mocksdata/trending/day/allTrendingDay.mockdata.js";
import allTrendingWeekMockdata from "./mocksdata/trending/week/allTrendingWeek.mockdata.js";
import trendingMoviesDayMockdata from "./mocksdata/trending/day/trendingMoviesDay.mockdata.js";
import trendingMoviesWeekMockdata from "./mocksdata/trending/week/trendingMoviesWeek.mockdata.js";
import trendingTVShowsWeekMockdata from "./mocksdata/trending/week/trendingTVShowsWeek.mockdata.js";
import trendingTVShowsDayMockdata from "./mocksdata/trending/day/trendingTVShowsDay.mockdata.js";

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
];
