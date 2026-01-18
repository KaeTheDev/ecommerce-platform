// import { Link } from "react-router-dom";

// const FeaturedCategories = () => {
//   const categories = [
//     { name: "Bracelets", items: 10 },
//     { name: "Earrings", items: 8 },
//     { name: "Rings", items: 12 },
//     { name: "Necklaces", items: 9 },
//     { name: "Watches", items: 5 },
//   ];

//   return (
//     <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8">
//       <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[300px]">
//         {categories.map((cat, index) => {
//           let spanClasses = "";
//           if (cat.name === "Bracelets") spanClasses = "sm:col-span-2 lg:col-span-2 lg:row-span-2";
//           if (cat.name === "Earrings") spanClasses = "sm:col-span-2 lg:col-span-2";
//           if (cat.name === "Watches") spanClasses = "sm:col-span-2 lg:col-span-4";

//           return (
//             <div
//               key={index}
//               className={`relative group bg-gray-200 flex items-end p-4 ${spanClasses} overflow-hidden rounded-xl cursor-pointer`}
              
//             >
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

//               {/* Text content */}
//               <div className="relative z-10 w-full flex items-end justify-between">
//                 <div className="flex flex-col gap-1">
//                   {/* Category name + items inline */}
//                   <p className="text-lg font-semibold text-white uppercase tracking-wide flex items-center gap-2">
//                     {/* Category name wrapped for underline */}
//                     <span className="relative">
//                       {cat.name}
//                       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
//                     </span>

//                     {/* Number of items */}
//                     <span className="opacity-0 group-hover:opacity-70 transition-opacity duration-500 text-sm">
//                       {cat.items} items
//                     </span>
//                   </p>

//                   {/* SHOP NOW fades up */}
//                   <p className="text-sm text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//                     SHOP NOW &rarr;
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default FeaturedCategories;

import { Link } from "react-router-dom";

const FeaturedCategories = () => {
  const categories = [
    { name: "Bracelets", items: 10 },
    { name: "Earrings", items: 8 },
    { name: "Rings", items: 12 },
    { name: "Necklaces", items: 9 },
    { name: "Watches", items: 5 },
  ];

  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[300px]">
        {categories.map((cat, index) => {
          let spanClasses = "";
          if (cat.name === "Bracelets") spanClasses = "sm:col-span-2 lg:col-span-2 lg:row-span-2";
          if (cat.name === "Earrings") spanClasses = "sm:col-span-2 lg:col-span-2";
          if (cat.name === "Watches") spanClasses = "sm:col-span-2 lg:col-span-4";

          return (
            <Link
              to={`/collections/${cat.name.toLowerCase()}`} // Link to respective category
              key={index}
              className={`relative group bg-gray-200 flex items-end p-4 ${spanClasses} overflow-hidden rounded-xl cursor-pointer`}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

              {/* Text content */}
              <div className="relative z-10 w-full flex items-end justify-between">
                <div className="flex flex-col gap-1">
                  {/* Category name + items inline */}
                  <p className="text-lg font-semibold text-white uppercase tracking-wide flex items-center gap-2">
                    {/* Category name wrapped for underline */}
                    <span className="relative">
                      {cat.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                    </span>

                    {/* Number of items */}
                    <span className="opacity-0 group-hover:opacity-70 transition-opacity duration-500 text-sm">
                      {cat.items} items
                    </span>
                  </p>

                  {/* SHOP NOW fades up */}
                  <p className="text-sm text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    SHOP NOW &rarr;
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedCategories;
