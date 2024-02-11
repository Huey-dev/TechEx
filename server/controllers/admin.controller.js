import Admin from "../models/admin.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

// admin signup
export const adminSignup = async (req, res, next) => {
  // Extract username, email, and password from the request body
  const { username, email, password } = req.body;
  //   hash password before saving in db
  const hashedPassword = bcryptjs.hashSync(password, 10);
  // create new admin to save save in db
  const newAdmin = new Admin({
    username,
    email,
    password: hashedPassword,
    discriminator: "admin",
  });

  // saving users usually takes time, try making a promise and get eror if user is not created
  try {
    await newAdmin.save();
    res
      .status(201)
      .json({ success: true, message: "Admin created successfuly" });
  } catch (error) {
    if (error.name === "MongoError" && error.code === 11000) {
      // Check for duplicate key error (E11000) from MongoDB
      const keyPattern = Object.keys(error.keyPattern)[0];
      res
        .status(400)
        .json({ success: false, message: `${keyPattern} is already in use` });
    } else {
      // Other errors
      next(error);
    }
  }
};

// admin signin