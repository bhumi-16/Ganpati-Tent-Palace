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
          Ganpati Tent Palace creates beautiful engagement events with elegant décor, personalized setups, and flawless execution for a memorable celebration.
        </span>

        {/* Full version for tablet & larger screens */}
        <span className="hidden sm:block">
           Celebrate the beginning of your forever with Ganpati Tent Palace’s beautifully curated engagement event services. From elegant décor and lighting to customized seating arrangements and stage setups, we create a warm and romantic atmosphere for your special day. Our team pays attention to every detail, ensuring a flawless experience for you and your guests. Whether it’s a grand celebration or an intimate gathering, we design the event to reflect your unique love story and style, making it truly unforgettable.
        </span>
      </p>
    </div>
  );
};

export default TextSection;
