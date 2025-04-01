import { Router } from "express";
import { getTrendingMedia } from "../controllers/trending.controller.js";

const router = Router();

router.get("/", getTrendingMedia);

export default router;
