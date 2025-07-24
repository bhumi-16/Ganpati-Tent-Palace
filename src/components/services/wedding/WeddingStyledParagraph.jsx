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
        className="absolute top-0 left-0 w-24 sm:w-32 lg:w-40"
      />

      {/* Right Floral */}
      <img
        src={rightFloral}
        alt="Right Floral"
        className="absolute top-0 right-0 w-24 sm:w-32 lg:w-40"
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
