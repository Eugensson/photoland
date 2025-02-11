import Link from "next/link";
import Image from "next/image";

import { IProduct } from "@/lib/db/models/product.models";

export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <article className="relative grad w-full h-[362px] rounded-[8px] overflow-hidden group">
      <Link href={`/product/${product.slug}`}>
        <div className="relative w-full h-48 flex items-center justify-center">
          <p className="absolute top-4 right-4 z-10 px-2 py-1 rounded-full text-xs font-extrabold uppercase text-primary bg-accent">
            New
          </p>
          <Image
            src={product.images[0]}
            alt={`Picture of ${product.name}`}
            width={160}
            height={160}
            className="object-cover group-hover:scale-90 transition-transform"
          />
        </div>
      </Link>
      <div className="px-6 pb-8 flex flex-col">
        <p className="text-sm text-accent capitalize mb-2">
          {product.category}
        </p>
        <Link href={`/product/${product.slug}`}>
          <p className="text-[15px] mb-4 lg:mb-9 line-clamp-1">
            {product.name}
          </p>
        </Link>
        <p className="text-lg text-accent">${product.price}</p>
      </div>
    </article>
  );
};
