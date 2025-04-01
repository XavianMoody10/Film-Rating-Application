import { Router } from "express";
import { getMediaByList } from "../controllers/media.controller.js";

const router = Router();

router.get("/", getMediaByList);

export default router;
