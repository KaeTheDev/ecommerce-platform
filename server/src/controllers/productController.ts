import { Request, Response } from "express";
import { Product } from "../models/Product";

// GET all products
export const getProducts = async (req: Request, res: Response) => {
  try {
    // 1. Query MongoDB for all products
    const products = await Product.find().sort({ createdAt: -1 });

    // 2. Return success response with products
    res.json({
      success: true,
      products: products.map((product) => ({
        id: product._id,
        name: product.name,
        price: product.price,
        status: product.status,
      })),
    });
  } catch (error: any) {
    // 3. Handle errors
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET a single product -- findOne
// export const getAProduct = async (req: Request, res: Response) => {
//   try {
//     // 1. Query MongoDB for a product
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(401).json({ error: "Product does not exist" });
//     }
//     res.json({
//       success: true,
//       product,
//     });
//   } catch (error: any) {
//     // 3. Handle errors
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

export const getAProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product does not exist" });
    }
    
    // Return the FULL product object
    res.json({
      success: true,
      product: {
        id: product._id,
        name: product.name,
        subtitle: product.subtitle,
        category: product.category,
        price: product.price,
        status: product.status,
        primaryImageUrl: product.primaryImageUrl,
        galleryImageUrls: product.galleryImageUrls,
        sizes: product.sizes,
        material: product.material,
        gemstoneType: product.gemstoneType,
        weightPreset: product.weightPreset,
        style: product.style,
        description: product.description,
        specsFromAttributes: product.specsFromAttributes,
        sku: product.sku,
        slug: product.slug,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// POST a new product
export const postAProduct = async (req: Request, res: Response) => {
  try {
    // 1. Get data from req.body (the form)
    const productData = req.body;

    // 2. Create a new product
    const product = new Product(productData);

    // 3. Save to DB
    await product.save();

    // 4. Return created product
    res.status(201).json({
      success: true,
      product: {
        id: product._id,
        name: product.name,
        price: product.price,
        status: product.status,
      },
    });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// DELETE a product

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    // 1. Find and delete by ID
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // 2. Success response
    res.json({ success: true, message: "Product deleted" });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// UPDATE a product
export const updateProduct = async (req: Request, res: Response) => {
  try {
    // 1. Find and update by ID
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // 2. Return updated product
    res.json({
      success: true,
      product: {
        id: product._id,
        name: product.name,
        price: product.price,
        status: product.status,
      },
    });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};
