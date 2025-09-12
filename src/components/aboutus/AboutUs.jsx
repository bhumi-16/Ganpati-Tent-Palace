import React, { useEffect, useState } from "react";
import slide1 from "../../assets/aboutus/slide1.png";
import slide2 from "../../assets/aboutus/slide2.png";
import slide3 from "../../assets/aboutus/slide3.png";
import floralBg from "../../assets/aboutus.png";
import OurStory from "./OurStory";
import AchievementsSection from "./AchievementsSection";
import HappyClients from "./HappyClients";

const slides = [slide1, slide2, slide3];

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

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
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`bg-${index}`}
              className="w-full h-full object-cover sm:object-center object-top"
            />
            <div className="absolute inset-0 bg-[#3d293e]/[0.51]" />
          </div>
        ))}

        <div className="bg-[#3d293e]/50 px-4 sm:px-6 py-3 sm:py-5 rounded-xl z-10 text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl mb-2 text-[#f0dcf4] leading-snug"
            style={{
              fontFamily: "'Alex Brush', cursive",
              letterSpacing: "0.08em",
            }}
          >
            About Us
          </h1>
        </div>
      </section>

      {/* Our Journey with background and text */}
      <section className="relative py-16 px-6 bg-[#e4bfcd] text-center overflow-hidden">
        {/* Floral BG */}
   <img
  src={floralBg}
  alt="Floral Background"
  className="absolute inset-0 m-auto w-[500px] h-auto max-w-none opacity-20 pointer-events-none select-none z-0"
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
            At Ganpati Tent Palace, we believe that every event deserves to be
            celebrated with style, elegance, and perfection. Based in Bikaner,
            we are known for our creative event planning, stunning decorations,
            and reliable services. Whether it’s a wedding, birthday, corporate
            event, college fest, or any special occasion, we bring your vision
            to life with beautiful setups and detailed execution. Our services
            include tent arrangements, stage and venue decoration, catering,
            theme-based entries, and much more – all designed to suit your needs
            and budget. With years of experience and a passion for making
            moments memorable, our team ensures that every event is organized
            smoothly and celebrated joyfully. At Ganpati Tent Palace, your
            happiness is at the heart of everything we do.
          </p>

          {/* Shortened text for small screens */}
          <p className="block sm:hidden max-w-xl mx-auto text-[#2e0f1c] font-medium text-base leading-relaxed">
            At Ganpati Tent Palace, we turn your celebrations into unforgettable
            moments. From beautiful weddings to joyful events, our Bikaner-based
            team delivers elegance and perfection. We craft every setup with
            creativity and care – making your happiness our top priority.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <OurStory />
      {/* Achievements Section */}
      <AchievementsSection />
      {/* Happy Clients Section */}
      <HappyClients />
    </div>
  );
};

export default AboutUs;
