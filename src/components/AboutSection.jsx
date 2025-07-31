import React from "react";
import flower from "../assets/AboutFlower.png";

const AboutSection = () => {
  return (
    <section className="relative bg-[#e4bfcd] py-16 px-4 overflow-hidden">
      {/* Right floral image - large on big screens, hidden on small */}
      <img
        src={flower}
        alt=""
        className="absolute right-50px top-0  h-full hidden sm:block sm:h-[120%] lg:h-[150%] max-h-none opacity-15 pointer-events-none"
        style={{ right: 0 }}
        aria-hidden="true"
      />

      {/* Text box */}
      <div className="relative max-w-3xl mx-auto p-6 text-left bg-transparent font-body text-lg text-gray-800 leading-8 md:ml-0 sm:ml-[-20px]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5a2a49] mb-4">
          Welcome to Ganpati Tent Palace – Your Celebration, Our Creation!
        </h2>
        <p className="text-[#3e1831]">
          We bring your dreams to life with beautifully designed events. From
          weddings to birthdays, corporate events to festive functions – we make
          every occasion special and unforgettable. With stunning decorations,
          expert planning, and delicious catering, we ensure every detail is
          perfect.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
