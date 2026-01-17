const SingleCollectionCard = () => {
    return (
      <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        {/* Image */}
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src="/assets/images/filler-image.jpg"
            alt="Infinity Diamond Ring - Ring with diamonds"
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
  
        {/* Content */}
        <div className="flex flex-col p-4 sm:p-5 flex-1">
          <p className="text-sm sm:text-base font-medium leading-tight line-clamp-2">
            Infinity Diamond Necklace
          </p>
          <p className="text-sm sm:text-base text-gray-500 line-clamp-2">
            Necklace with diamonds
          </p>
  
          <p className="mt-auto text-sm sm:text-base font-semibold text-gray-900">
            $2,450
          </p>
        </div>
      </div>
    );
  };
  
  export default SingleCollectionCard;  