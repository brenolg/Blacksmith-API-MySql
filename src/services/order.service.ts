import orderModel from '../models/order.model';

const getAllOrders = async () => {
  const newOrder = await orderModel.findAllOrders(); 
  return newOrder;
};

const orderService = { getAllOrders };

export default orderService;