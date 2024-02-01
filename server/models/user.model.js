import mongoose from "mongoose";
// create user schema or rules
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // Add other fields as needed
  },
  { timestamp: true }
);

const user = mongoose.model("User", userSchema);

export default user;
