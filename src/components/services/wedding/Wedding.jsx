import React from "react";
import bgImage from "../../../assets/Wedding/wedding.jpeg";
import WeddingGalleryGrid from "./WeddingGalleryGrid";
import WeddingStyledParagraph from "./WeddingStyledParagraph";

const Wedding = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-[#5a2a49]/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-[#4c1e3b] text-white text-lg md:text-xl font-semibold px-6 py-3 rounded-2xl shadow-lg">
          Wedding Decoration
        </div>
      </div>
      <WeddingStyledParagraph />
      <WeddingGalleryGrid />
    </div>
  );
};

export default Wedding;
