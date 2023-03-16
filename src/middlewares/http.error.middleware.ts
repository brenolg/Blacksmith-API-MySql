import { NextFunction, Request, Response } from 'express';

interface HttpError extends Error {
  status?: number;
}

const httpErrorMiddleware = (err: HttpError, req: Request, res: Response, _next: NextFunction) => {
  console.log('err', err);
  const { status, message } = err;
  res.status(status || 500).json({ message });
};

export default httpErrorMiddleware;
