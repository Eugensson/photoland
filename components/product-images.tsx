"use client";

import Image from "next/image";
import { useState } from "react";
import Zoom from "react-medium-image-zoom";

import { cn } from "@/lib/utils";

import "react-medium-image-zoom/dist/styles.css";

interface ProductImagesProps {
  className?: string;
  images: string[];
}

export const ProductImages = ({ images, className }: ProductImagesProps) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={cn("space-y-8", className)}>
      <Zoom classDialog="custom-zoom">
        <Image
          src={images[current] ?? "/images/placeholder.png"}
          alt="Product image"
          width={350}
          height={350}
          className="min-h-[300px] object-contain object-center aspect-square"
        />
      </Zoom>
      <ul className="flex items-center gap-x-2">
        {images.map((image, index) => (
          <li
            key={image}
            className={cn(
              "relative overflow-hidden border-2 border-transparent mr-2 rounded-lg cursor-pointer hover:border-accent",
              current === index && "border-accent"
            )}
            role="option"
            aria-selected={current === index}
            onClick={() => setCurrent(index)}
          >
            <Image
              src={image.trim() ? image.trim() : "/placeholder.png"}
              width={60}
              height={60}
              alt="Product image"
              className="object-contain object-center aspect-square"
            />
            <div
              className={cn(
                "absolute top-0 left-0 w-full h-full bg-primary/40 group-hover:bg-transparent",
                current === index && "bg-transparent"
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
