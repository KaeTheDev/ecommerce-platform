const FeaturedSignaturePiece = () => {
    return (
      <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-6xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-gray-500">
          SIGNATURE COLLECTION
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
          The Necklace That Defines the Brand
          </h2>
        </div>
  
        {/* Content */}
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:gap-8 lg:gap-12">
          {/* Image box */}
          <div className="w-full md:w-1/2 rounded-xl bg-white p-4 sm:p-5 lg:p-6">
            <img
              src="/assets/images/FeaturedPiece.png"
              alt="Premium diamond necklace in 18K gold plating"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
  
          {/* Content box */}
          <div className="w-full md:w-1/2 rounded-xl border border-gray-200 bg-white p-5 sm:p-6 lg:p-8 flex items-center">
            <div className="w-full space-y-4 sm:space-y-5 text-center lg:text-left">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gray-500">
                SIGNATURE COLLECTION
              </span>
  
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                Luxury Necklace
              </h3>
  
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Experience timeless elegance and unmatched craftsmanship.
              </p>
  
              <div className="flex justify-center lg:justify-start pt-2">
                <button className="inline-flex items-center justify-center rounded-full bg-black px-8 lg:px-10 py-2.5 lg:py-3 text-sm lg:text-base font-medium text-white transition hover:bg-gray-900">
                View Necklace
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedSignaturePiece;  