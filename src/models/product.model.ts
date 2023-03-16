import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces/product';
import connection from './connection';

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  
  return { id: insertId, name, amount };
};

const findAllProducts = async (): Promise<IProduct[]> => {
  const [allProducts] = await connection
    .execute<(IProduct & RowDataPacket)[]>(
    'SELECT * FROM Trybesmith.products ');
  
  return allProducts;
};

const productModel = { createProduct, findAllProducts };

export default productModel;