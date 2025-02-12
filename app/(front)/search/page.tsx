import { CategoryNav } from "@/components/category-nav";
import { ProductCard } from "@/components/product-card";

import {
  getAllCategories,
  getAllProducts,
} from "@/lib/actions/product.actions";

export const generateMetadata = async (props: {
  searchParams: Promise<{
    q: string;
    category: string;
    tag: string;
    price: string;
    rating: string;
    sort: string;
    page: string;
  }>;
}) => {
  const searchParams = await props.searchParams;

  const {
    q = "all",
    category = "all",

    price = "all",
  } = searchParams;

  if ((q !== "all" && q !== "") || category !== "all" || price !== "all") {
    return {
      title: `Search ${q !== "all" ? q : ""}
          ${category !== "all" ? ` : Category ${category}` : ""}          
          ${price !== "all" ? ` : Price ${price}` : ""}`,
    };
  } else {
    return {
      title: "Search Products",
    };
  }
};

const Search = async (props: {
  searchParams: Promise<{
    q: string;
    category: string;
    price: string;
    sort: string;
    page: string;
  }>;
}) => {
  const searchParams = await props.searchParams;

  const {
    q = "all",
    category = "all",
    price = "all",
    sort = "best-selling",
    page = "1",
  } = searchParams;

  const params = { q, category, price, sort, page };

  const categories = await getAllCategories();

  const data = await getAllProducts({
    category,
    query: q,
    price,
    page: Number(page),
    sort,
  });

  console.log(params);
  console.log(categories);

  return (
    <div className="mb-8 pt-40 lg:pt-10 xl:pt-0">
      <div className="container">
        <div className="flex gap-8">
          <CategoryNav />
          <div>
            <h2 className="py-3 text-xl text-center lg:text-left uppercase">
              {data.totalProducts > 0
                ? `${data.totalProducts} ${
                    data.totalProducts === 1 ? "result" : "results"
                  } for ${q}`
                : `No results found for ${q}`}
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

export default Search;
