import React, { useState } from "react";
import galleryBg from "../../assets/gallery/gallery.png";
import GalleryCategories from "./GalleryCategories";
import EventGallery from "./EventGallery";
import SpotlightMoments from "./SpotlightMoments";

const GalleryHero = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <section className="relative h-[35vh] sm:h-[55vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <img src={galleryBg} alt="Gallery Background" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#3d293e]/[0.71]" />
        <div className="relative z-10 bg-[#3d293e]/80 px-8 py-4 rounded-xl shadow-lg">
          <h1 className="text-[#f9f5f0] text-4xl sm:text-5xl md:text-6xl" style={{ fontFamily: "'Alex Brush', cursive" }}>
            Gallery
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#b277d3]" />
      </section>

      {/* Pass selectedCategory and setter to children */}
      <GalleryCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <EventGallery selectedCategory={selectedCategory} />
      <SpotlightMoments />
    </div>
  );
};

export default GalleryHero;
