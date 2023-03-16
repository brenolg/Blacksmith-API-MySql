import { Request, Response } from 'express';
import productService from '../services/product.services';

const createProduct = async (req: Request, res: Response) => {
  const newProduct = await productService.createProduct(req.body);
  return res.status(201).json(newProduct);
};

const getAllProduct = async (_req: Request, res: Response) => {
  const allProducts = await productService.getAllProduct();
  return res.status(200).json(allProducts);
};

const productController = { createProduct, getAllProduct };

export default productController;