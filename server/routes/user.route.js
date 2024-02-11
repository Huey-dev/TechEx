import express from "express";
import { userSignup } from "../controllers/user.controller.js";

// create routing logic by creating application’s endpoints (URIs) respond to client requests
const router = express.Router();
// user sign up route
router.post("/signup", userSignup);

//   export the function to be reusable everywhere
export default router;
