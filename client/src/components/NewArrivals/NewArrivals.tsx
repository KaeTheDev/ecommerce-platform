// import NewArrivalCard from "../NewArrivalCard/NewArrivalCard";

// const NewArrivals = () => {
    
//     return (
//       <section className="py-16">
//         <div className="carousel">
//             <NewArrivalCard />
//             <NewArrivalCard />
//             <NewArrivalCard />
//             <NewArrivalCard />
//             <NewArrivalCard />
//         </div>
//       </section>
//     );
//   };

// export default NewArrivals;

import NewArrivalCard from "../NewArrivalCard/NewArrivalCard";

const NewArrivals = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mock Carousel Container */}
        <div className="carousel-container flex gap-4 lg:gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent snap-x snap-mandatory">
          <NewArrivalCard />
          <NewArrivalCard />
          <NewArrivalCard />
          <NewArrivalCard />
        </div>

        {/* Mock Navigation (optional for layout) */}
        <div className="flex justify-center gap-4 mt-12">
          <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-all">
            ←
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-all">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;