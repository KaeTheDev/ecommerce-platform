import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

// GET all users
router.get('/', (_req: Request, res: Response) =>{
    res.json({mssg: 'GET all users'})
});

// GET a single user
router.get('/:id', (_req: Request, res: Response) =>{
    res.json({mssg: 'GET a single user'})
});

// DELETE a user
router.delete('/:id', (_req: Request, res: Response) => {
    res.json({mssg: 'DELETE a user'})
});

//  Update a user
router.patch('/:id', (_req: Request, res: Response) => {
    res.json({mssg: 'UPDATE a user'})
});

export default router;