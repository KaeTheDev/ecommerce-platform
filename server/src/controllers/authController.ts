import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/Users";

// Login User -- Have to use export for TypeScript not module.exportss
export const loginUser = async(_req: Request, res: Response) =>{
    res.json({mssg: 'login user'})
};

// Register User
export const registerUser = async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      
      // Hash password
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);
      
      // Create user
      const user = new User({
        firstName,
        lastName,
        email,
        passwordHash,
        role: "customer"
      });
      
      // Save to DB
      await user.save();
      
      res.status(201).json({ 
        message: "User created", 
        user: { id: user._id, firstName, lastName, email, role: user.role }
      });
    } catch (error) {
      res.status(400).json({ error: "Email already exists" });
    }
  };