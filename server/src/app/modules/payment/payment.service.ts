import httpStatus from "http-status";
import mongoose from "mongoose";
import AppError from "../../Error/AppError";
import { productModel } from "../product/product.model";
import { sslServices } from "../ssl/ssl.service";
import { PAYMENTSTATUS } from "./payment.constant";
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

  const paymentDataPayload = {
    price: parseFloat(itemData?.price),
    transactionId,
    productName: itemData?.name,
    userName: "Moniruzzaman",
    userEmail: "monir@gmail.com",
  };

  //   ! create payment data
  await paymentModel.create({ transactionId, productId: itemData?._id });

  const sslResult = await sslServices.initPayment(paymentDataPayload);

  //   console.log(sslResult?.GatewayPageURL);

  return sslResult?.GatewayPageURL;

  //
};

// ! for success payment data
const successfullyPayment = async (payload) => {
  // ! find the payment record
  const paymentData = await paymentModel.findOne({
    transactionId: payload?.tran_id,
  });

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // ! update the payment record to complete
    const updatedPaymentData = await paymentModel.findOneAndUpdate(
      {
        transactionId: payload?.tran_id,
      },
      { status: PAYMENTSTATUS.Completed },
      { session }
    );

    // ! update the inventory count of product
    await productModel.findByIdAndUpdate(
      paymentData?.productId,
      { $inc: { inventoryCount: -1 } },
      { session }
    );

    await session.commitTransaction();
    await session.endSession();

    return updatedPaymentData;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    console.log(error);
  }

  //
};

// ! for fail payment data
const failPayment = async (payload) => {
  // ! update the payment record to failed
  const failPaymentData = await paymentModel.findOneAndUpdate(
    {
      transactionId: payload?.tran_id,
    },
    { status: PAYMENTSTATUS.Failed }
  );

  return failPaymentData;
};

// ! for canceling order
const cancelPayment = async (payload) => {
  // ! delete the payment record
  const deletePayment = await paymentModel.findOneAndDelete({
    transactionId: payload?.tran_id,
  });

  return deletePayment;
};

//
export const paymentServices = {
  orderItem,
  successfullyPayment,
  failPayment,
  cancelPayment,
};
