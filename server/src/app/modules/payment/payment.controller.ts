import httpStatus from "http-status";
import catchAsync from "../../util/catchAsync";
import sendResponse from "../../util/sendResponse";
import { paymentServices } from "./payment.service";

const redirectURL = "http://localhost:5173";

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

  if (result) {
    res.redirect(`${redirectURL}/purchase-success`);
  }
});

// ! for fail payment data
const failPayment = catchAsync(async (req, res) => {
  const result = await paymentServices.failPayment(req?.body);

  if (result) {
    res.redirect(`${redirectURL}/purchase-fail`);
  }
});

// ! for canceling order
const cancelPayment = catchAsync(async (req, res) => {
  const result = await paymentServices.cancelPayment(req?.body);

  if (result) {
    res.redirect(`${redirectURL}`);
  }
});

//
export const paymentController = {
  orderItem,
  successfullyPayment,
  failPayment,
  cancelPayment,
};
