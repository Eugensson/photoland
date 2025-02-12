import Link from "next/link";
import { FiMenu } from "react-icons/fi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

import { getAllCategories } from "@/lib/actions/product.actions";

export const CategoryNavMobile = async () => {
  const categories = await getAllCategories();

  return (
    <Sheet>
      <SheetTrigger>
        <FiMenu size={30} className="cursor-pointer xl:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="mb-10">
            <Logo />
          </SheetTitle>
          <SheetDescription className="sr-only">Descr</SheetDescription>
        </SheetHeader>
        <ul className="flex flex-col gap-y-8">
          {categories.map((category: string) => (
            <li key={category}>
              <Link
                href={`/products/${category}`}
                className="uppercase font-medium"
              >
                {category} cameras
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
