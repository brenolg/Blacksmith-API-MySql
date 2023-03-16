import { Router } from 'express';
import userController from '../controllers/user.controller';
import resolver from './resolver';

const userRouter = Router();

userRouter.post('/', resolver(userController.createUser));

export default userRouter;
