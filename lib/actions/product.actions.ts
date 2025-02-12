"use server";

import { connectToDatabase } from "@/lib/db";
import { Product, IProduct } from "@/lib/db/models/product.models";

export const getAllCategories = async () => {
  await connectToDatabase();
  const categories = await Product.find().distinct("category");
  return categories;
};

export const getProductBySlug = async (slug: string) => {
  await connectToDatabase();
  const product = await Product.findOne({ slug });
  if (!product) throw new Error("Product not found");
  return JSON.parse(JSON.stringify(product)) as IProduct;
};

export const getLastProducts = async (limit: number) => {
  await connectToDatabase();
  const products = await Product.find()
    .sort({ createdAt: "desc" })
    .limit(limit);
  return JSON.parse(JSON.stringify(products)) as IProduct[];
};

export const getAllProducts = async ({
  query,
  limit,
  page,
  category,
  price,
  sort,
}: {
  query?: string;
  category?: string;
  limit?: number;
  page?: number;
  price?: string;
  sort?: string;
}) => {
  limit = limit ?? 8;

  await connectToDatabase();

  const queryFilter =
    query && query !== "all"
      ? {
          name: {
            $regex: query,
            $options: "i",
          },
        }
      : {};

  const categoryFilter = category && category !== "all" ? { category } : {};

  const priceFilter =
    price && price !== "all"
      ? {
          price: {
            $gte: Number(price.split("-")[0]),
            $lte: Number(price.split("-")[1]),
          },
        }
      : {};

  const order: Record<string, 1 | -1> =
    sort === "best-selling"
      ? { numSales: -1 }
      : sort === "price-low-to-high"
      ? { price: 1 }
      : sort === "price-high-to-low"
      ? { price: -1 }
      : sort === "avg-customer-review"
      ? { avgRating: -1 }
      : { _id: -1 };

  const products = await Product.find({
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
  })
    .sort(order)
    .skip(limit * (Number(page) - 1))
    .limit(limit)
    .lean();

  const countProducts = await Product.countDocuments({
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
  });

  return {
    products: JSON.parse(JSON.stringify(products)) as IProduct[],
    totalPages: Math.ceil(countProducts / limit),
    totalProducts: countProducts,
    from: limit * (Number(page) - 1) + 1,
    to: limit * (Number(page) - 1) + products.length,
  };
};

export const getRelatedProductsByCategory = async ({
  category,
  productId,
  limit = 4,
  page = 1,
}: {
  category: string;
  productId: string;
  limit?: number;
  page: number;
}) => {
  await connectToDatabase();
  const skipAmount = (Number(page) - 1) * limit;
  const conditions = {
    category,
    _id: { $ne: productId },
  };
  const products = await Product.find(conditions)
    .sort({ numSales: "desc" })
    .skip(skipAmount)
    .limit(limit);
  const productsCount = await Product.countDocuments(conditions);
  return {
    data: JSON.parse(JSON.stringify(products)) as IProduct[],
    totalPages: Math.ceil(productsCount / limit),
  };
};
