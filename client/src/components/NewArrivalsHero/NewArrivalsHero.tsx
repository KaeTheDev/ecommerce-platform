 const NewArrivalsHero = () => {
    return (
      <section
        className="relative h-125 lg:h-150 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/new-arrivals-hero.jpg')" }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
  
        {/* Text content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 lg:px-20 text-white max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            🔶 New Arrivals
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mb-2">
            Discover our latest additions to the collection. Each piece has been
            carefully selected to bring you the finest in luxury jewelry.
          </p>
        </div>
      </section>
    );
  };
  
  export default NewArrivalsHero;  