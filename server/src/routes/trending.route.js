import { Router } from "express";
import {
  getAllTrending,
  getTrendingMovies,
  getTrendingTVShows,
} from "../controllers/trending.controller.js";

const router = Router();

router.get("/", getAllTrending);
router.get("/movies", getTrendingMovies);
router.get("/tv_shows", getTrendingTVShows);

export default router;
