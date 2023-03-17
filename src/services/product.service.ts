import { IProduct } from '../interfaces/product';
import productModel from '../models/product.model';

const createProduct = async (product: IProduct) => {
  const newProduct = await productModel.createProduct(product); 
  return newProduct;
};

const getAllProduct = async () => {
  const newProduct = await productModel.findAllProducts(); 
  return newProduct;
};

const productService = { createProduct, getAllProduct };

export default productService;