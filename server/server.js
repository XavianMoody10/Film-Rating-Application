import express from "express";
import cors from "cors";
import { server } from "./src/mocks/node.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes

// Server
app.listen(PORT, () => {
  server.listen(); // Mock Service Worker

  console.log("Server has started");
});
