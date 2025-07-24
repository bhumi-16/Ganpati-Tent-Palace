import React, { useState } from "react";
import img1 from "../../assets/gallery/img1.jpg";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";
import img7 from "../../assets/gallery/img7.jpg";
import img8 from "../../assets/gallery/img8.jpg";
import img9 from "../../assets/gallery/img9.png";
import img10 from "../../assets/gallery/img10.jpg";
import img11 from "../../assets/gallery/img11.jpg";
import img12 from "../../assets/gallery/img12.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const EventGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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
        {images.map((src, index) => (
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

      {/* Modal with left/right controls */}
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
            src={images[selectedIndex]}
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
