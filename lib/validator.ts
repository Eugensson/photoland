import { z } from "zod";

import { formatNumberWithDecimal } from "@/lib/utils";

const MongoId = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, { message: "Invalid MongoDB ID" });

const UserName = z
  .string()
  .min(2, { message: "Username must be at least 2 characters" })
  .max(50, { message: "Username must be at most 30 characters" });
const Email = z.string().min(1, "Email is required").email("Email is invalid");
const Password = z.string().min(3, "Password must be at least 3 characters");
const UserRole = z.string().min(1, "role is required");

export const UserInputSchema = z.object({
  name: UserName,
  email: Email,
  image: z.string().optional(),
  emailVerified: z.boolean(),
  role: UserRole,
  password: Password,
});

export const UserSignInSchema = z.object({
  email: Email,
  password: Password,
});

export const UserSignUpSchema = UserSignInSchema.extend({
  name: UserName,
  confirmPassword: Password,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const UserNameSchema = z.object({
  name: UserName,
});

export const UserUpdateSchema = z.object({
  _id: MongoId,
  name: UserName,
  email: Email,
  role: UserRole,
});

const Price = (field: string) =>
  z.coerce
    .number()
    .refine(
      (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
      `${field} must have exactly two decimal places (e.g., 49.99)`
    );

export const ProductInputSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(1, "Category is required"),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  brand: z.string().min(1, "Brand is required"),
  description: z.string().min(1, "Description is required"),
  price: Price("Price"),
  countInStock: z.coerce
    .number()
    .int()
    .nonnegative("count in stock must be a non-negative number"),
});
