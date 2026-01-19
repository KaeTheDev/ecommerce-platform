import { Link } from "react-router-dom";
import NewArrivalCard from "../NewArrivalCard/NewArrivalCard";
import { useCarousel } from "../../customHooks/useCarousel";

const NewArrivals = () => {
  const products = Array.from({ length: 12 }); // mock data
  const { containerRef, next, prev } = useCarousel();

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar: Title + View All */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">New Arrivals</h2>
          <Link
            to="/new-arrivals"
            className="text-sm sm:text-base font-medium text-blue-600 hover:underline"
          >
            VIEW ALL →
          </Link>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent snap-x snap-mandatory"
        >
          {products.map((_, index) => (
            <div
              key={index}
              className="
                shrink-0
                w-[70%] sm:w-[45%] md:w-[32%] lg:w-[22%]
                snap-start
              "
            >
              <NewArrivalCard />
            </div>
          ))}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex justify-center gap-4 mt-4">
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