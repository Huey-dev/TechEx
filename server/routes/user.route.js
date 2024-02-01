import express from "express";
import { test } from "../controllers/user.controller.js";

// create routing logic by creating application’s endpoints (URIs) respond to client requests
const router = express.Router();
// test to handles the logic and function. Json data is coming from test in controller
router.get("/test", test);
//   export the function to be reusable everywhere
export default router;
