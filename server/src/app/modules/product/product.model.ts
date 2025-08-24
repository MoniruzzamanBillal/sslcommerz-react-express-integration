import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const ProductSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    productImg: { type: String, required: true },
    inventoryCount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

//
export const productModel = model<TProduct>("Product", ProductSchema);
