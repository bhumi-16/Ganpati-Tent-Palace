import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import serviceImg from "../../assets/services/serviceImg.png";
import floralTop from "../../assets/AboutFlowers.png";
import floralBottom from "../../assets/AboutFlower.png";

// Services mapped with categories
const services = [
  { title: "Wedding Decoration", category: "wedding" },
  { title: "Engagement Decoration", category: "engagement" },
  { title: "Birthday Decoration", category: "birthday" },
  { title: "Theme-based Events", category: "themes" },
  { title: "Bride Groom Entry", category: "entry" },
  { title: "Corporate Events", category: "corporate" },
  { title: "Stage Decoration", category: "stage" },
  { title: "College Festival", category: "college" },
  { title: "Catering Services", category: "catering" },
  { title: "Baby Shower", category: "baby" },
  { title: "Government Function", category: "government" },
  { title: "Annual Function", category: "school" },
];

const OurServices = () => {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleServices =
    isSmallScreen && !showAll ? services.slice(0, 4) : services;

  return (
    <section className="relative bg-[#e6d2d9] py-16 px-4 sm:px-6">
      {/* Floral Backgrounds */}
      <img
        src={floralTop}
        alt="Floral Background Top"
        className="hidden lg:block absolute top-0 left-0 w-auto max-w-[1500px] opacity-20 pointer-events-none z-0 scale-x-[-1]"
      />
      <img
        src={floralBottom}
        alt="Floral Background Bottom"
        className="hidden lg:block absolute bottom-0 right-0 w-auto max-w-[1500px] opacity-20 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-center text-3xl sm:text-4xl md:text-5xl mb-10 text-[#4c1d39]"
          style={{
            fontFamily: "'Alex Brush', cursive",
            letterSpacing: "0.08em",
          }}
        >
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {visibleServices.map((service, i) => {
            const rowIndex = Math.floor(i / 3);
            const bgColor = rowIndex <= 1 ? "#f0dcf4" : "#e6d2d9";

            const slug = service.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^a-z0-9\-]/g, "");

            const path = `/services/${service.category}/${slug}`;

            return (
              <Link to={path} key={i}>
                <div
                  className="relative rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.2)] border border-[#1A0023] group transform transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                  style={{ backgroundColor: bgColor }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={serviceImg}
                      alt={service.title}
                      className="w-full h-36 sm:h-44 md:h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4E2244]/50 to-transparent flex items-center justify-center px-2 text-center transition-all duration-500 group-hover:from-[#4E2244]/80">
                    <p
                      className="text-[#e6d2d9] text-xl sm:text-xl font-semibold leading-tight transform group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                      style={{
                        fontFamily: "'Alex Brush', cursive",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {service.title}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Load More Button */}
        {!showAll && isSmallScreen && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#4c1d39] text-white px-6 py-2 rounded-full hover:bg-[#3a112d] transition-all duration-300 text-sm font-semibold"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServices;
