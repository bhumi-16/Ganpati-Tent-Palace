import React, { useEffect, useState } from "react";
import slide1 from "../../assets/services/slide1.png";
import slide2 from "../../assets/services/slide2.png";
import slide3 from "../../assets/services/slide3.png";
import floralBg from "../../assets/aboutus.png";
import OurServices from "./OurServices";
import WhyUsSection from "./WhyUsSection";

const slides = [slide1, slide2, slide3];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section with slideshow */}
      <section className="relative h-[35vh] sm:h-[60vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {slides.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`bg-${index}`}
              className="w-full h-full object-cover sm:object-center object-top"
            />
            {/* Overlay with 72% opacity of #594459 */}
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{ backgroundColor: "rgba(89, 68, 89, 0.72)" }}
            ></div>
          </div>
        ))}

        {/* Overlay Text */}
        <div className="bg-[#3e1831]/70 px-4 sm:px-6 py-3 sm:py-5 rounded-xl z-10 text-center">
          <h1
            className="text-4xl md:text-5xl mb-2 text-[#f9f5f0] leading-snug"
            style={{
              fontFamily: "'Alex Brush', cursive",
              letterSpacing: "0.08em",
            }}
          >
            Services
          </h1>
        </div>
      </section>

      {/* Our Journey with background and text */}
      <section className="relative py-16 px-6 bg-[#e4bfcd] text-center overflow-hidden">
        {/* Floral BG */}
        <img
          src={floralBg}
          alt="Floral Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none z-0"
        />

        {/* Content */}
        <div className="relative z-10">
          <h2
            className="text-4xl md:text-5xl mb-4 text-[#4c1d39]"
            style={{
              fontFamily: "'Alex Brush', cursive",
              letterSpacing: "0.08em",
            }}
          >
            Our Journey
          </h2>

          {/* Full text only for medium & large screens */}
          <p className="hidden sm:block max-w-4xl mx-auto text-[#2e0f1c] font-semibold text-lg md:text-xl leading-relaxed">
            At Ganpati Tent Palace, we offer complete event solutions for
            weddings, birthdays, corporate events, and more. From elegant
            decorations and theme-based setups to catering and stage design, we
            handle every detail with care and creativity. Celebrate stress-free
            while we bring your vision to life, beautifully and professionally.
          </p>

          {/* Shortened text for small screens */}
          <p className="block sm:hidden max-w-xl mx-auto text-[#2e0f1c] font-medium text-base leading-relaxed">
            From weddings to birthdays, we design, decorate, and manage your
            events with style and care.
          </p>
        </div>
      </section>
      {/* Our Services Section */}
      <OurServices />

      {/* Why Us Section */}
      <WhyUsSection />
    </div>
  );
};

export default Services;
