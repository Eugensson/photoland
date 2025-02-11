import { ProductSlider } from "@/components/product-slider";
import { getLastProducts } from "@/lib/actions/product.actions";

export const LatestProducts = async () => {
  const newProducts = await getLastProducts(9);

  return (
    <section className="mb-16 container">
      <h2 className="h2 mb-6 text-center xl:text-left">Latest Products</h2>
      <ProductSlider data={newProducts} />
    </section>
  );
};
