// src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import EventRoutes from "./routes/EventRoute";
import CategoryRoutes from "./routes/CategoryRoute";
import PembicaraRoutes from "./routes/PembicaraRoute";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Selamat datang di API Invofest!");
});

app.use("/events", EventRoutes);
app.use("/categories", CategoryRoutes);
app.use("/pembicara", PembicaraRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});