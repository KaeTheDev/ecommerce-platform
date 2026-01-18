const Favorites = () => {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-10 space-y-6">
        <span className="text-8xl sm:text-9xl">⭐️</span>
        <h1 className="text-3xl sm:text-4xl font-semibold">No Favorites Yet</h1>
        <p className="text-lg sm:text-2xl max-w-2xl">
          Browse the collection and tap the star to save pieces here.
        </p>
      </section>
    );
  };
  
  export default Favorites;  