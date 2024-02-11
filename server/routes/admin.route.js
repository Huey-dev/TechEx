// routes/signup.route.js
import express from "express";
import { adminSignup } from "../controllers/admin.controller.js";

const router = express.Router();

// user signup route using the controller
router.post("/signup", adminSignup);

export default router;
