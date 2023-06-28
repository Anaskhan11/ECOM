import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import {
  createCategory,
  updateCategory,
  categoryControlller,
  singleCategoryController,
  deleteCategoryCOntroller
} from "../controller/categoryCOntroller.js";

const router = express.Router();

router.post("/create-category", requireSignIn, isAdmin, createCategory);
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategory);
//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;
