import express, { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { getCurrentUser } from "../controllers/userController";

const router: Router = express.Router();

// Protected route = only logged-in users
router.get("/me", authMiddleware, getCurrentUser);

export default router;