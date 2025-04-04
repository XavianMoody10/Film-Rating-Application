import express from "express";
import cors from "cors";
import { server } from "./src/mocks/node.js";
import trendingRouter from "./src/routes/trending.route.js";
import moviesRouter from "./src/routes/movies.route.js";
import tvShowsRouter from "./src/routes/tvShows.route.js";
import reviewsRouter from "./src/routes/reviews.route.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/trending", trendingRouter);
app.use("/movies", moviesRouter);
app.use("/tv_shows", tvShowsRouter);
app.use("/reviews", reviewsRouter);

// Server
app.listen(PORT, () => {
  server.listen(); // Mock Service Worker

  console.log("Server has started");
});
