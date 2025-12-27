import { Request, Response } from "express";
import bcrypt from "bcryptjs";
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

    // 3. SUCCESS - return user info (no password)
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(400).json({ error: "Login failed" });
  }
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