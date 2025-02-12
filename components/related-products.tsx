import { ProductSlider } from "@/components/product-slider";

import { getRelatedProductsByCategory } from "@/lib/actions/product.actions";

interface RelatedProductsProps {
  category: string;
  productId: string;
}
export const RelatedProducts = async ({
  category,
  productId,
}: RelatedProductsProps) => {
  console.log(category, productId);
  const { data } = await getRelatedProductsByCategory({
    category,
    productId,
    limit: 10,
    page: 1,
  });

  return (
    <section className="container mb-16">
      <h2 className="h2 mb-6 text-center xl:text-left capitalize">
        Related products
      </h2>
      <ProductSlider data={data} />
    </section>
  );
};
