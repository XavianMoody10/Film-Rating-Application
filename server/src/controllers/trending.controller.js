import axios from "axios";
import { checkIfOptionIsValid } from "../helpers/checkIfOptionIsValid.js";
import { apiErrorHandling } from "../helpers/apiErrorHandling.js";

async function getTrendingMedia(req, res) {
  const { langauge, time_window, media } = req.query;
  const timeWindowOptions = ["day", "week"];
  const mediaOptions = ["all", "movie", "tv"];

  const url = `https://api.themoviedb.org/3/trending/${media}/${time_window}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    params: {
      language: "en-US" || langauge,
      time_window: "day" || time_window,
      media: "all" || media,
    },
  };

  try {
    if (time_window && !checkIfOptionIsValid(timeWindowOptions, time_window)) {
      throw { status: 404, message: 'Invalid value for "time_window"' };
    }

    if (media && !checkIfOptionIsValid(mediaOptions, media)) {
      throw { status: 404, message: 'Invalid value for "media"' };
    }

    const response = await axios.get(url, options);

    return res.send(response.data);
  } catch (error) {
    apiErrorHandling(res, error);
  }
}

export { getTrendingMedia };
