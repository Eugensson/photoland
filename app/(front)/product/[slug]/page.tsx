import { ProductImages } from "@/components/product-images";
import { RelatedProducts } from "@/components/related-products";

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
    <div className="mb-16 pt-44 lg:pt-10 xl:pt-0">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:max-w-[40%] lg:h-[540px] flex flex-1 items-center justify-center grad rounded-lg">
            <ProductImages images={product.images} />
          </div>
          <div className="flex flex-1 flex-col justify-center p-12 xl:p-20 bg-primary rounded-lg">
            <p className="text-accent text-lg font-medium uppercase mb-2">
              {product.category} cameras
            </p>
            <h2 className="h2 mb-4">{product.name}</h2>
            <p className="mb-12">{product.description}</p>
            <div className="flex items-center gap-x-8">
              <p className="text-3xl font-semibold text-accent">
                ${product.price}
              </p>
              <button type="button" className="btn btn-accent">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts
          category={product.category}
          productId={product._id.toString()}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
