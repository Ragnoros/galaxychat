import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello orld");
});

app.listen(PORT, () => console.log(`app is running on ${PORT}`));
