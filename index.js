import express from "express";
import "dotenv/config";
import { PostModel } from "./models/index.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  PostModel.findAll().then((posts) => {
    res.json(posts);
  });
});

// handle error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
