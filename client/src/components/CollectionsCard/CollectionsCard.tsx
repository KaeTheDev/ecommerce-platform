// const CollectionsCard = () => {
//     return (
//         <div className="group flex h-80 w-72 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
//           {/* Image */}
//           <div className="h-3/4 overflow-hidden bg-gray-50">
//             <img
//               src="/assets/images/filler-image.jpg"
//               alt="Diamond Bracelet"
//               className="h-full w-full object-cover transition-transform group-hover:scale-105"
//             />
//           </div>
    
//           {/* Content */}
//           <div className="flex flex-1 flex-col p-5">
//           <p className="mt-1 font-semibold text-lg leading-tight line-clamp-2">
//           Etoile Diamond Bracelet
//             </p>
//             <h3 className="text-xs font-medium uppercase tracking-wide text-gray-500">Bracelets </h3>
//             <p className="mt-auto text-sm text-gray-500">$12,500</p>
//           </div>
//         </div>
//       );
//     };
// export default CollectionsCard;

const CollectionsCard = () => {
    return (
      <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        {/* Image */}
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src="/assets/images/filler-image.jpg"
            alt="Etoile Diamond Bracelet"
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
  
        {/* Content */}
        <div className="flex flex-col p-4 sm:p-5">
          <p className="text-sm sm:text-base font-medium leading-tight line-clamp-2">
            Etoile Diamond Bracelet
          </p>
  
          <p className="mt-2 text-sm sm:text-base font-semibold">
            $12,500
          </p>
        </div>
      </div>
    );
  };
  
  export default CollectionsCard;  