import React, { useState } from "react";
import img1 from "../../../assets/corporate/corporate1.png";
import img2 from "../../../assets/corporate/corporate2.png";
import img3 from "../../../assets/corporate/corporate3.png";
import img4 from "../../../assets/corporate/corporate4.png";
import img5 from "../../../assets/corporate/corporate5.png";
import img6 from "../../../assets/corporate/corporate6.png";
import img7 from "../../../assets/corporate/corporate7.png";
import img8 from "../../../assets/corporate/corporate8.png";
import img9 from "../../../assets/corporate/corporate9.png";
import { X, ChevronLeft, ChevronRight } from "lucide-react"; // Optional: use any icon library

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const EventGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <div className="relative bg-[#ede7e2] py-10 px-4 mb-5 pb-5">
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`overflow-hidden rounded-md shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 ${
                idx >= 8 ? "hidden sm:block" : ""
              }`}
              onClick={() => openModal(idx)}
            >
              <img
                src={img}
                alt={`event-${idx}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white"
          >
            <X size={32} />
          </button>

          <button onClick={showPrev} className="absolute left-4 text-white">
            <ChevronLeft size={40} />
          </button>

          <img
            src={images[selectedIndex]}
            alt={`enlarged-${selectedIndex}`}
            className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg object-contain transition-all duration-300"
          />

          <button onClick={showNext} className="absolute right-4 text-white">
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
};

export default EventGallery;
