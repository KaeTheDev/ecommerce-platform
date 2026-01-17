import CollectionsCard from "../components/CollectionsCard/CollectionsCard";
import CollectionsHero from "../components/CollectionsHero/CollectionsHero";

const Collections = () => {
  return (
    <>
      <CollectionsHero />

      <section className="px-4 sm:px-6 lg:px-10 pb-20">
        <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {Array.from({ length: 15 }).map((_, index) => (
            <CollectionsCard key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Collections;