"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { ProductCard } from "@/components/product-card";

import { IProduct } from "@/lib/db/models/product.models";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ProductSlider = ({ data }: { data: IProduct[] }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      loop={false}
      navigation
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      pagination={{
        clickable: true,
      }}
      className="productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]"
    >
      {data.map((product: IProduct) => (
        <SwiperSlide key={product._id.toString()}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
