import { Request, Response } from 'express';
import productService from '../services/product.services';

const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    return res.status(201).json(newProduct);
  } catch (e: unknown) {
    return res.status(500).json({ message: (e as Error).message });
  }
};

const productController = { createProduct };

export default productController;