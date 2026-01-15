import { useState } from "react";

const TABS = [
  { id: "description", label: "Description" },
  { id: "specs", label: "Specifications" },
  { id: "care", label: "Care Instructions" },
  { id: "reviews", label: "Reviews" },
];

const ProductDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full max-w-3xl mt-12">
      {/* Tab Picker */}
      <div className="flex gap-8 border-b">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 text-sm font-medium transition
                          ${
                            activeTab === tab.id
                              ? "border-b-2 border-black text-black"
                              : "text-gray-500 hover:text-black"
                          }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-gray-700 text-sm leading-relaxed">
        {activeTab === "description" && (
          <p>
            This celestial diamond ring features a brilliant-cut diamond set in
            a handcrafted band designed for timeless elegance.
          </p>
        )}
        {activeTab === "specs" && (
          <ul className="space-y-2">
            <li>Material: 18k White Gold</li>
            <li>Diamond Cut: Round Brilliant</li>
            <li>Carat Weight: 1.2ct</li>
            <li>Band Width: 2mm</li>
          </ul>
        )}

        {activeTab === "care" && (
          <p>
            {" "}
            Clean with a soft cloth and mild soap. Avoid harsh chemicals. Store
            separately to prevent scratching.
          </p>
        )}

        {activeTab === "reviews" && (
         <div className="flex flex-col">
            <span>⭐⭐⭐⭐⭐</span>
            <p>Sarah M.</p>
            <p>Absolutely Stunning</p>
            <p>This ring exceeded all my expectations. The craftsmanship is impeccable and it sparkles beautifully in any light.
                Worth every penny!
            </p>
         </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetailsTabs;