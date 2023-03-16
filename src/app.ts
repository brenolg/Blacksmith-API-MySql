import express from 'express';
import errorMiddleware from './middlewares/error';
import routers from './routers';

const app = express();

app.use(express.json());

app.use('/products', routers.productRouter);

app.use(errorMiddleware);

export default app;
