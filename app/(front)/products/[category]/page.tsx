import { CategoryNav } from "@/components/category-nav";
import { ProductCard } from "@/components/product-card";

import { getAllProducts } from "@/lib/actions/product.actions";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const category = (await params).category;

  try {
    const products = await getAllProducts({ category, limit: 8, page: 1 });

    if (!products) {
      return { title: "Products not found" };
    }

    return {
      title: `Serch result for ${category}`,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return { title: "Products not found" };
  }
};

const Products = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const category = (await params).category;

  const data = await getAllProducts({ category, limit: 8, page: 1 });

  return (
    <div className="mb-16 pt-40 lg:pt-10 xl:pt-0">
      <div className="container">
        <div className="flex gap-8">
          <CategoryNav />
          <div>
            <h2 className="py-3 text-xl text-center lg:text-left uppercase">
              {category} cameras
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {data.products.map((product) => (
                <li key={product._id.toString()}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
