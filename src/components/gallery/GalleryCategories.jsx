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

const GalleryCategories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section className="relative py-16 px-4 sm:px-8 bg-[#e6cbd7] overflow-hidden">
      {/* Floral Background moved right, larger, hidden on sm and md */}
      <img
        src={bgFloral}
        alt="Floral Background"
        className="absolute right-0 top-0 h-[400px] object-contain opacity-20 pointer-events-none hidden lg:block"
        style={{ maxWidth: "1000px" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 justify-items-center">
          {categories.map((title, index) => {
            const isLastItem = index === categories.length - 1;
            const isSelected = selectedCategory === title;

            return (
              <button
                key={index}
                onClick={() => setSelectedCategory(title)}
                className={`bg-[#3d293e]/90 text-white text-center rounded-2xl shadow-lg transition-transform hover:scale-105
                  w-full aspect-square flex items-center justify-center p-4 sm:w-64 sm:aspect-auto
                  ${
                    // For "Others" on small screens, span 1 column instead of 2
                    isLastItem
  ? "col-span-1 justify-self-center sm:justify-self-auto"
  : ""

                  }
                  ${isSelected ? "ring-4 ring-purple-500" : ""}
                `}
              >
                <p
                  className="text-sm sm:text-xl md:text-2xl leading-snug tracking-wide"
                  style={{ fontFamily: "'Alex Brush', cursive" }}
                >
                  {title}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryCategories;
