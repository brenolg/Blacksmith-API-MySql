import { Request, Response } from 'express';
import userService from '../services/user.service';

const createUser = async (req: Request, res: Response) => {
  const token = await userService.createUser(req.body);
  return res.status(201).json({ token });
};

const productController = { createUser };

export default productController;