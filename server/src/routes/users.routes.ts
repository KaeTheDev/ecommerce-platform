import express, { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { getCurrentUser, updateCurrentUser, updateUserPassword } from "../controllers/userController";

const router: Router = express.Router();

// Protected route = only logged-in users: Get User
router.get("/me", authMiddleware, getCurrentUser);

// Protected route = only logged-in users: Update User
router.patch("/me", authMiddleware, updateCurrentUser);

// Protected route = only logged-in users: Update Password
router.patch("/me/password", authMiddleware, updateUserPassword);

export default router;