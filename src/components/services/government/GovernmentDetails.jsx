import React from "react";
import FlowerImage from "../../../assets/StatsBg.png";

const GovernmentDetails = () => {
  return (
    <div className="bg-[#1A0023] flex items-center justify-center py-16 px-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex flex-col justify-center flex-1 gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8d1a6]">
            What's in this for you!!!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ArrowBox text="Price" />
            <ArrowBox text="Customization" />
            <ArrowBox text="Memorable Experience" />
            <ArrowBox text="Professional Service" />
          </div>
        </div>

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

const ArrowBox = ({ text }) => (
  <div className="relative bg-[#E8E0DC] text-[#4E2244] font-medium py-6 px-6 w-full arrow-shape break-words text-center">
    {text}
  </div>
);

export default GovernmentDetails;
