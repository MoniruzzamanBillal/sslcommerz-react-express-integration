import App from "@/App";
import PurchaseFail from "@/components/ui/PurchaseFail";
import PurchaseSuccess from "@/components/ui/PurchaseSuccess";
import HomePage from "@/page/HomePage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/purchase-success",
        element: <PurchaseSuccess />,
      },
      {
        path: "/purchase-fail",
        element: <PurchaseFail />,
      },
      {
        path: "/about",
        element: <p>about us </p>,
      },
    ],
  },
]);

export default router;
