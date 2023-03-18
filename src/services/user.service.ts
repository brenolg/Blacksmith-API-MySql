import { createToken } from '../auth/authFuncs';
import { Ilogin, IUser } from '../interfaces/user';
import userModel from '../models/user.model';
import ApiError from '../shared/api.errors';

const createUser = async (user: IUser) => {
  const newUser = await userModel.createUser(user); 
  if (!newUser) {
    throw new ApiError(401, 'Invalid');
  }
  
  const token = createToken(user.username);
  return token;
};

const login = async (userData: Ilogin) => {
  const { username, password } = userData;

  const user = await userModel.findByUsername(username); 

  if (user.length === 0 || user[0].password !== password) {
    throw new ApiError(401, 'Username or password invalid');
  }
  
  const token = createToken(username);
 
  return token;
};

const userService = { createUser, login };

export default userService;