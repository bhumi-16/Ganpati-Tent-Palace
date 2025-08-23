import React from "react";
import leftFloral from "../../../assets/StatsBg.png";
import rightFloral from "../../../assets/StatsBg.png";

const TextSection = () => {
  return (
    <div className="bg-[#3f0d27] py-12 flex items-center justify-center font-[Leckerli One] relative overflow-hidden px-4">
      {/* Left Floral */}
      <img
        src={leftFloral}
        alt="Left Floral"
        className="absolute top-1/2 left-0 w-20 sm:w-32 lg:w-80 hidden lg:block -translate-y-1/2"
        style={{
          filter:
            "sepia(0.6) saturate(4) hue-rotate(10deg) brightness(0.9) contrast(0.75)",
        }}
      />

      {/* Right Floral */}
      <img
        src={rightFloral}
        alt="Right Floral"
        className="absolute top-1/2 right-0 w-20 sm:w-32 lg:w-80 scale-x-[-1] hidden lg:block -translate-y-1/2"
        style={{
          filter:
            "sepia(0.6) saturate(4) hue-rotate(10deg) brightness(0.9) contrast(0.75)",
        }}
      />

      {/* Text */}
      <p className="text-[#e698d4] text-center text-lg sm:text-xl md:text-3xl leading-relaxed max-w-4xl font-medium z-10">
        {/* Short version for mobile */}
        <span className="block sm:hidden">
         At Ganpati Tent Palace, we create elegant weddings with beautiful setups, personalized touches, and seamless execution for your special day.
        </span>

        {/* Full version for tablet & larger screens */}
        <span className="hidden sm:block">
          At Ganpati Tent Palace, we specialize in creating elegant and unforgettable wedding experiences. From royal mandap setups and floral stage decorations to customized bride-groom entries and traditional lighting, we handle every detail with care and creativity. Our team brings your vision to life with beautiful tent designs, guest seating, catering, and more. Whether it's a grand celebration or a simple ceremony, we ensure everything runs smoothly and looks stunning. Make your big day truly special with us by your side.
        </span>
      </p>
    </div>
  );
};

export default TextSection;
