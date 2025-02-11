import { getProductBySlug } from "@/lib/actions/product.actions";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  try {
    const product = await getProductBySlug(slug);
    if (!product) {
      return { title: "Product not found" };
    }

    return {
      title: product.name,
      description: product.description,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return { title: "Product not found" };
  }
};

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  const product = await getProductBySlug(slug);

  return (
    <div>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
};

export default ProductDetails;
