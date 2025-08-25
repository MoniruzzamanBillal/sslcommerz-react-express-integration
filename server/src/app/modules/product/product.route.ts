import { Router } from "express";
import { productController } from "./product.controller";

const router = Router();

// ! for getting alll product
router.get("/products", productController.getAllProduct);

// ! for adding new product
router.post("/add-product", productController.addNewProduct);

//
export const productRouter = router;
