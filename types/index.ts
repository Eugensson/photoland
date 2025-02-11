import { z } from "zod";

import {
  ProductInputSchema,
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

export type IUserName = z.infer<typeof UserNameSchema>;
export type IUserInput = z.infer<typeof UserInputSchema>;
export type IUserSignIn = z.infer<typeof UserSignInSchema>;
export type IUserSignUp = z.infer<typeof UserSignUpSchema>;
