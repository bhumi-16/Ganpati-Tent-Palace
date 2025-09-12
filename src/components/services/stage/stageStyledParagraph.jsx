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
        className="absolute top-1/2 left-0 w-[100px] sm:w-[250px] lg:w-[275px] hidden lg:block -translate-y-1/2"
        style={{
          filter:
            "sepia(0.6) saturate(4) hue-rotate(10deg) brightness(0.9) contrast(0.75)",
        }}
      />

      {/* Right Floral */}
      <img
        src={rightFloral}
        alt="Right Floral"
        className="absolute top-1/2 right-0 w-[100px] sm:w-[250px] lg:w-[275px] scale-x-[-1] hidden lg:block -translate-y-1/2"
        style={{
          filter:
            "sepia(0.6) saturate(4) hue-rotate(10deg) brightness(0.9) contrast(0.75)",
        }}
      />

      {/* Text */}
      <p className="text-[#e698d4] text-center text-lg sm:text-xl md:text-3xl leading-relaxed max-w-4xl font-medium z-10">
        {/* Short version for mobile */}
        <span className="block sm:hidden">
         Our Stage Decoration services create elegant, theme-based setups with customized décor and flawless execution for a stunning wedding backdrop.
        </span>

        {/* Full version for tablet & larger screens */}
        <span className="hidden sm:block">
           Transform your wedding into a breathtaking celebration with our Stage Decoration services. We design elegant, theme-based stages that perfectly blend beauty and style, creating the ideal backdrop for your special moments. From luxurious floral arrangements and artistic drapes to creative lighting and unique props, every element is customized to match your vision. Our expert team ensures flawless execution, adding charm, elegance, and grandeur to your event. Whether you dream of a royal setup, a modern chic design, or a traditional touch, we make your stage the heart of your celebration.
        </span>
      </p>
    </div>
  );
};

export default TextSection;
