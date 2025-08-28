import ProductCard from "@/components/ui/ProductCard";
import { useGetAllProductQuery } from "@/redux/features/product/product.api";
import { TProduct } from "@/types/globalTypes";

const HomePage = () => {
  const { data: productData } = useGetAllProductQuery(undefined);

  return (
    <div className="mainContainer w-[95%] m-auto py-10  ">
      <div className="products  mx-auto w-[80%] xsm:w-full  grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-4 gap-x-5 gap-y-8">
        {productData?.data &&
          productData?.data?.map((product: TProduct) => (
            <ProductCard key={product?._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
