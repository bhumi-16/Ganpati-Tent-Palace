import React, { useState, useEffect } from "react";

// Webpack's dynamic import for images in one folder
const imageContext = require.context("../../assets/gallery", false, /\.(jpg|jpeg|png)$/);

const allImages = imageContext.keys().map((key) => ({
  src: imageContext(key),
  name: key.toLowerCase(), // For filtering
}));

const getImagesForCategory = (category) => {
  // Remove extra words like "gallery", "events", "services", etc.
  const formatted = category
    .toLowerCase()
    .replace(" gallery", "")
    .replace(" events", "")
    .replace(" services", "")
    .replace(" based", "")
    .trim();

  return allImages
    .filter((img) => img.name.includes(formatted))
    .map((img) => img.src);
};


const getRandomImages = (count = 9) => {
  const all = allImages.map((img) => img.src);
  return all.sort(() => 0.5 - Math.random()).slice(0, count);
};

// ✅ Only this one definition of EventGallery
const EventGallery = ({ selectedCategory }) => {
  const [imagesToShow, setImagesToShow] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedCategory && selectedCategory !== "All") {
      setImagesToShow(getImagesForCategory(selectedCategory));
    } else {
      setImagesToShow(getRandomImages());
    }
  }, [selectedCategory]);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? imagesToShow.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === imagesToShow.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-8 px-4 bg-[#f9f5f0] relative">
      <h2
        className="text-4xl sm:text-5xl font-semibold text-center text-[#3b1f2b] mb-12"
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
