import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_SECRET)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });  

const app = express();
const port = 3000;

app.get("/api/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
