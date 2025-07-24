import React from "react";
import bgImg from "../../assets/services/bgachievements.png";
import { FaAward, FaSmile, FaUtensils, FaStar } from "react-icons/fa";

const WhyUsSection = () => {
  const points = [
    {
      heading: "15+ Years of Trusted Experience",
      text: "We’ve been creating beautiful, stress-free events since 2008.",
    },
    {
      heading: "One-Stop Event Solution",
      text: "From tents and decoration to catering and DJ – everything under one roof.",
    },
    {
      heading: "Affordable & Custom Packages",
      text: "Flexible packages tailored to your budget and event type.",
    },
    {
      heading: "Timely & Hassle-Free Setup",
      text: "Our team ensures everything is ready on time – without any stress.",
    },
    {
      heading: "Creative & Trendy Themes",
      text: "From Royal Rajasthani to Floral Mehendi – we bring your theme to life.",
    },
    {
      heading: "300+ Happy Clients",
      text: "Families across Bikaner trust us to make their big day truly special.",
    },
    {
      heading: "Skilled & Friendly Team",
      text: "Our experienced staff handles every detail with care and professionalism.",
    },
    {
      heading: "Local Expertise",
      text: "We know Bikaner and nearby areas well – ensuring smooth event execution.",
    },
  ];

  return (
    <div className="w-full bg-[#f7ece5]">
      {/* Achievements Section */}
      <section className="relative py-14 px-4 bg-[#f5d6e1]">
        {/* Background Image Layer with reduced opacity */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImg})`,
            opacity: 0.2,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-[#4c1d39]">
          {/* Awards & Recognitions */}
          <div className="text-center">
            <FaAward className="mx-auto text-3xl mb-2 text-[#1e043a] animate-pulse" />
            <h3 className="text-2xl font-bold">10+</h3>
            <p
              className="text-2xl italic"
              style={{
                fontFamily: "'Alex Brush', cursive",
                letterSpacing: "0.08em",
              }}
            >
              Awards & Recognitions
            </p>
          </div>

          {/* Unique Decoration */}
          <div className="text-center">
            <FaStar className="mx-auto text-3xl mb-2 text-[#1e043a] animate-spin-slow" />
            <h3 className="text-2xl font-bold">50+</h3>
            <p
              className="text-2xl italic"
              style={{
                fontFamily: "'Alex Brush', cursive",
                letterSpacing: "0.08em",
              }}
            >
              Unique Decoration
            </p>
          </div>

          {/* Catering Services */}
          <div className="text-center">
            <FaUtensils className="mx-auto text-3xl mb-2 text-[#1e043a] animate-bounce" />
            <h3 className="text-2xl font-bold">100+</h3>
            <p
              className="text-2xl italic"
              style={{
                fontFamily: "'Alex Brush', cursive",
                letterSpacing: "0.08em",
              }}
            >
              Catering Services
            </p>
          </div>

          {/* Happy Clients */}
          <div className="text-center">
            <FaSmile className="mx-auto text-3xl mb-2 text-[#1e043a] animate-wiggle" />
            <h3 className="text-2xl font-bold">200+</h3>
            <p
              className="text-2xl italic"
              style={{
                fontFamily: "'Alex Brush', cursive",
                letterSpacing: "0.08em",
              }}
            >
              Happy Clients
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="relative py-16 px-6 bg-[#f7ece5] overflow-hidden">
        {/* Optional Floral Backgrounds */}

        <img
          src="/assets/flower-left.png"
          alt=""
          className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 opacity-20 pointer-events-none block"
        />
        <img
          src="/assets/flower-right.png"
          alt=""
          className="absolute right-0 bottom-0 w-16 sm:w-24 md:w-32 opacity-20 pointer-events-none block"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2
            className="text-3xl sm:text-4xl text-center text-[#4c1d39] mb-8"
            style={{
              fontFamily: "'Alex Brush', cursive",
              letterSpacing: "0.08em",
            }}
          >
            What Makes Us Different….
          </h2>

          {/* Full Description for md+ */}
          <ul className="hidden md:block text-[#5a2a49]-800 text-base sm:text-lg leading-relaxed list-decimal pl-5">
            {points.map((point, index) => (
              <li key={index} className="mb-2">
                <strong>{point.heading}:</strong> {point.text}
              </li>
            ))}
          </ul>

          {/* Only Headings for small screens */}
          <ul className="block md:hidden text-[#5a2a49]-800 text-base leading-relaxed list-decimal pl-5">
            {points.slice(0, 4).map((point, index) => (
              <li key={index} className="mb-2 font-semibold">
                {point.heading}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WhyUsSection;
