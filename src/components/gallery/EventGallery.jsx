import React, { useState, useEffect } from "react";

const venueContext = require.context(
  "../../assets/gallery/venue",
  false,
  /\.(jpg|jpeg|png)$/
);
const flowerContext = require.context(
  "../../assets/gallery/Flowerdecoration",
  false,
  /\.(jpg|jpeg|png)$/
);
const chairContext = require.context(
  "../../assets/gallery/Chairdesign",
  false,
  /\.(jpg|jpeg|png)$/
);
const sofaContext = require.context(
  "../../assets/gallery/Sofadesigns",
  false,
  /\.(jpg|jpeg|png)$/
);
const themeContext = require.context(
  "../../assets/gallery/theme",
  false,
  /\.(jpg|jpeg|png)$/
);
const outdoorContext = require.context(
  "../../assets/gallery/outdoor",
  false,
  /\.(jpg|jpeg|png)$/
);

const importAll = (context) => context.keys().map(context);

const galleries = {
  Venue: importAll(venueContext),
  "Flower decoration": importAll(flowerContext),
  "Chair design": importAll(chairContext),
  "Sofa design": importAll(sofaContext),
  Themes: importAll(themeContext),
  "Outdoor Decoration": importAll(outdoorContext),
};

const EventGallery = ({ selectedCategory }) => {
  const [imagesToShow, setImagesToShow] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedCategory && selectedCategory !== "All") {
      const formatted = selectedCategory.trim().toLowerCase();
      const matchedKey = Object.keys(galleries).find(
        (key) => key.toLowerCase() === formatted
      );
      if (matchedKey) {
        setImagesToShow(galleries[matchedKey]);
      } else {
        setImagesToShow([]);
      }
    } else {
      const all = Object.values(galleries).flat();
      setImagesToShow(all.sort(() => 0.5 - Math.random()).slice(0, 12));
    }
  }, [selectedCategory]);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? imagesToShow.length - 1 : prev - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === imagesToShow.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full py-8 px-4 bg-[#f9f5f0] relative">
      <h2
        className="text-4xl sm:text-5xl text-center text-[#3b1f2b] mb-12"
        style={{ fontFamily: "'Alex Brush', cursive", letterSpacing: "0.08em" }}
      >
        Our Moments
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {imagesToShow.map((src, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <img
              src={src}
              alt={`event-${index}`}
              className="w-full h-36 sm:h-44 md:h-52 object-cover transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-sm font-semibold">
              Click to enlarge
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <button
            onClick={showPrev}
            className="absolute left-5 text-white text-3xl font-bold bg-black bg-opacity-40 hover:bg-opacity-60 px-4 py-2 rounded-full"
          >
            ‹
          </button>
          <img
            src={imagesToShow[selectedIndex]}
            alt="enlarged"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
          />
          <button
            onClick={showNext}
            className="absolute right-5 text-white text-3xl font-bold bg-black bg-opacity-40 hover:bg-opacity-60 px-4 py-2 rounded-full"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default EventGallery;
