const FeaturedCategories = () => {
    return (
      <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[300px]">
          {/* Main image - tall only on desktop */}
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-gray-200 flex items-center justify-center text-lg font-medium uppercase tracking-wide">
            Bracelets
          </div>
  
          {/* Wide top-right image */}
          <div className="sm:col-span-2 lg:col-span-2 bg-gray-200 flex items-center justify-center text-lg font-medium uppercase tracking-wide">
            Earrings
          </div>
  
          {/* Middle pair */}
          <div className="bg-gray-200 flex items-center justify-center text-lg font-medium uppercase tracking-wide">
            Rings
          </div>
          <div className="bg-gray-200 flex items-center justify-center text-lg font-medium uppercase tracking-wide">
            Necklaces
          </div>
  
          {/* Bottom full-width image */}
          <div className="sm:col-span-2 lg:col-span-4 bg-gray-200 flex items-center justify-center text-lg font-medium uppercase tracking-wide">
            Watches
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedCategories;  