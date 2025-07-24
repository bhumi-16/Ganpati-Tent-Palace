import React, { useEffect, useState } from "react";
import "flowbite";
import img1 from "../assets/C8.jpg";
import img2 from "../assets/C2.png";
import img3 from "../assets/C3.png";
import img4 from "../assets/C9.jpg";

const slides = [
  {
    image: img1,
    text: "Royal Weddings, Perfectly Planned",
  },
  { image: img2, text: "Making Memories, Effortlessly Beautiful" },
  { image: img3, text: "From Setup to Smiles" },
  { image: img4, text: "Decor That Speaks for You" },
];

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#5a2a49]/70 flex items-center justify-center">
            <h2
              className={`font-bricolage text-[#e6d2d9] text-3xl md:text-5xl font-bold px-4 text-center transition-opacity duration-500 ${
                index === activeSlide ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              {slide.text}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
