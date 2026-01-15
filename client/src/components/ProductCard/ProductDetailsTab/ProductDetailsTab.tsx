import { useState } from "react";

const TABS = [
  { id: "description", label: "Description" },
  { id: "specs", label: "Specifications" },
  { id: "care", label: "Care Instructions" },
  { id: "reviews", label: "Reviews (3)" },
];

const ProductDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full max-w-5xl mt-16">
      {/* Tabs */}
      <div className="border-b">
        <div className="grid grid-cols-4">

          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative px-8 py-4 text-sm font-medium transition
                  ${isActive
                    ? "border border-black bg-white -mb-px z-10"
                    : "text-gray-500 hover:text-black"}
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 text-sm text-gray-700 leading-relaxed max-w-3xl">
        {activeTab === "description" && (
          <div className="space-y-6">
            <p>
              The Celestial Diamond Ring is a masterpiece of modern
              craftsmanship, featuring a stunning center diamond surrounded by
              a halo of smaller brilliant-cut diamonds.
            </p>
            <p>
              Set in 18K white gold, this ring combines timeless elegance with
              contemporary design. The delicate pavé band enhances sparkle
              while the cathedral setting maximizes light exposure.
            </p>
            <p>
              Perfect for engagements or special occasions, each piece is
              crafted by master artisans with over 30 years of experience in
              fine jewelry making.
            </p>
          </div>
        )}

        {activeTab === "specs" && (
          <ul className="space-y-2">
            <li>Material: 18K White Gold</li>
            <li>Diamond Cut: Round Brilliant</li>
            <li>Carat Weight: 1.2ct</li>
            <li>Band Width: 2mm</li>
          </ul>
        )}

        {activeTab === "care" && (
          <p>
            Clean with a soft cloth and mild soap. Avoid harsh chemicals. Store
            separately to prevent scratching.
          </p>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-3">
            <p className="font-medium">⭐⭐⭐⭐⭐ Sarah M.</p>
            <p>
              Absolutely stunning. The craftsmanship is impeccable and the
              diamond sparkles beautifully in any light.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsTabs;