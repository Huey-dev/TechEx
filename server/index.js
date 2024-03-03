import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import cookieParser from 'cookie-parser';
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


app.use(express.json());
const port = 3000;

// Use user router
app.use("/api/auth", userRouter);

// error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
