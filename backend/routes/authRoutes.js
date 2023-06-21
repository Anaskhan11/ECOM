import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

//Resgister || Method POST
router.post("/register", registerController);
// LOGIN ROUTE || POST
router.post("/login", loginController);

//test Route
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
