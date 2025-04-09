import express from "express";
import cors from "cors";
import { server } from "./src/mocks/node.js";
import mongoose from "mongoose";
import trendingRouter from "./src/routes/trending.route.js";
import authRouter from "./src/routes/auth.route.js";

const app = express();

// Middleware
app.use(cors({ credentials: true }));
app.use(express.json());

// Routes
app.use("/trending", trendingRouter);
app.use("/auth", authRouter);

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server has started on port ${process.env.PORT}`);

  // Connect database (Mongodb)
  mongoose
    .connect("mongodb://localhost:27017/")
    .then(() => console.log("Database Connected"))
    .catch((error) => {
      console.log(error);
    });

  server.listen(); // (Mock Service Worker) for testing API responses
});
