import React from "react";
import weddingRightImg from "../assets/weddingRightImage.png"; // right image
import floralBg from "../assets/StatsBg.png"; // floral illustration bg on left

const WeddingBannerSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-auto md:h-[700px]">
      {/* Left Panel */}
      <div className="relative w-full md:w-1/2 bg-[#d0b7d3] flex flex-col justify-center items-center text-center px-6 py-16 overflow-hidden">
        <img
          src={floralBg}
          alt="Floral Design"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
        />

        <h2
          className="text-3xl sm:text-4xl md:text-5xl text-[#4c1d39] z-10 leading-snug"
          style={{
            fontFamily: "'Alex Brush', cursive",
            letterSpacing: "0.08em",
          }}
        >
          It’s Wedding Season
        </h2>

        <button
          onClick={() => window.location.href = "/contactus#contact"}
          className="mt-8 z-10 bg-[#5e4760]/80 text-[#fceeea] px-6 sm:px-8 py-3 rounded-full text-lg sm:text-xl shadow-lg hover:bg-[#4c1d39] transition-all duration-300"
          style={{
            fontFamily: "'Alex Brush', cursive",
            letterSpacing: "0.08em",
          }}
        >
          Book Now!!!
        </button>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2">
        <img
          src={weddingRightImg}
          alt="Wedding Setup"
          className="w-full h-[300px] sm:h-[400px] md:h-full object-cover"
        />
      </div>
    </section>
  );
};

export default WeddingBannerSection;
