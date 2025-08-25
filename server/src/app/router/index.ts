import { Router } from "express";
import { paymentRouter } from "../modules/payment/payment.route";
import { productRouter } from "../modules/product/product.route";

const router = Router();

const routeArray = [
  {
    path: "/product",
    route: productRouter,
  },
  {
    path: "/payment",
    route: paymentRouter,
  },
];

routeArray.forEach((item) => {
  router.use(item.path, item.route);
});

export const MainRouter = router;
