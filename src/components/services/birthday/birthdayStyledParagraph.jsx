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
        Make every birthday magical with Ganpati Tent Palace’s theme-based
        birthday event services. Whether it's a fairytale fantasy, superhero
        showdown, or elegant adult soirée, we bring your dream theme to life
        with stunning decorations, props, lighting, and entertainment. Our team
        handles every detail—from concept to execution—to create a joyful,
        immersive experience tailored to your vision. With creative setups and
        personalized touches, we ensure the celebration is as unique and
        memorable as the person it honors. Let’s craft unforgettable birthday
        moments together.
      </p>
    </div>
  );
};

export default TextSection;
