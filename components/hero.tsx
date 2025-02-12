import Link from "next/link";
import Image from "next/image";

import promoImg1 from "@/public/promo_img1.png";
import promoImg2 from "@/public/promo_img2.png";
import { HeroSlider } from "@/components/hero-slider";
import { CategoryNav } from "@/components/category-nav";

export const Hero = () => {
  return (
    <section className="mb-8 pt-36 lg:pt-0">
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-8">
          <div>
            <CategoryNav />
          </div>
          <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
            <HeroSlider />
          </div>
          <div className="w-full max-w-lg h-[500px] mx-auto flex flex-col gap-8">
            <div className="relative p-6 grad flex-1 h-[250px] rounded-[8px] overflow-hidden">
              <div className="max-w-[144px] h-full flex flex-col justify-center">
                <p className="mb-4 text-xl font-medium uppercase leading-tight">
                  Save 35% all dslr cameras
                </p>
                <Link href="/search" className="uppercase text-accent">
                  Shop now
                </Link>
              </div>
              <Image
                src={promoImg1}
                alt="Camera image"
                className="absolute -top-2 -right-4 z-20"
              />
            </div>
            <div className="relative p-6 grad flex-1 h-[250px] rounded-[8px] overflow-hidden">
              <div className="max-w-[144px] h-full flex flex-col justify-center">
                <p className="mb-4 text-xl font-medium uppercase leading-tight">
                  Save 25% mirrorless cameras
                </p>
                <Link href="/search" className="uppercase text-accent">
                  Shop now
                </Link>
              </div>
              <Image
                src={promoImg2}
                alt="Camera image"
                className="absolute top-4 -right-6 z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
