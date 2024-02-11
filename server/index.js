import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
import adminRouter  from "./routes/admin.route.js";

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

app.use(express.json())
const port = 3000;


// Use user routes under the path /api/user
app.use("/api/userauth", userRouter);
// create api route and call
app.use("/api/adminauth", adminRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
