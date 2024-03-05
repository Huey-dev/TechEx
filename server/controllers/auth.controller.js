import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Input validation
  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    // create new user
    await newUser.save();

    // Return success response
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    
    // Handle error
    next(error);
    console.error("Error in user signup:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  * Controller function for user signin.
//  * Finds the user by email, compares passwords, and generates a JWT token upon successful signin.

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));

    // Compare passwords
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));

    // Generate JWT token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT);

    // Exclude password field from user data
    const { password: pass, ...rest } = validUser._doc;

    // Set JWT token in a cookie and send user data in response
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
    // Handle other potential errors
    console.error("Error in signin:", error);
    return next(errorHandler(500, "Internal server error"));
  }
};
