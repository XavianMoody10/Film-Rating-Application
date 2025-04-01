import axios from "axios";
import { checkIfOptionIsValid } from "../helpers/checkIfOptionIsValid.js";
import { apiErrorHandling } from "../helpers/apiErrorHandling.js";

async function getMediaByList(req, res) {
  const { media, list, language, page } = req.query;
  const listOptions = ["now_playing", "popular", "top_rated", "upcoming"];
  const mediaOptions = ["movie", "tv"];

  const url = `https://api.themoviedb.org/3/${media}/${list}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    params: {
      language: language || "en-US",
      page: page || 1,
    },
  };

  try {
    if (!media) {
      throw { status: 404, message: '"media" parameter is null' };
    }

    if (media && !checkIfOptionIsValid(mediaOptions, media)) {
      throw { status: 404, message: 'Invalid value for "media"' };
    }

    if (!list) {
      throw { status: 404, message: '"list" parameter is null' };
    }

    if (list && !checkIfOptionIsValid(listOptions, list)) {
      throw { status: 404, message: 'Invalid value for "list"' };
    }

    if (isNaN(page) && page.trim() !== "") {
      throw { status: 404, message: '"page" parameter is not a number' };
    }

    const response = await axios.get(url, options);

    res.send(response.data);
  } catch (error) {
    apiErrorHandling(res, error);
  }
}

export { getMediaByList };
