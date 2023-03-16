import { createToken } from '../auth/authFuncs';
import { IUser } from '../interfaces/user';
import userModel from '../models/user.model';
import ApiError from '../shared/api.errors';

const createUser = async (user: IUser) => {
  const newUser = await userModel.createUser(user); 
  if (!newUser) {
    throw new ApiError('Invalid', 401);
  }
  
  const token = createToken(newUser);
  return token;
};

const userService = { createUser };

export default userService;