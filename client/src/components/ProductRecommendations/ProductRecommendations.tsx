const ProductRecommendations = () => {
    return (
      <section className="mt-16 mb-10">
        <h2 className="text-xl font-semibold">You May Also Like</h2>
        <p className="text-sm text-gray-600 mt-1">
          Handpicked pieces that complement your selection.
        </p>
  
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col gap-2">
              <div className="aspect-square bg-gray-100 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80"
                  alt="Ring"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs text-gray-500">RINGS</span>
              <p className="text-sm font-medium">Eternal Solitaire Ring</p>
              <p className="text-sm">$2,890</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProductRecommendations;