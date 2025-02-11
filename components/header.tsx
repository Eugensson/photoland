import { Logo } from "@/components/logo";
import { Cart } from "@/components/cart";
import { SerchForm } from "@/components/serch-form";
import { CategoryNavMobile } from "@/components/category-nav-mobile";

export const Header = () => {
  return (
    <header className="fixed top-0 z-40 lg:relative xl:mb-8 py-6 w-full bg-primary">
      <div className="container">
        <div className="mb-4 xl:mb-0 flex justify-between lg:items-center gap-4">
          <CategoryNavMobile />
          <Logo />
          <SerchForm className="hidden w-full xl:max-w-[734px] xl:flex" />
          <div className="flex items-center gap-x-2.5">
            <p className="hidden uppercase xl:block">
              Need Help? (212)555-7890
            </p>
            <Cart />
          </div>
        </div>
        <SerchForm className="xl:hidden" />
      </div>
    </header>
  );
};
