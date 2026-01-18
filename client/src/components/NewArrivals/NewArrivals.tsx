import NewArrivalCard from "../NewArrivalCard/NewArrivalCard";
import { useCarousel } from "../../customHooks/useCarousel";

const NewArrivals = () => {
  const products = Array.from({ length: 12 }); // mock data
  const { containerRef, next, prev } = useCarousel();

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Carousel */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent snap-x snap-mandatory"
        >
          {products.map((_, index) => (
            <div key={index} className="min-w-50 sm:min-w-60 lg:min-w-70 shrink-0">
              <NewArrivalCard />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-2">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-all"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-all"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;