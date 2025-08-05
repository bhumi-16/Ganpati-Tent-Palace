import React from "react";
import bgImage from "../../../assets/Wedding/wedding.jpeg";
import EntryGalleryGrid from "./entryGalleryGrid";
import EntryStyledParagraph from "./entryStyledParagraph";
import EntryDetails from "./EntryDetails";

const Entry = () => {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-[#5a2a50]/60" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
  <div className="bg-[#310924] text-white text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold px-4 py-2 sm:px-6 sm:py-4 rounded-2xl shadow-lg text-center max-w-full break-words">
    Bride-Groom Entry
  </div>
</div>


      </div>

      {/* Description Paragraph */}
      <EntryStyledParagraph />

      {/* Gallery */}
      <EntryGalleryGrid />

      {/* Entry Details */}
      <EntryDetails />
    </div>
  );
};

export default Entry;
