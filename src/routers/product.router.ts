import { Router } from 'express';
import productController from '../controllers/product.controller';
import resolver from './resolver';

const productRouter = Router();

productRouter.post('/', resolver(productController.createProduct));
productRouter.get('/', resolver(productController.getAllProduct));

export default productRouter;