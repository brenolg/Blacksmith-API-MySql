import { NextFunction, Request, Response } from 'express';
import ApiError from '../shared/api.errors';

const validateAccess = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { username, password } = req.body;
  
  if (!username) {
    throw new ApiError(400, '"username" is required');
  }

  if (!password) {
    throw new ApiError(400, '"password" is required');
  }

  return next();
};

const userMiddlewares = { validateAccess };

export default userMiddlewares;
