import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

// GET all orders
router.get('/', (_req: Request, res: Response)=> {
    res.json({mssg: 'GET all orders'})
});

// GET a single order
router.get('/:id', (_req: Request, res: Response) => {
    res.json({mssg: 'GET a single order'})
});

// POST a new order
router.post('/', (_req: Request, res: Response) =>{
    res.json({mssg: 'POST an order'})
});

// DELETE an order
router.delete('/:id', (_req: Request, res: Response) =>{
    res.json({mssg: 'DELETE an order'})
});

// UPDATE an order
router.patch('/:id', (_req: Request, res: Response) => {
    res.json({mssg: 'UPDATE an order'})
});

export default router;