import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { Minus, Plus } from "lucide-react";

import { round2 } from "@/lib/utils";
import { IProduct } from "@/lib/db/models/product.models";

import { CartItemType } from "@/hooks/use-cart-store";

interface CartItemProps {
  item: CartItemType;
  increase: (product: IProduct) => void;
  decrease: (product: IProduct) => void;
  removeItem: (product: IProduct) => void;
}

export const CartItem = ({
  item,
  increase,
  decrease,
  removeItem,
}: CartItemProps) => {
  return (
    <div className="flex gap-x-8">
      <Link href={`/product/${item.product.slug}`}>
        <Image
          src={item.product.images[0]}
          alt={`${item.product.name} image`}
          width={70}
          height={70}
        />
      </Link>
      <div className="flex-1">
        <div className="flex gap-x-4 mb-3">
          <Link
            href={`/product/${item.product.slug}`}
            className="text-sm line-clamp-2"
          >
            {item.product.name}
          </Link>
          <IoClose
            onClick={() => removeItem(item.product)}
            className="min-h-6 min-w-6 cursor-pointer hover:text-accent transition-colors"
          />
        </div>
        <div className="flex items-center gap-x-12">
          <div className="flex gap-x-4 mb-2">
            <div className="flex items-center gap-x-2">
              <button
                type="button"
                className="p-1 outline outline-[0.5px] rounded"
                onClick={() => decrease(item.product)}
              >
                <Minus size={16} />
              </button>
              <span className="w-[25px] h-[25px] flex items-center justify-center outline outline-[0.5px] rounded">
                {item.quantity}
              </span>
              <button
                type="button"
                className="p-1 outline outline-[0.5px] rounded"
                onClick={() => increase(item.product)}
              >
                <Plus size={16} />
              </button>
            </div>
            <span className="text-lg text-accent">
              ${round2(item.product.price * item.quantity)}
            </span>
          </div>
        </div>
        <div>
          <span className="text-accent">${item.product.price} per piece</span>
        </div>
      </div>
    </div>
  );
};
