import React from "react";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/C4.png";
import flower from "../assets/gallerybg.png"; // 🌸 flower background image

const GallerySection = () => {
  return (
    <section className="relative bg-[#e6d2d9] py-16 overflow-hidden">
      {/* 🌸 Right Side Flower Background */}
      <img
        src={flower}
        alt="flower"
        className="absolute right-0 top-0 h-full object-contain opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Heading */}
      <h2 className="font-bricolagetext-3xl md:text-4xl font-bold text-[#5a2a49] mb-12 text-left ml-4 md:ml-10">
        Making Your Events Special – From Start to Finish!!!
      </h2>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 md:px-4 text-left">
        {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map(
          (img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-40 sm:h-48 md:h-64 object-cover opacity-80"
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default GallerySection;
