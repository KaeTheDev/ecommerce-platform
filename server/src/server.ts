// Import Express library + TypeScript types for type safety
import express, { Express, Request, Response } from "express";
// Import dotenv library
import dotenv from "dotenv";

// Import mongoose
import mongoose from "mongoose";

// Read .env file and load into process.env
dotenv.config();

// MongoDB URI DB connection string
const uri: string =
  process.env.MONGODB_URI || "mongodb://localhost:27017/luxarist";

// Async function using mongoose to connect to MongoDB database
(async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected to Luxarist!");
  } catch (error) {
    console.error(error);
  }
})();

// Create Express application instance with proper typing
const app: Express = express();

// Middleware: Parse JSON request bodies (for API calls)
app.use(express.json());

// Middleware: Parse URL-encoded form data (for HTML forms)
app.use(express.urlencoded({ extended: true }));

// Define health check route (test if server works)
app.get("/health", (_req: Request, res: Response) => {
  // Send 200 OK response with simple message
  res.status(200).send("Server is running");
});

// Set port from environment variable or default to 3000
const PORT: string | number = process.env.PORT || 3000;

// Start server and listen on specified port
app.listen(PORT, () => {
  // Log confirmation when server starts successfully
  console.log(`Server is running on PORT: ${PORT}`);
});
