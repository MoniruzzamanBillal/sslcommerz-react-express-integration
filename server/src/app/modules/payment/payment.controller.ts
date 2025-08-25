import httpStatus from "http-status";
import catchAsync from "../../util/catchAsync";
import sendResponse from "../../util/sendResponse";
import { paymentServices } from "./payment.service";

// ! for ordering an item
const orderItem = catchAsync(async (req, res) => {
  const result = await paymentServices.orderItem(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is ordereding !!!",
    data: result,
  });
});

// ! for success payment data
const successfullyPayment = catchAsync(async (req, res) => {
  const result = await paymentServices.successfullyPayment(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product ordered successfully !!!",
    data: result,
  });
});

// ! for fail payment data
const failPayment = catchAsync(async (req, res) => {
  const result = await paymentServices.failPayment(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product ordered failed!!!",
    data: result,
  });
});

// ! for canceling order
const cancelPayment = catchAsync(async (req, res) => {
  const result = await paymentServices.cancelPayment(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product ordered canceled !!!",
    data: result,
  });
});

//
export const paymentController = {
  orderItem,
  successfullyPayment,
  failPayment,
  cancelPayment,
};
