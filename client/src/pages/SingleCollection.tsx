import SingleCollectionCard from "../components/SingleCollectionCard/SingleCollectionCard";
import SingleCollectionHero from "../components/SingleCollectionHero/SingleCollectionHero";

const SingleCollection = () => {
  const products = Array.from({ length: 16 }); // mock products

  return (
    <>
      <SingleCollectionHero />

      {/* Sort By Dropdown */}
      <section className="px-4 sm:px-6 lg:px-10 mt-6 mb-6 flex">
        <label className="flex items-center gap-2 text-sm sm:text-base">
          Sort By:
          <select className="border rounded-md px-3 py-2">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </label>
      </section>

      {/* Product grid */}
      <section className="px-4 sm:px-6 lg:px-10 pb-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
  {products.map((_, index) => (
    <SingleCollectionCard key={index} />
  ))}
</div>
      </section>
    </>
  );
};

export default SingleCollection;