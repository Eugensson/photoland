"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import bannerImg from "@/public/camera.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderData = [
  {
    id: "1",
    img: bannerImg,
    pretitle: "Special Offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop Now",
  },
  {
    id: "2",
    img: bannerImg,
    pretitle: "Exclusive Offer",
    titlePart1: "Buy One",
    titlePart2: "Get One",
    titlePart3: "50% Off",
    btnText: "Shop Now",
  },
  {
    id: "3",
    img: bannerImg,
    pretitle: "Weekend Sale",
    titlePart1: "Huge Discounts",
    titlePart2: "On Latest",
    titlePart3: "Camera Models",
    btnText: "Explore Now",
  },
];

export const HeroSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop
      pagination={{
        clickable: true,
      }}
      className="mainSlider max-w-lg lg:max-w-none h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      {sliderData.map(
        ({
          id,
          img,
          pretitle,
          titlePart1,
          titlePart2,
          titlePart3,
          btnText,
        }) => (
          <SwiperSlide key={id}>
            <div className="h-full p-5 md:p-14 flex flex-col lg:flex-row">
              <div className="w-full lg:flex-1">
                <p className="mb-8 text-center lg:text-left uppercase">
                  {pretitle}
                </p>
                <p className="text-3xl md:text-4xl font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-16">
                  {titlePart1}
                  <br />
                  {titlePart2}
                  <br />
                  {titlePart3}
                </p>
                <button
                  type="button"
                  className="btn btn-accent mx-auto lg:mx-0"
                >
                  {btnText}
                </button>
              </div>
              <div className="flex-1">
                <Image
                  src={img}
                  alt="Camera image"
                  className="xl:absolute xl:-right-16 xl:-bottom-12"
                />
              </div>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};
