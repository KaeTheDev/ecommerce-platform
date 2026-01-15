import ProductImageGallery from "../components/ProductCard/ProductImageGallery/ProductImageGallery";
import ProductInformation from "../components/ProductCard/ProductInformation/ProductInformation";
import ProductDetailsTabs from "../components/ProductCard/ProductDetailsTab/ProductDetailsTab";
import ProductRecommendations from "../components/ProductRecommendations/ProductRecommendations";

const ProductDisplay = () => {
    return (
        <main className="w-full mt-4">
            {/* Top Section: Gallery + Info */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Image Gallery */}
                    <div className="shrink-0">
                        <ProductImageGallery />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex justify-center lg:justify-start">
                        <ProductInformation />
                    </div>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ProductDetailsTabs />
            </section>

            {/* Recommendations */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ProductRecommendations />
            </section>
        </main>
    )
}

export default ProductDisplay;