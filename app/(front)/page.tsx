import { Hero } from "@/components/hero";
import { LatestProducts } from "@/components/latest-products";

// import { getAllProducts } from "@/lib/actions/product.actions";

const Home = async () => {
  // const products = await getAllProducts({ limit: 8, page: 1 });

  // console.log("products", products);

  return (
    <section className="">
      <Hero />
      <LatestProducts />
    </section>
  );
};

export default Home;
