import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

//Resgister || Method POST
router.post("/register", registerController);
// LOGIN ROUTE || POST
router.post("/login", loginController);

// Forget Password || POST
router.post("/forgot-password", forgotPasswordController);

//test Route
router.get("/test", requireSignIn, isAdmin, testController);

// protected Route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
