import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

import { IProduct } from "@/lib/db/models/product.models";

export type CartItemType = {
  product: IProduct;
  quantity: number;
};

interface CartState {
  items: CartItemType[];
  addItem: (item: CartItemType) => void;
  increase: (product: IProduct) => void;
  decrease: (product: IProduct) => void;
  removeItem: (product: IProduct) => void;
  clearCart: () => void;
  calcTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist<CartState>(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (i) => i.product._id === item.product._id
          );
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.product._id === item.product._id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),

      increase: (product) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.product._id === product._id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        })),

      decrease: (product) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.product._id === product._id
                ? { ...i, quantity: i.quantity - 1 }
                : i
            )
            .filter((i) => i.quantity > 0),
        })),

      removeItem: (product) =>
        set((state) => ({
          items: state.items.filter((i) => i.product._id !== product._id),
        })),

      clearCart: () => set({ items: [] }),

      calcTotalPrice: () => {
        const total = get().items.reduce(
          (total: number, item: CartItemType) =>
            total + item.product.price * item.quantity,
          0
        );
        return parseFloat(total.toFixed(2));
      },
    }),
    {
      name: "cart-storage",
    } as PersistOptions<CartState>
  )
);
