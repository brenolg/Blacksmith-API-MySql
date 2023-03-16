import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/user';
import connection from './connection';

const createUser = async (user: IUser): Promise<number> => {
  const { username, vocation, level, password } = user;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password ) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  
  return insertId;
};

const productModel = { createUser };

export default productModel;