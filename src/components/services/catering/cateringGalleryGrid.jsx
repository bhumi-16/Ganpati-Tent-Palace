import React from "react";
import eventImg from "../../../assets/gallery2.jpeg"; // Replace with actual image

const images = Array(9).fill(eventImg); // Create 9 copies

const EventGallery = () => {
  return (
    <div className="relative bg-[#ede7e2] min-h-screen py-10 px-4">
      {/* Background flower illustration */}
      <div className="absolute inset-0 bg-[url('./assets/Wedding/wedding.jpeg')] bg-center bg-no-repeat bg-contain opacity-10 z-0"></div>

      {/* Image grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-md shadow-md">
            <img
              src={img}
              alt={`event-${idx}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGallery;
