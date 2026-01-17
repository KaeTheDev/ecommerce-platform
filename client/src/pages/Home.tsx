import FeaturedCategories from "../components/FeaturedCategories/FeaturedCategories";
import HomeHero from "../components/HomeHero/HomeHero";
import FeaturedSignaturePiece from "../components/FeaturedSignaturePiece/FeaturedSignaturePiece";
import LuxaristPromises from "../components/LuxaristPromises/LuxaristPromises";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col">
      <HomeHero />
      <h2 className="text-5xl text-center mt-6">Featured Collections</h2>
      <p className="text-center">Explore our handpicked selection of fine jewelry.</p>
      <FeaturedCategories />
      <FeaturedSignaturePiece />
      <h3 className="text-5xl text-center mt-6">New Arrivals</h3>
      <p className="text-center">Discover the latest additions to our collection.</p>
      <NewArrivals />
      <h3 className="text-5xl text-center mt-6">The Luxarist Promise</h3>
      <p className="text-center">Uncompromising Quality</p>
      <LuxaristPromises />
      <NewsletterSignup />
      </div>
    </>
  );
};
