import express from 'express';
// import httpErrorMiddleware from './middlewares/http.error.middleware';
import routers from './routers';

const app = express();

app.use(express.json());

app.use('/products', routers.productRouter);

// app.use(httpErrorMiddleware);

export default app;
