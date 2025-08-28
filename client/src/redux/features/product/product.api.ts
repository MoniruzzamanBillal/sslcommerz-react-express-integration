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

    // ! for ordering product
    orderItem: builder.mutation({
      query: (payload) => {
        return {
          url: `/payment/order-item`,
          method: "POST",
          body: payload,
        };
      },
    }),

    //
  }),
});

//
export const { useGetAllProductQuery, useOrderItemMutation } = productApi;
