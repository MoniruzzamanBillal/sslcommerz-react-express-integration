import { useOrderItemMutation } from "@/redux/features/product/product.api";
import { TProduct } from "@/types/globalTypes";
import { ShoppingCart } from "lucide-react";
import { Button } from "./button";

const ProductCard = ({ product }: { product: TProduct }) => {
  const [orderItem, { isLoading }] = useOrderItemMutation();

  // ! for ordering item
  const handleOrderItem = async (productId: string) => {
    console.log(productId);

    const result = await orderItem({ productId });

    // console.log(result);

    // console.log(result?.data);

    if (result?.data?.success) {
      window.location.href = result?.data?.data;
    }
  };

  return (
    <div className="productCartWrappwer bg-gray-200/70 border border-gray-400 shadow-md   rounded-md overflow-auto hover:shadow-lg hover:scale-[1.01] duration-200 flex flex-col  justify-between  ">
      {/*  */}

      <div className="ProductCardWrapper flex flex-col  justify-between    ">
        {/* product image section  */}
        <div className="prodImg  h-[14rem] relative ">
          <img
            className=" w-full h-full "
            src={
              "https://res.cloudinary.com/dbgrq28js/image/upload/v1755188077/Fitbit%20Charge%205%20Fitness%20Tracker.png"
            }
            alt="product image "
          />
        </div>

        <div className="prodDes mb-1 p-3 hover:text-prime200  ">
          {/* prod name  */}
          <h1 className=" font-medium mb-2.5  "> {product?.name} </h1>

          <div className="productPriceShopName  ">
            <p className=" font-semibold  text-lg ">$ {product?.price} </p>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="buttonSectio pb-2 px-2 flex justify-between   ">
        <Button
          disabled={isLoading}
          onClick={() => handleOrderItem(product?._id)}
          className="   text-center text-sm font-semibold text-white transition duration-100  bg-prime100 hover:bg-prime200 "
        >
          <span>
            <ShoppingCart size={24} />
          </span>
          <span>{isLoading ? "Orderind Item..." : "Order Item"}</span>
        </Button>
      </div>
      {/*  */}
    </div>
  );
};

export default ProductCard;
