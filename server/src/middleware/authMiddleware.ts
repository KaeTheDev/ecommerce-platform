import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Custom interface for JWT payload
interface JwtPayload {
    userId: string;
    role: "admin" | "customer";
}

// Auth middleware
export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // Check for Authorization header
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }

        // Extract token
        const token = authHeader.split(" ")[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        // Attach userId and role to the request object
        req.userId = decoded.userId;
        req.userRole = decoded.role;

        // Call next middleware/controller
        next();
    } catch(error) { 
        console.error("Auth middleware error:", error);
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
};