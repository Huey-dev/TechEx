import express from "express";
import { signup, signin } from "../controllers/auth.controller.js";


// create routing logic by creating application’s endpoints (URIs) respond to client requests
const router = express.Router();

// user sign up route
router.post("/signup", signup);
router.post("/signin", signin);

//   export the function to be reusable everywhere
export default router;
