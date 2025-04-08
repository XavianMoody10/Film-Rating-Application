import { delay, http, HttpResponse } from "msw";
import trendingAllMockdata from "./mockdata/trendingAll.mockdata.js";

export const handlers = [
  http.get("https://api.themoviedb.org/3/trending/all/day", async () => {
    await delay(3000);
    return HttpResponse.json(trendingAllMockdata);
    // return HttpResponse.json("Error getting data", { status: 404 });
    // return HttpResponse.error();
  }),
];
