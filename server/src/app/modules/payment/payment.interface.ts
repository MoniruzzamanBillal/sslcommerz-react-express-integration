import { ObjectId } from "mongoose";
import { PAYMENTSTATUS } from "./payment.constant";

export type TPayment = {
  transactionId: string;
  productId: ObjectId;
  status: keyof typeof PAYMENTSTATUS;
};
