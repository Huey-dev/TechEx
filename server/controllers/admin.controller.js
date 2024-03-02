import Admin from "../models/admin.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import  Jwt  from "jsonwebtoken";

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
export const adminSignin = async (req, res, next) => {
    // extract admin credential
    const {email, password} = req.body

    // query db for admin with provided email
    const validAdmin = await Admin.findOne({discriminator:"admin", email });
    if (!validAdmin) return next(errorHandler(404, "Admin not found"));
    
    // coompare the provided password with hashed password
    const validPassword = bcryptjs.compareSync(password, validAdmin.password);
    if (!validPassword) return next(errorHandler(401, "Wrong password"));

    // generate jwt token to get payload data
    const token = jwt.sign({ id: validAdmin._id }, process.env.JWT_SECRET);
}