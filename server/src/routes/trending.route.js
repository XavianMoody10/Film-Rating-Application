import { Router } from "express";
import { getAllTrending } from "../controllers/trending,controller.js";

const router = Router();

router.get("/", getAllTrending);

export default router;
