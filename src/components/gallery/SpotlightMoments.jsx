import React from "react";

// Import your images
import img1 from "../../assets/gallery/birthday1.jpg";
import img2 from "../../assets/gallery/birthday2.jpg";
import img3 from "../../assets/gallery/birthday3.jpg";
import img4 from "../../assets/gallery/wedding4.jpg";
import img5 from "../../assets/gallery/wedding5.jpg";
import img6 from "../../assets/gallery/wedding6.jpg";

const moments = [
  {
    title: "Rajasthani Royal Wedding",
    location: "Udaipur, 2024",
    description:
      "A vibrant royal-themed wedding with traditional decor, folk performances, and palatial backdrops.",
    image: img1,
  },
  {
    title: "Baby Shower - Garden Bliss",
    location: "Ajmer, 2024",
    description:
      "An intimate outdoor event with pastel florals, balloon arches, and cozy picnic setups.",
    image: img2,
  },
  {
    title: "Festive Diwali Event",
    location: "Office Premises, 2023",
    description:
      "Rangoli competition, diya lighting, and ethnic dress contest for employees.",
    image: img3,
  },
  {
    title: "Haldi Splash Party",
    location: "Bikaner, 2023",
    description:
      "A vibrant haldi ceremony with flower showers, dhol beats, and turmeric pools.",
    image: img4,
  },
  {
    title: "Wedding Anniversary - Rustic Charm",
    location: "Pali, 2024",
    description:
      "Wooden tables, fairy lights, and live acoustic music in a countryside resort.",
    image: img5,
  },
  {
    title: "Sangeet Symphony",
    location: "Udaipur, 2024",
    description:
      "Choreographed couple dance, LED screens, and a musical fountain finale.",
    image: img6,
  },
];

const SpotlightMoments = () => {
  return (
    <section className="w-full py-16 px-4 bg-[#f3dbe3] relative overflow-hidden">
      <h2
        className="text-4xl sm:text-5xl font-semibold text-center text-[#3b1f2b] mb-12"
        style={{ fontFamily: "'Alex Brush', cursive", letterSpacing: "0.08em" }}
      >
        Spotlight Moments ✨
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto text-center">
        {moments.map((item, index) => {
          // Alternate vertical position: down, up, down...
          const zigzag = index % 2 === 0 ? "translate-y-4" : "-translate-y-4";

          return (
            <div
              key={index}
              className={`flex flex-col items-center px-4 transition-all duration-300 transform ${zigzag}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-40 h-28 object-cover rounded-md shadow-md mb-4"
              />
              <h3 className="font-bold text-[#3d293e] text-lg mb-1">
                {item.title} <br />
                <span className="block text-sm font-semibold text-[#3d293e]">
                  {item.location}
                </span>
              </h3>
              <p className="text-sm italic text-gray-700 max-w-xs">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SpotlightMoments;
