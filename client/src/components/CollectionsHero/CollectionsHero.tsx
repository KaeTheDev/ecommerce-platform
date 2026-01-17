const CollectionsHero = () => {
    return (
      <section>
        <div className="flex flex-col py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
          <h1 className="text-4xl lg:text-5xl text-center mb-4">
            Exquisite Jewelry Collection
          </h1>
  
          <p className="text-center text-sm sm:text-base mb-6 max-w-2xl mx-auto">
            Discover timeless elegance with our curated selection of fine jewelry,
            crafted with precision and designed to captivate.
          </p>
  
          {/* Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            {/* Categories */}
            <div className="flex gap-3 overflow-x-auto md:overflow-visible">
              {["All", "Bracelets", "Earrings", "Necklaces", "Rings", "Watches"].map(
                (category) => (
                  <button
                    key={category}
                    className="shrink-0 px-4 py-2 text-sm rounded-full border border-gray-300 whitespace-nowrap hover:bg-gray-100 transition"
                  >
                    {category}
                  </button>
                )
              )}
            </div>
  
            {/* Sort */}
            <div className="flex items-center justify-end md:justify-end">
              <select className="border rounded-md px-3 py-2 text-sm">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t"></div>
  
          <span className="mt-3 text-sm text-gray-500">15 items</span>
        </div>
      </section>
    );
  };
  
  export default CollectionsHero;  