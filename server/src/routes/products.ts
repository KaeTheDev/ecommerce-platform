import express, { Router, Request, Response } from "express";
import { getProducts, getAProduct, postAProduct, deleteProduct, updateProduct  } from "../controllers/productController";

const router: Router = express.Router();

// GET all products
router.get('/', getProducts);

// GET a single product
router.get('/:id', getAProduct);

// POST a new product
router.post('/', postAProduct);

// DELETE a product
router.delete('/:id', deleteProduct);

// UPDATE a product
router.patch('/:id', updateProduct);

export default router;