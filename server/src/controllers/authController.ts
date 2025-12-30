import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/Users";

// Login User -- Have to use export for TypeScript not module.exportss
export const loginUser = async(req: Request, res: Response) =>{
  try {
    const { email, password } = req.body;

    // 1. FIND user by email
    const user = await User.findOne({ email });
    if(!user) {
      return res.status(401).json({ error: "Invalid credentials"});
    }

    // 2. COMPARE plain password with stored hash
    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if(!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    
    // 3. Sign JWT
    const token = jwt.sign(
      { userId: user._id.toString(), role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d"}
    );

    // 4. Return token + safe user
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(400).json({ error: "Login failed" });
  }
};

// Register User
export const registerUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, adminPasscode } = req.body;

    try {   
      
      // Check admin passcode against ENV variable
      let role = 'customer';
      if(adminPasscode) {
        const correctPasscode = process.env.ADMIN_PASSCODE;
        if(adminPasscode.toString() !== correctPasscode) {
          return res.status(400).json({ error: 'Invalid admin passcode' });
        }

        // Check if admin already exists ("one admin only" rule)
        const existingAdmin = await User.findOne({ role: 'admin' });
        if(existingAdmin) {
          return res.status(400).json({ error: 'Admin already exists' });
        }

        role = 'admin';
      }
      // Hash password
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);
      
      // Create user
      const user = new User({
        firstName,
        lastName,
        email,
        passwordHash: passwordHash,
        role: role
      });
      
      // Save to DB
      await user.save();
      
      res.status(201).json({ 
        message: "User created", 
        user: { id: user._id, firstName, lastName, email, role: user.role }
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };