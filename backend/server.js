import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello orld");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`app is running on ${PORT}`);
});
