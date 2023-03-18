import { Router } from 'express';
import userController from '../controllers/user.controller';
import userMiddlewares from '../middlewares/user';

const loginRouter = Router();

loginRouter.post('/', userMiddlewares.validateAccess, userController.login);

export default loginRouter;
