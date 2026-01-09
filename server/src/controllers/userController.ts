import { Request, Response } from "express";
import { User } from "../models/Users";

// GET /api/users/me
export const getCurrentUser = async(req: Request, res: Response) => {
    try {
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
        res.status(500).json({ message: "Failed to fetch user profile" });
    }
};


// PATCH /api/users/me

// DELETE /api/users/me
