import { Router } from 'express';
import orderController from '../controllers/order.controller';
import resolver from './resolver';

const orderRouter = Router();

orderRouter.get('/', resolver(orderController.getAllOrders));

export default orderRouter;
