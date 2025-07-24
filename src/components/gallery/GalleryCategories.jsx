import React from "react";
import bgFloral from "../../assets/AboutFlower.png";

const categories = [
  "Wedding Gallery",
  "Corporate Events",
  "Birthday Gallery",
  "Theme-based Events",
  "Catering Services",
  "Baby Shower",
  "Annual Function",
  "College Festival",
  "Others",
];

const GalleryCategories = () => {
  return (
    <section className="relative py-16 px-4 sm:px-8 bg-[#e6cbd7] overflow-hidden">
      {/* Floral Background */}
      <img
        src={bgFloral}
        alt="Floral Background"
        className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 justify-items-center">
          {categories.map((title, index) => {
            const isLastItem = index === categories.length - 1;

            return (
              <div
                key={index}
                className={`bg-[#3d293e]/90 text-white text-center rounded-2xl shadow-lg transition-transform hover:scale-105
                  w-full aspect-square flex items-center justify-center p-4 sm:w-64 sm:aspect-auto
                  ${
                    isLastItem
                      ? "col-span-2 justify-self-center sm:col-span-1 sm:justify-self-auto"
                      : ""
                  }`}
              >
                <p
                  className="text-sm sm:text-xl md:text-2xl leading-snug tracking-wide"
                  style={{ fontFamily: "'Alex Brush', cursive" }}
                >
                  {title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryCategories;
