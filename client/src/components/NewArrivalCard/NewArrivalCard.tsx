const NewArrivalCard = () => {
    return (
      <div className="group flex h-80 w-72 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
        {/* Image */}
        <div className="h-3/4 overflow-hidden bg-gray-50">
          <img
            src="/assets/images/filler-image.jpg"
            alt="Diamond Bracelet"
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
  
        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
        <p className="mt-1 font-semibold text-lg leading-tight line-clamp-2">
        Diamond Bracelet
          </p>
          <h3 className="text-xs font-medium uppercase tracking-wide text-gray-500">Bracelets </h3>
          <p className="mt-auto text-sm text-gray-500">$1,189</p>
        </div>
      </div>
    );
  };
  
  export default NewArrivalCard;  