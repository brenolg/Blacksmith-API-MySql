import { Request, Response } from 'express';
import productService from '../services/product.services';

const createProduct = async (req: Request, res: Response) => {
  const newProduct = await productService.createProduct(req.body);
  return res.status(201).json(newProduct);
};

const productController = { createProduct };

export default productController;