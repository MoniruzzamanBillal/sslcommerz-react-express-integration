/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

type TInitPayment = {
  price: number;
  transactionId: string;
  productName: string;
  userName: string;
  userEmail: string;
};

// ! for initializing payment
const initPayment = async (payload: TInitPayment) => {
  try {
    const data = {
      store_id: process.env.STORE_ID,
      store_passwd: process.env.STORE_PASSWORD,
      total_amount: payload?.price,
      currency: "BDT",
      tran_id: payload?.transactionId,
      success_url: "http://localhost:5000/api/payment/success",
      fail_url: "http://localhost:5000/api/payment/fail",
      cancel_url: "http://localhost:5000/api/payment/cancel",
      ipn_url: "http://localhost:3030/ipn",
      shipping_method: "Courier",
      product_name: payload?.productName,
      product_category: "general",
      product_profile: "general",
      cus_name: payload?.userName,
      cus_email: payload?.userEmail,
      cus_add1: "N/A",
      cus_add2: "N/A",
      cus_city: "N/A",
      cus_state: "N/A",
      cus_postcode: "N/A",
      cus_country: "Bangladesh",
      cus_phone: "01711111111",
      cus_fax: "01711111111",
      ship_name: payload?.userName,
      ship_add1: "N/A",
      ship_add2: "N/A",
      ship_city: "N/A",
      ship_state: "N/A",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
    };

    const response = await axios({
      method: "post",
      url: process.env.SSL_PAYMENT_URL,
      data,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    return response?.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

//
export const sslServices = {
  initPayment,
};
