import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //

    // ! for getting all products
    getAllProduct: builder.query({
      query: () => {
        return {
          url: `/product/products`,
          method: "GET",
        };
      },
    }),

    //
  }),
});

//
export const { useGetAllProductQuery } = productApi;
