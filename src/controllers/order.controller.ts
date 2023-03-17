import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAllOrders = async (_req: Request, res: Response) => {
  const allProducts = await orderService.getAllOrders();
  return res.status(200).json(allProducts);
};

const productController = { getAllOrders };

export default productController;