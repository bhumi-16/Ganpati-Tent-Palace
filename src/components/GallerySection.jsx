import React from "react";
import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.JPG";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.JPG";
import gallery6 from "../assets/gallery6.JPG";
import flower from "../assets/AboutFlower.png"; // flower background image

const GallerySection = () => {
  return (
    <section className="relative bg-[#e6d2d9] py-16 overflow-hidden">
      {/* Right Side Flower Background - Show only on width >= 701px */}
      <img
        src={flower}
        alt="flower"
        className="hidden min-[701px]:block absolute right-[-150px] top-0 h-full object-contain opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Heading aligned to right */}
      <h2 className="font-bricolage text-2xl md:text-4xl font-bold text-[#5a2a49] mb-12 text-left m-5 mr-4 md:mr-10">
        Making Your Events Special – From Start to Finish!!!
      </h2>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 min-[350px]:grid-cols-2 min-[701px]:grid-cols-3 gap-6 px-2 md:px-4">
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
