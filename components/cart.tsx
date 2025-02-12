"use client";

import { useMemo } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartInfo } from "@/components/cart-info";
import { CartItem } from "@/components/cart-item";
import { ScrollArea } from "@/components/ui/scroll-area";

import { CartItemType } from "@/hooks/use-cart-store";

import { useCartStore } from "@/hooks/use-cart-store";
import { IoArrowForward, IoCartOutline } from "react-icons/io5";

export const Cart = () => {
  const { items, increase, decrease, removeItem, clearCart } = useCartStore();
  const totalPrice = useCartStore((state) => state.calcTotalPrice());

  const totalItems = useMemo(
    () => items.reduce((a, c) => a + c.quantity, 0),
    [items]
  );

  return (
    <Sheet>
      <SheetTrigger className="relative cursor-pointer">
        <CartInfo />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-white">
            Your cart ({totalItems} {totalItems === 1 ? "item" : "items"})
          </SheetTitle>
          <SheetDescription className="sr-only">Cart</SheetDescription>
        </SheetHeader>
        {items.length > 0 ? (
          <ScrollArea className="mt-5 h-[65vh] w-full p-4">
            <ul className="flex flex-col gap-y-10">
              {items.map((item: CartItemType) => (
                <li key={item.product._id}>
                  <CartItem
                    item={item}
                    increase={increase}
                    decrease={decrease}
                    removeItem={removeItem}
                  />
                </li>
              ))}
            </ul>
          </ScrollArea>
        ) : (
          <div className="h-full flex flex-col gap-4 items-center justify-center text-white/30">
            <p className="text-2xl">Your cart is empty</p>
            <IoCartOutline size={60} />
          </div>
        )}
        {items.length >= 1 && (
          <div className="p-6 flex flex-col">
            <div className="flex justify-between text-lg">
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex justify-between text-2xl">
              <p>Total</p>
              <p>${totalPrice}</p>
            </div>
          </div>
        )}
        {items.length >= 1 && (
          <div className="px-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={clearCart}
              className="btn btn-accent flex-1 px-2 gap-x-2 hover:bg-accent-hover text-primary"
            >
              Clear cart
            </button>
            <button
              type="button"
              className="btn btn-accent flex-1 px-2 gap-x-2 hover:bg-accent-hover text-primary"
            >
              Checkout
              <IoArrowForward size={18} />
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
