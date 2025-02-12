"use client";

import { useCartStore } from "@/hooks/use-cart-store";

import { IProduct } from "@/lib/db/models/product.models";

export const AddToCartButton = ({ product }: { product: IProduct }) => {
  const { addItem } = useCartStore();

  return (
    <button
      type="button"
      className="btn btn-accent"
      onClick={() => addItem({ product, quantity: 1 })}
    >
      Add to cart
    </button>
  );
};
