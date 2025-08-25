import { demoProducts } from "./product.constant";
import { productModel } from "./product.model";

// ! for adding product
const addNewProduct = async () => {
  const result = await productModel.insertMany(demoProducts);

  return result;
};

// ! for getting all product
const getAllProduct = async () => {
  const result = await productModel.find();

  return result;
};

//
export const productServices = {
  addNewProduct,
  getAllProduct,
};
