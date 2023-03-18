import { Request, Response } from 'express';
import userService from '../services/user.service';

const createUser = async (req: Request, res: Response) => {
  const token = await userService.createUser(req.body);
  return res.status(201).json({ token });
};

const login = async (req: Request, res: Response) => {
  const token = await userService.login(req.body);
  
  return res.status(200).json({ token });
};
const productController = { createUser, login };

export default productController;