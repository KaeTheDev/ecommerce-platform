const CollectionsHero = () => {
    return (
      <section>
        <div className="flex flex-col py-20 px-4 sm:px-6 lg:px-10">
          <h1 className="text-5xl text-center mb-4">Exquisite Jewelry Collection</h1>
          <p className="text-center mb-6">
            Discover timeless elegance with our curated selection of fine jewelry, crafted with precision and designed to captivate.
          </p>
  
          {/* Categories + Sort By */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {["All", "Bracelets", "Earrings", "Necklaces", "Rings", "Watches"].map((category) => (
                <div
                  key={category}
                  className="w-24 h-12 bg-gray-300 rounded-sm flex items-center justify-center cursor-pointer hover:bg-gray-400"
                >
                  {category}
                </div>
              ))}
            </div>
  
            {/* Sort By */}
            <div>
              Sort By: 
              <select className="ml-2 border rounded p-1">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
  
          <div className="border-t mt-6 mb-6"></div>
          <span>15 items</span>
        </div>
      </section>
    );
  };
  
  export default CollectionsHero;  