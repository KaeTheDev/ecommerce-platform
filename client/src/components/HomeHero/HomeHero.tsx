import { useNavigate } from "react-router-dom";

const HomeHero = () => {

const navigate = useNavigate();

const handleClick= () => {
  navigate('/collections');
}

    return (
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
        {/* Video background for desktop */}
        <video
          className="hidden lg:block absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/videos/hero.mp4"
          autoPlay
          muted
          loop
        />
  
        {/* Image fallback for tablet & mobile */}
        <img
          className="block lg:hidden absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/images/hero.png"
          alt="Hero"
        />
  
        {/* Overlay for contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
  
        {/* Text and button in bottom-left corner */}
        <div className="absolute bottom-4 sm:bottom-8 lg:bottom-16 left-4 sm:left-8 lg:left-16 z-10 flex flex-col max-w-md text-white space-y-2 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
            Luxury in Every Detail
          </h1>
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl">
            Discover refinement across every piece in our exclusive collection.
          </p>
          <button onClick={handleClick} className="mt-2 px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-300 hover:text-black transition">
            Shop the Collection
          </button>
        </div>
      </section>
    );
  };
  
  export default HomeHero;  