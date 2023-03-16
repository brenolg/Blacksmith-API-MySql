import { Handler, NextFunction, Request, Response, Router } from 'express';
import productController from '../controllers/product.controller';

const productRouter = Router();

const resolver = (handlerFn: Handler) =>
  ( 
    req: Request,
    res: Response,
    next: NextFunction,
  ) => { 
    Promise.resolve(handlerFn(req, res, next))
      .catch((e) => next(e));
  };

productRouter.post('/', resolver(productController.createProduct));

export default productRouter;