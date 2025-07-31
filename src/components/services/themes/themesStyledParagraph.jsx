import React from "react";
import leftFloral from "../../../assets/StatsBg.png"; // Update with your image path
import rightFloral from "../../../assets/StatsBg.png"; // Update with your image path

const TextSection = () => {
  return (
    <div className="bg-[#3f0d27] min-h-screen flex items-center justify-center font-[Patrick_Hand] relative overflow-hidden px-4">
      {/* Left Floral */}
      <img
        src={leftFloral}
        alt="Left Floral"
        className="absolute top-50 left-0 w-50 sm:w-32 lg:w-80 hidden lg:block"
         style={{
    filter: "sepia(0.6) saturate(4) hue-rotate(10deg) brightness(0.9) contrast(0.75)",
  }}
      />

      {/* Right Floral */}
      <img
        src={rightFloral}
        alt="Right Floral"
        className="absolute top-50 right-0 w-24 sm:w-32 lg:w-80 scale-x-[-1] hidden lg:block"
        style={{
    filter: "sepia(0.6) saturate(4) hue-rotate(10deg) brightness(0.9) contrast(0.75)",
  }}
      />

      {/* Text */}
      <p className="text-[#fbd68f] text-center text-xl sm:text-2xl md:text-3xl leading-relaxed max-w-4xl font-semibold z-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default TextSection;
