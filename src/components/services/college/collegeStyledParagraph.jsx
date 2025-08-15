import React from "react";
import leftFloral from "../../../assets/StatsBg.png";
import rightFloral from "../../../assets/StatsBg.png";

const TextSection = () => {
  return (
    <div className="bg-[#3f0d27] py-12 flex items-center justify-center font-[Patrick_Hand] relative overflow-hidden px-4">
      {/* Left Floral */}
      <img
        src={leftFloral}
        alt="Left Floral"
        className="absolute top-50 left-0 w-20 sm:w-32 lg:w-80 hidden lg:block"
        style={{
          filter:
            "sepia(0.6) saturate(4) hue-rotate(10deg) brightness(0.9) contrast(0.75)",
        }}
      />

      {/* Right Floral */}
      <img
        src={rightFloral}
        alt="Right Floral"
        className="absolute top-50 right-0 w-20 sm:w-32 lg:w-80 scale-x-[-1] hidden lg:block"
        style={{
          filter:
            "sepia(0.6) saturate(4) hue-rotate(10deg) brightness(0.9) contrast(0.75)",
        }}
      />

      {/* Text */}
      <p className="text-[#e698d4] text-center text-xl sm:text-2xl md:text-3xl font-body leading-relaxed max-w-4xl font-semibold z-10">
        At Ganpati Tent Palace, we create vibrant and engaging college events
        that celebrate talent, culture, and unity. From fests and competitions
        to seminars and annual functions, our team ensures smooth coordination,
        creative themes, and unforgettable moments that bring students together
        in joy and enthusiasm.
      </p>
    </div>
  );
};

export default TextSection;
