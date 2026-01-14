// import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//     alt: "Mountain landscape",
//   },
//   {
//     id: 2,
//     src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
//     alt: "Forest trail",
//   },
//   {
//     id: 3,
//     src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
//     alt: "Desert dunes",
//   },
//   {
//     id: 4,
//     src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
//     alt: "Ocean waves",
//   },
// ];

// export default function ProductImageGallery() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="w-full max-w-3xl mx-auto">
//       {/* Main Image */}
//       <div className="aspect-square w-full overflow-hidden rounded-2xl border bg-gray-100">
//         <img
//           src={images[activeIndex].src}
//           alt={images[activeIndex].alt}
//           className="h-full w-full object-cover transition-opacity duration-300"
//         />
//       </div>

//       {/* Thumbnails */}
//       <div className="mt-4 flex gap-3 overflow-x-auto">
//         {images.map((image, index) => (
//           <button
//             key={image.id}
//             onClick={() => setActiveIndex(index)}
//             className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition
//   ${
//     index === activeIndex
//       ? "border-black"
//       : "border-transparent hover:border-gray-400"
//   }`}
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="h-full w-full object-cover"
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";

export default function ImageGallery() {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
      alt: "Ring on wood",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
      alt: "Lifestyle shot",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
      alt: "Studio ring",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
      alt: "Ring on hand",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Gallery column */}
      <div className="w-full max-w-lg">
        {/* Main Image */}
        <div className="aspect-4/5 w-full overflow-hidden bg-gray-100">
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="mt-4 grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setActiveIndex(index)}
              className={`aspect-square overflow-hidden border transition
              ${
                index === activeIndex
                  ? "border-black"
                  : "border-transparent hover:border-gray-400"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
