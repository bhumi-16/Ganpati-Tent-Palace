import React from "react";
import {
  FaRegSmileBeam,
  FaCalendarCheck,
  FaAward,
  FaPalette,
} from "react-icons/fa";
import flower from "../assets/StatsBg.png";

const stats = [
  {
    icon: (
      <FaCalendarCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#5a2a49]" />
    ),
    value: "40K+",
    label: "Events Completed",
    bg: "bg-[#ead195]",
    hoverBg: "group-hover:bg-[#c9a74d]",
    hoverText: "group-hover:text-[#5a2a49]",
    extraStyle: "opacity-80",
  },
  {
    icon: <FaRegSmileBeam className="w-8 h-8 sm:w-10 sm:h-10 text-[#ead195]" />,
    value: "50K+",
    label: "Happy Clients",
    bg: "bg-[#5a2a49]",
    hoverBg: "group-hover:bg-[#7a3d64]",
    hoverText: "group-hover:text-[#ead195]",
    extraStyle: "",
  },
  {
    icon: <FaAward className="w-8 h-8 sm:w-10 sm:h-10 text-[#ead195]" />,
    value: "25+",
    label: "Years of Experience",
    bg: "bg-[#5a2a49]",
    hoverBg: "group-hover:bg-[#7a3d64]",
    hoverText: "group-hover:text-[#ead195]",
    extraStyle: "opacity-80",
  },
  {
    icon: <FaPalette className="w-8 h-8 sm:w-10 sm:h-10 text-[#5a2a49]" />,
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
      {/* Background Flower on left only */}
      <img
        src={flower}
        alt="Flower Background"
        className="absolute left-0 top-0 h-full w-30 object-cover opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      {/* Stat Circles Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-12 md:gap-16">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`group ${item.bg} ${item.hoverBg} ${item.extraStyle}
              rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 
              mx-auto flex flex-col items-center justify-center text-center 
              shadow-xl transition-colors duration-300`}
          >
            <div className="mb-2 sm:mb-4">{item.icon}</div>
            <div className="w-full px-1 text-center">
              <div
                className={`text-sm sm:text-base md:text-xl text-white break-words ${item.hoverText}`}
              >
                {item.value}
              </div>
              <div
                className={`text-[9px] sm:text-xs md:text-sm mt-1 text-white break-words ${item.hoverText}`}
              >
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
