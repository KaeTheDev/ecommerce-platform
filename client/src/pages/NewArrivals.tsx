// import NewArrivalsHero from "../components/NewArrivalsHero/NewArrivalsHero";
// import NewArrivalCard from "../components/NewArrivalCard/NewArrivalCard";

// const NewArrivals = () => {
//   // Mock array of products for demonstration
//   const products = Array.from({ length: 12 }); // 12 placeholder cards

//   return (
//     <>
//       <NewArrivalsHero />

//       {/* Info Banner */}
//       <div className="flex justify-center mt-8 px-4">
//         <div className="bg-black text-white rounded-2xl px-8 py-6 w-full shadow-lg flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left max-w-7xl">
//           {/* Collection Info */}
//           <div className="flex flex-col gap-4">
//             <span className="text-sm sm:text-base">↝ JUST LAUNCHED</span>
//             <p className="text-2xl sm:text-3xl font-semibold">
//               Exclusive New Collection
//             </p>
//             <p className="text-base sm:text-lg">
//               10 stunning pieces now available
//             </p>
//           </div>

//           {/* Price Range */}
//           <div className="flex flex-row gap-12">
//             <div className="flex flex-col items-center sm:items-start gap-2">
//               <p className="text-sm sm:text-base">From</p>
//               <p className="text-lg sm:text-xl font-semibold">$6,500</p>
//             </div>
//             <div className="flex flex-col items-center sm:items-start gap-2">
//               <p className="text-sm sm:text-base">To</p>
//               <p className="text-lg sm:text-xl font-semibold">$45,000</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <section className="px-4 sm:px-6 lg:px-10 mt-10 mb-20">
//         <div className="mx-auto grid gap-4 sm:gap-6 lg:gap-8 max-w-360 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
//           {products.map((_, index) => (
//             <NewArrivalCard key={index} />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default NewArrivals;

import NewArrivalsHero from "../components/NewArrivalsHero/NewArrivalsHero";
import NewArrivalCard from "../components/NewArrivalCard/NewArrivalCard";

const NewArrivals = () => {
  // Mock array of products for demonstration
  const products = Array.from({ length: 12 });

  return (
    <>
      <NewArrivalsHero />

      {/* Info Banner */}
      <div className="flex justify-center mt-8 px-4 sm:px-6 lg:px-10">
        <div className="bg-black text-white rounded-2xl px-8 py-6 w-full shadow-lg flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          {/* Collection Info */}
          <div className="flex flex-col gap-4">
            <span className="text-sm sm:text-base">↝ JUST LAUNCHED</span>
            <p className="text-2xl sm:text-3xl font-semibold">
              Exclusive New Collection
            </p>
            <p className="text-base sm:text-lg">
              10 stunning pieces now available
            </p>
          </div>

          {/* Price Range */}
          <div className="flex flex-row gap-12">
            <div className="flex flex-col items-center sm:items-start gap-2">
              <p className="text-sm sm:text-base">From</p>
              <p className="text-lg sm:text-xl font-semibold">$6,500</p>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2">
              <p className="text-sm sm:text-base">To</p>
              <p className="text-lg sm:text-xl font-semibold">$45,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="px-4 sm:px-6 lg:px-10 mt-10 mb-20">
        <div className="mx-auto grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {products.map((_, index) => (
            <NewArrivalCard key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
