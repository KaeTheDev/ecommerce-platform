import { Request, Response } from "express";
import { User } from "../models/Users";
import bcrypt from "bcryptjs";


// GET /api/users/me
export const getCurrentUser = async(req: Request, res: Response) => {
    try {

        if (!req.userId) {
            return res.status(401).json({ error: "Unauthorized" });
          }

        const user = await User.findById(req.userId).select("-passwordHash");

        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            id: user._id.toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            memberSince: user.memberSince
        });
    } catch (error) {
        console.error("getCurrentUser error:", error);
        res.status(500).json({ message: "Failed to fetch user profile" });
    }
};


// PATCH /api/users/me
export const updateCurrentUser = async(req: Request, res: Response) => {
    try {
        if(!req.userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        // Pick only allowed fields to update
        const { firstName, lastName, email, password } = req.body;
        const updateData: Partial<{ firstName: string; lastName: string, email: string, passwordHash: string }> = {};

        // If user want to update password, hash it
        if(password) {
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(password, salt);
            updateData.passwordHash = passwordHash;
        }

        const user = await User.findByIdAndUpdate(req.userId, updateData, { new: true }).select("-passwordHash");

        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            id: user._id.toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            memberSince: user.memberSince
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to update user profile" });
    }
};

// DELETE /api/users/me
