import { Router } from "express";
import { paymentController } from "./payment.controller";

const router = Router();

// ! for ordering item
router.post("/order-item", paymentController.orderItem);

router.post("/success", paymentController.successfullyPayment);

router.post("/fail", paymentController.failPayment);

router.post("/cancel", paymentController.cancelPayment);

//
export const paymentRouter = router;
