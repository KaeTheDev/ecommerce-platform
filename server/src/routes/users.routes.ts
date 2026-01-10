import express, { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { getCurrentUser, updateCurrentUser } from "../controllers/userController";

const router: Router = express.Router();

// Protected route = only logged-in users: Get User
router.get("/me", authMiddleware, getCurrentUser);

// Protected route = only logged-in users: Update User
router.patch("/me", authMiddleware, updateCurrentUser);

export default router;