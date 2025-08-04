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
          filter:
            "sepia(0.6) saturate(4) hue-rotate(10deg) brightness(0.9) contrast(0.75)",
        }}
      />

      {/* Right Floral */}
      <img
        src={rightFloral}
        alt="Right Floral"
        className="absolute top-50 right-0 w-24 sm:w-32 lg:w-80 scale-x-[-1] hidden lg:block"
        style={{
          filter:
            "sepia(0.6) saturate(4) hue-rotate(10deg) brightness(0.9) contrast(0.75)",
        }}
      />

      {/* Text */}
      <p className="text-[#fbd68f] text-center text-xl sm:text-2xl md:text-3xl leading-relaxed max-w-4xl font-semibold z-10">
        At Ganpati Tent Palace, we provide professional and well-managed
        solutions for all types of corporate events. Whether it's a business
        conference, product launch, seminar, or annual company gathering, we
        handle everything from stage setup and seating to lighting, sound, and
        branding. Our team ensures timely execution, elegant décor, and a
        seamless experience. We maintain the right balance between formal style
        and creative presentation to leave a lasting impression. Make your next
        corporate event smooth, stylish, and successful with us.
      </p>
    </div>
  );
};

export default TextSection;
