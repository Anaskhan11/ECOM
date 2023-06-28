import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
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

// protected user Route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// Admin Routes
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
