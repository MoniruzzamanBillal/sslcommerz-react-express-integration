export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export type TProduct = {
  _id: string;
  name: string;
  price: string;
  description: string;
  productImg: string;
  createdAt: string;
  updatedAt: string;
  inventoryCount: number;
};
