import { delay, http, HttpResponse } from "msw";
import trendingAllMockdata from "./mockdata/trending/trendingAll.mockdata.js";
import trendingMoviesMockdata from "./mockdata/trending/trendingMovies.mockdata.js";
import trendingTVShowsMockdata from "./mockdata/trending/trendingTVShows.mockdata.js";

export const handlers = [
  http.get("https://api.themoviedb.org/3/trending/all/day", async () => {
    await delay(3000);
    return HttpResponse.json(trendingAllMockdata);
    // return HttpResponse.json("Error getting data", { status: 404 });
    // return HttpResponse.error();
  }),

  http.get("https://api.themoviedb.org/3/trending/movie/day", async () => {
    await delay(3000);
    return HttpResponse.json(trendingMoviesMockdata);
    // return HttpResponse.json("Error getting data", { status: 404 });
    // return HttpResponse.error();
  }),

  http.get("https://api.themoviedb.org/3/trending/tv/day", async () => {
    await delay(3000);
    return HttpResponse.json(trendingTVShowsMockdata);
    // return HttpResponse.json("Error getting data", { status: 404 });
    // return HttpResponse.error();
  }),
];
