import React from "react";
import flower from "../assets/StatsBg.png";

import EventsCompleted from "../assets/EventsCompleted.png";
import HappyClients from "../assets/HappyClients.png";
import YearsOfExp from "../assets/YearsOfExp.png";
import ThemesOffered from "../assets/ThemesOffered.png";

const stats = [
  {
    img: EventsCompleted,
    value: "10K+",
    label: "Events Completed",
    bg: "bg-[#ead195]",
    hoverBg: "group-hover:bg-[#c9a74d]",
    hoverText: "group-hover:text-[#5a2a49]",
    extraStyle: "opacity-80",
  },
  {
    img: HappyClients,
    value: "2K+",
    label: "Happy Clients",
    bg: "bg-[#5a2a49]",
    hoverBg: "group-hover:bg-[#7a3d64]",
    hoverText: "group-hover:text-[#ead195]",
    extraStyle: "",
  },
  {
    img: YearsOfExp,
    value: "25+",
    label: "Years of Experience",
    bg: "bg-[#5a2a49]",
    hoverBg: "group-hover:bg-[#7a3d64]",
    hoverText: "group-hover:text-[#ead195]",
    extraStyle: "opacity-80",
  },
  {
    img: ThemesOffered,
    value: "100+",
    label: "Themes Offered",
    bg: "bg-[#ead195]",
    hoverBg: "group-hover:bg-[#c9a74d]",
    hoverText: "group-hover:text-[#5a2a49]",
    extraStyle: "",
  },
];

const StatsSection = () => {
  return (
    <section className="relative bg-[#f0dcf4] py-12 px-6 sm:px-10 overflow-hidden">
      {/* 🌸 Background Flower on left only */}
      <img
        src={flower}
        alt="Flower Background"
        className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      {/* Stat Circles Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-12 md:gap-16">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`group ${item.bg} ${item.hoverBg} ${item.extraStyle} 
        rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 
        mx-auto flex flex-col items-center justify-center text-center 
        shadow-xl transition-colors duration-300`}
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 object-contain"
            />
            <div className={`text-lg sm:text-2xl text-white ${item.hoverText}`}>
              {item.value}
            </div>
            <div
              className={`text-xs sm:text-base mt-1 text-white ${item.hoverText}`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
