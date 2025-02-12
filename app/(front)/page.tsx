import { Hero } from "@/components/hero";
import { LatestProducts } from "@/components/latest-products";

const Home = async () => {
  return (
    <section className="">
      <Hero />
      <LatestProducts />
    </section>
  );
};

export default Home;
