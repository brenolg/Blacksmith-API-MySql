import { ResultSetHeader } from 'mysql2';
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

const findAllProducs = async () => {
  const [allProducts] = await connection.execute(
    'SELECT * FROM Trybesmith.products ',
  );
  
  return allProducts;
};

const productModel = { createProduct, findAllProducs };

export default productModel;