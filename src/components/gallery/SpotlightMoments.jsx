import React from "react";

// Import your images
import img1 from "../../assets/gallery/krishnagarden.jpeg";
import img2 from "../../assets/gallery/park.JPG";
import img3 from "../../assets/gallery/gangamahal.JPG";
import img4 from "../../assets/gallery/vijay.JPG";
import img5 from "../../assets/gallery/sagar.JPG";
import img6 from "../../assets/gallery/sadul.JPG";

// Import star image
import starIcon from "../../assets/star1.png";

const moments = [
  {
    title: "Krishna Garden",
    location: "Bikaner, 2019",
    description:
      "A beautiful garden wedding filled with flowers and love. Perfect for a peaceful and elegant ceremony.",
    image: img1,
  },
  {
    title: "The Park Paradise – Black Theme",
    location: "Bikaner, 2022",
    description:
      "A stylish wedding with a black theme and luxury decor. Modern vibes meet tradition for a unique celebration.",
    image: img2,
  },
  {
    title: "Maharaja Ganga Mahal",
    location: "Bikaner, 2023",
    description:
      "Grand wedding venue with royal ambiance and rich culture. Create unforgettable memories in a majestic setting.",
    image: img3,
  },
  {
    title: "Vijay Bhawan Palace",
    location: "Bikaner, 2024",
    description:
      "Classic venue for elegant and large weddings. Perfect space for a royal and traditional ceremony.",
    image: img4,
  },
  {
    title: "Hotel Sagar - Grand Reception",
    location: "Bikaner, 2024",
    description:
      "Luxurious reception with splendid decor and fine dining. Celebrate your special day in style and grace.",
    image: img5,
  },
  {
    title: "Sadul Club - Grand Wedding",
    location: "Bikaner, 2025",
    description:
      "Exclusive venue with a charming and elegant atmosphere. Ideal for intimate, luxurious, and memorable weddings.",
    image: img6,
  },
];

const SpotlightMoments = () => {
  return (
    <section className="w-full py-16 px-4 bg-[#f3dbe3] relative overflow-hidden">
      <h2
        className="text-4xl sm:text-5xl text-center text-[#3b1f2b] mb-12"
        style={{ fontFamily: "'Alex Brush', cursive", letterSpacing: "0.08em" }}
      >
        Spotlight Moments{" "}
        <img src={starIcon} alt="star" className="inline-block w-20 h-20" />
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto text-center">
        {moments.map((item, index) => {
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
