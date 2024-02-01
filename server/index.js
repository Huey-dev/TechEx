import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"

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

// Use user routes under the path /api/user
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
