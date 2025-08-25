import { model, Schema } from "mongoose";
import { PAYMENTSTATUS } from "./payment.constant";
import { TPayment } from "./payment.interface";

const paymentSchema = new Schema<TPayment>(
  {
    transactionId: {
      type: String,
      required: true,
    },

    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    status: {
      type: String,
      default: PAYMENTSTATUS.Pending,
    },
  },
  { timestamps: true }
);

//
export const paymentModel = model<TPayment>("Payment", paymentSchema);
