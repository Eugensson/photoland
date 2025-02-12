"use client";

import { useMemo } from "react";
import { SlBag } from "react-icons/sl";

import { useCartStore } from "@/hooks/use-cart-store";
import { useHasMounted } from "@/hooks/use-has-mounted";

export const CartInfo = () => {
  const { items } = useCartStore();
  const hasMounted = useHasMounted();

  const totalItems = useMemo(
    () => items.reduce((a, c) => a + c.quantity, 0),
    [items]
  );

  if (!hasMounted) return <SlBag size={30} />;

  return (
    <>
      <SlBag size={30} />
      <span className="absolute top-4 -right-1 flex items-center justify-center text-xs w-[18px] h-[18px] text-primary bg-accent rounded-full font-bold tracking-[-0.1em]">
        {totalItems}
      </span>
    </>
  );
};
