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
          At Ganpati Tent Palace, we create elegant weddings with beautiful
          setups, personalized touches, and seamless execution for your special
          day.
        </span>

        {/* Full version for tablet & larger screens */}
        <span className="hidden sm:block">
          Our Government Events are organized with precision and professionalism
          to ensure impactful gatherings. From official meetings, inaugurations,
          and awareness programs to large-scale public events, we manage every
          detail with care. Our focus is on smooth coordination, timely
          execution, and meaningful outcomes that reflect the vision and values
          of government initiatives, ensuring trust and excellence.
        </span>
      </p>
    </div>
  );
};

export default TextSection;
