import httpStatus from "http-status";
import catchAsync from "../../util/catchAsync";
import sendResponse from "../../util/sendResponse";
import { productServices } from "./product.service";

// ! for adding product
const addNewProduct = catchAsync(async (req, res) => {
  const result = await productServices.addNewProduct();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product added  !!!",
    data: result,
  });
});

//
export const productController = {
  addNewProduct,
};
