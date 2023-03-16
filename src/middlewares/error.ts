import { NextFunction, Request, Response } from 'express';
import ApiError from '../shared/api.errors';

const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error && error.statusCode) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  
  return res.status(500).json({ message: error.message }); 
};
export default errorMiddleware;
