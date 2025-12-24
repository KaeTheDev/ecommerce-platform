import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

// GET all reviews
router.get('/', (_req: Request, res: Response) => {
    res.json({mssg: 'GET all reviews'})
});

// GET a single review
router.get('/:id', (_req: Request, res: Response) =>{
    res.json({mssg: 'GET a single review'})
});

// POST a new review
router.post('/', (_req: Request, res: Response) => {
    res.json({mssg: 'POST an order'})
});

// DELETE a review
router.delete('/:id', (_req: Request, res: Response) =>{
    res.json({mssg: 'DELETE a review'})
});

// UPDATE a review
router.patch('/:id', (_req: Request, res: Response) =>{
    res.json({mssg: 'UPDATE a review'})
});

export default router;