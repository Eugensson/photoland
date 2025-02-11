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

  const products = await getAllProducts({ category, limit: 8, page: 1 });

  return (
    <div>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
};

export default Products;
