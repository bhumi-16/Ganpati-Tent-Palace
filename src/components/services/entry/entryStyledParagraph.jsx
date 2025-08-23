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
          Make your wedding entry magical with personalized themes, grand décor, and unforgettable moments for you and your guests.
        </span>

        {/* Full version for tablet & larger screens */}
        <span className="hidden sm:block">
           Make your wedding truly unforgettable with our Bride & Groom Entry services. We specialize in creating magical, personalized entry concepts that perfectly match your theme and style. From royal palanquins, floral pathways, and grand light shows to dreamy smoke effects and live music, we ensure every step you take feels like a fairytale. Our team focuses on every detail to make your moment grand, unique, and picture-perfect, leaving your guests mesmerized and giving you memories to cherish for a lifetime.
        </span>
      </p>
    </div>
  );
};

export default TextSection;
