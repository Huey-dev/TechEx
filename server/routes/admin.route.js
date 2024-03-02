// routes/signup.route.js
import express from "express";
import { adminSignup } from "../controllers/admin.controller.js";
import { adminSignin } from "../controllers/admin.controller.js";

const router = express.Router();

// admin signup route using the controller
router.post("/signup", adminSignup);

// admin signin route
router.post("/signin", adminSignin);
export default router;
