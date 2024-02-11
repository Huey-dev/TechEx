import mongoose from "mongoose";
// create admin schema
const adminSchema = new mongoose.Schema(
  {
    discriminator: {
      type: String,
      required: true,
      default: "admin",
    },
    username: {
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
  { discriminatorKey: 'discriminator', timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
