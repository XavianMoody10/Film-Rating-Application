import { Router } from "express";
import { getTVShowsByList } from "../controllers/tvShows.controller.js";

const router = Router();

router.get("/", getTVShowsByList);

export default router;
