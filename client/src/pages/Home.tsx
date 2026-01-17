import FeaturedCategories from "../components/FeaturedCategories/FeaturedCategories";
import Hero from "../components/Hero/Hero";

export const Home = () => {
  return (
    <>
      {/* <h1 className="text-3xl text-purple-700">Welcome to Luxarist!</h1> */}
      <div className="flex flex-col">
      <Hero />
      <h2 className="text-5xl text-center mt-6">Featured Collections</h2>
      <p className="text-center">Explore our handpicked selection of fine jewelry.</p>
      <FeaturedCategories />
      </div>
    </>
  );
};
