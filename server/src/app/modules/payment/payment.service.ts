import httpStatus from "http-status";
import AppError from "../../Error/AppError";
import { productModel } from "../product/product.model";
import { sslServices } from "../ssl/ssl.service";
import { paymentModel } from "./payment.model";

type TOrderPayload = {
  productId: string;
};

// ! for ordering an item
const orderItem = async (payload: TOrderPayload) => {
  const itemData = await productModel.findById(payload?.productId);

  if (!itemData) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product not found !!!");
  }

  const transactionId = `TXN-${Date.now()}`;

  //   console.log(transactionId);

  //   console.log(itemData);

  const paymentDataPayload = {
    price: parseFloat(itemData?.price),
    transactionId,
    productName: itemData?.name,
    userName: "Moniruzzaman",
    userEmail: "monir@gmail.com",
  };

  //   console.log(paymentDataPayload);

  //   ! create payment data
  await paymentModel.create({ transactionId, productId: itemData?._id });

  const sslResult = await sslServices.initPayment(paymentDataPayload);

  //   console.log(sslResult?.GatewayPageURL);

  return sslResult?.GatewayPageURL;

  //
};

// ! for success payment data
const successfullyPayment = async (payload) => {
  console.log(payload?.tran_id);
  console.log(payload);
};

// ! for fail payment data
const failPayment = async (payload) => {
  console.log(payload);
};

// ! for canceling order
const cancelPayment = async (payload) => {
  console.log(payload);
};

//
export const paymentServices = {
  orderItem,
  successfullyPayment,
  failPayment,
  cancelPayment,
};
