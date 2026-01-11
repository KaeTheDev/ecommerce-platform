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
        const { firstName, lastName, email } = req.body;
        const updateData: Partial<{ firstName: string; lastName: string, email: string }> = {};

        if(firstName) updateData.firstName = firstName;
        if(lastName) updateData.lastName = lastName;
        if(email) updateData.email = email;

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

// PATCH /api/users/me/password

// DELETE /api/users/me
