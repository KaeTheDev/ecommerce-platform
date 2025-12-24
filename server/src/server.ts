// Import Express library + TypeScript types for type safety
import express, { Express, Request, Response } from 'express';
 // Import dotenv library
import dotenv from 'dotenv';

 // Read .env file and load into process.env
dotenv.config();

// Create Express application instance with proper typing
const app: Express = express();

// Middleware: Parse JSON request bodies (for API calls)
app.use(express.json());

// Middleware: Parse URL-encoded form data (for HTML forms)
app.use(express.urlencoded({ extended: true }));

// Define health check route (test if server works)
app.get('/health', (_req: Request, res: Response) => {
    // Send 200 OK response with simple message
    res.status(200).send('Server is running');
});

// Set port from environment variable or default to 3000
const PORT: string | number = process.env.PORT || 3000;

// Start server and listen on specified port
app.listen(PORT, () => {
    // Log confirmation when server starts successfully
    console.log(`Server is running on PORT: ${PORT}`);
});