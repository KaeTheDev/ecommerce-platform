import ProductDetailsTabs from "../components/ProductCard/ProductDetailsTab/ProductDetailsTab";
import ProductImageGallery from "../components/ProductCard/ProductImageGallery/ProductImageGallery";
import ProductInformation from "../components/ProductCard/ProductInformation/ProductInformation";
import ProductRecommendations from "../components/ProductRecommendations/ProductRecommendations";

export const Home = () => {
  return (
    <>
      <h1 className="text-3xl text-purple-700">Welcome to Luxarist!</h1>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <ProductImageGallery />
          <ProductInformation />
        </div>
        <ProductDetailsTabs />
      </div>

      <ProductRecommendations />
    </>
  );
};
