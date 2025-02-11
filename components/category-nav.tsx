import Link from "next/link";

import { getAllCategories } from "@/lib/actions/product.actions";

export const CategoryNav = async () => {
  const categories = await getAllCategories();

  return (
    <aside className="hidden xl:block">
      <div className="w-[286px] h-[500px] flex flex-col rounded-[8px] bg-primary overflow-hidden">
        <h2 className="py-4 flex items-center justify-center text-primary font-semibold uppercase bg-accent">
          Browse Categories
        </h2>
        <ul className="p-6 flex flex-col gap-y-6">
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/products/${category}`} className="uppercase">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
