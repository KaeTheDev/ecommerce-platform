import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

// GET all products
router.get('/', (_req: Request, res: Response) => {
    res.json({mssg: 'GET all products'})
});

// GET a single product
router.get('/:id', (_req: Request, res: Response) => {
    res.json({mssg: 'GET a single product'})
});

// POST a new product
router.post('/', (_req: Request, res: Response) => {
    res.json({mssg: 'POST a new product'})
});

// DELETE a product
router.delete('/:id', (_req: Request, res: Response) =>{
    res.json({mssg: 'DELETE a product'})
});

// UPDATE a product
router.patch('/:id', (_req: Request, res: Response) => {
    res.json({mssg: 'UPDATE a product'})
});


export default router;