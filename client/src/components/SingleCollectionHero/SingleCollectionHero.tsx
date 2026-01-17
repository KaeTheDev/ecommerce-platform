const SingleCollectionHero = () => {
    return (
      <section
        className="relative h-125 lg:h-150 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/necklace-hero.png')" }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>
  
        {/* Text content in top-left */}
        <div className="relative z-10 flex flex-col justify-start items-start h-full px-6 sm:px-10 lg:px-20 pt-20 lg:pt-32 text-white max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Necklaces
          </h1>
          <p className="text-sm sm:text-base mb-4">
            Discover our curated selection of luxurious necklaces, crafted with precision and designed to captivate.
          </p>
          <p className="text-sm sm:text-base">
            16 Pieces * New Arrivals Weekly
          </p>
        </div>
      </section>
    );
  };
  
  export default SingleCollectionHero;  