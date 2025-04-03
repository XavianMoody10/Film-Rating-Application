import { Router } from "express";
import { getMoviesByList } from "../controllers/movies.controller.js";

const router = Router();

router.get("/", getMoviesByList);

export default router;
