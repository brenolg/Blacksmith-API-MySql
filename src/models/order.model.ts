import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/order';
import connection from './connection';

const findAllOrders = async (): Promise<IOrder[]> => {
  const [allOrders] = await connection
    .execute<(IOrder & RowDataPacket)[]>(
    `SELECT O.id, O.user_id as userId, JSON_ARRAYAGG(P.id) as productsIds 
    FROM Trybesmith.orders as O
    INNER JOIN Trybesmith.products as P
    ON O.id = P.order_id
    GROUP BY O.id`);
  
  return allOrders;
};

const orderModel = { findAllOrders };

export default orderModel;