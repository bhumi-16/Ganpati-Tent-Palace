import React from "react";
import FlowerImage from "../../../assets/StatsBg.png";

const CateringDetails = () => {
  return (
    <div className="bg-[#1A0023] flex items-center justify-center py-16 px-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left section */}
        <div className="flex flex-col justify-center flex-1 gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e698d4]">
            What's in this for you!!!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ArrowBox
              text="Price"
              detail="Affordable packages designed for every budget."
            />
            <ArrowBox
              text="Customization"
              detail="Personalized themes and setups tailored to you."
            />
            <ArrowBox
              text="Memorable Experience"
              detail="We create events you'll cherish forever."
            />
            <ArrowBox
              text="Professional Service"
              detail="Our expert team ensures a smooth, stress-free event."
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex-1 hidden md:flex items-center justify-center">
          <img
            src={FlowerImage}
            alt="Floral decoration"
            className="max-h-[400px] object-contain scale-x-[-1]"
            style={{
              filter: "brightness(2.2) contrast(2.2) saturate(2.5)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const ArrowBox = ({ text, detail }) => (
  <div className="relative overflow-hidden bg-[#E8E0DC] text-[#4E2244] font-medium py-6 px-6 w-full arrow-shape group cursor-pointer transition-all duration-500 text-center">
    {/* Color swipe background */}
    <div className="absolute inset-0 bg-[#e698d4] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

    {/* Content */}
    <div className="relative z-10 transition-all duration-300">
      <div>{text}</div>
      <div className="opacity-0 max-h-0 overflow-hidden text-sm mt-2 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 ease-in-out">
        {detail}
      </div>
    </div>
  </div>
);

export default CateringDetails;
