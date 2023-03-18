import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

const findByUsername = async (username: string): Promise<IUser[]> => {
  const [user] = await connection.execute<RowDataPacket[] & IUser[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?;',
    [username],
  );
  
  return user;
};

const productModel = { findByUsername, createUser };

export default productModel;