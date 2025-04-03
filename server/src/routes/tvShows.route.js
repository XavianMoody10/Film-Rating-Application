import { Router } from "express";
import { getTVShowsByList } from "../controllers/tvShows.controller.js";
import { apiErrorHandling } from "../helpers/apiErrorHandling.js";
import axios from "axios";

const router = Router();

router.get("/", getTVShowsByList);

router.get("/details", async (req, res) => {
  const { id, language } = req.query;

  const url = `https://api.themoviedb.org/3/tv/${id}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    params: {
      language: language || "en-US",
    },
  };

  try {
    if (!id) {
      throw { status: 404, message: ' A "id" is required' };
    }

    const response = await axios.get(url, options);
    res.send(response.data);
  } catch (error) {
    apiErrorHandling(res, error);
  }
});

export default router;
