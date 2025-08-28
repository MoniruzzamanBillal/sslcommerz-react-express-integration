import App from "@/App";
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
        path: "/about",
        element: <p>about us </p>,
      },
    ],
  },
]);

export default router;
