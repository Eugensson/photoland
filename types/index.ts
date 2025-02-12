import { z } from "zod";

import {
  CartSchema,
  OrderInputSchema,
  OrderItemSchema,
  ProductInputSchema,
  ShippingAddressSchema,
  UserInputSchema,
  UserNameSchema,
  UserSignInSchema,
  UserSignUpSchema,
} from "@/lib/validator";

export type IProductInput = z.infer<typeof ProductInputSchema>;

export type Data = {
  users: IUserInput[];
  products: IProductInput[];
};

export type Cart = z.infer<typeof CartSchema>;
export type IOrderInput = z.infer<typeof OrderInputSchema>;
export type IOrderList = IOrderInput & {
  _id: string;
  user: {
    name: string;
    email: string;
  };
  createdAt: Date;
};
export type OrderItem = z.infer<typeof OrderItemSchema>;
export type ShippingAddress = z.infer<typeof ShippingAddressSchema>;

export type IUserName = z.infer<typeof UserNameSchema>;
export type IUserInput = z.infer<typeof UserInputSchema>;
export type IUserSignIn = z.infer<typeof UserSignInSchema>;
export type IUserSignUp = z.infer<typeof UserSignUpSchema>;
