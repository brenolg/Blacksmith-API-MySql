import express, { Handler, NextFunction, Request, Response } from 'express';
import errorMiddleware from './middlewares/error';
import routers from './routers';

const app = express();

app.use(express.json());

const resolver = (handlerFn: Handler) =>
  ( 
    req: Request,
    res: Response,
    next: NextFunction,
  ) => { 
    Promise.resolve(handlerFn(req, res, next))
      .catch((e) => next(e));
  };

app.use('/products', resolver(routers.productRouter));
app.use('/users', resolver(routers.userRouter));

app.use(errorMiddleware);

export default app;
