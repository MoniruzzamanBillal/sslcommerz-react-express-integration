import { demoProducts } from "./product.constant";
import { productModel } from "./product.model";

// ! for adding product
const addNewProduct = async () => {
  const result = await productModel.insertMany(demoProducts);

  return result;
};

// ! for getting all product
const getAllProduct = async () => {
  const transactionId = `TXN-${Date.now()}`;

  console.log(transactionId);
  console.log(process.env.STORE_ID);
  console.log(process.env.STORE_PASSWORD);
  console.log(process.env.SSL_PAYMENT_URL);

  const result = await productModel.find();

  return result;
};

//
export const productServices = {
  addNewProduct,
  getAllProduct,
};
