import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import weddingImg from "../assets/Wedding.jpeg";
import bday from "../assets/bday.png";
import cateringImg from "../assets/Catering.jpeg";
import flowerBg from "../assets/offerbg.png";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Single Offer Card Component
const OfferCard = ({ img, title, delay, link }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Link to={link} className="no-underline">
      <motion.div
  ref={ref}
  className={`group relative w-full max-w-[300px] aspect-[16/9] overflow-hidden cursor-pointer rounded-md ${
    delay === 1 ? "mt-4 md:mt-24" : ""
  }`}
  variants={cardVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
>
  <img
    src={img}
    alt={title}
    className="w-full h-full object-cover object-center opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-300"
  />
  <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#4c1d39] px-2 group-hover:underline group-hover:text-[#fceeea] whitespace-pre-line text-center">
    {title}
  </p>
</motion.div>

    </Link>
  );
};

const WhatWeOfferSection = () => {
  const cards = [
    { img: weddingImg, title: "Wedding\nDecoration", link: "/services/wedding/wedding-decoration" },
    { img: bday, title: "Theme-based\nBirthday Party", link: "/services/birthday/birthday-decoration" },
    { img: cateringImg, title: "Catering\nServices", link: "/services/catering/catering-services" },
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-[#fceeea]">
      {/* Decorative Flower Background */}
      <img
        src={flowerBg}
        alt="floral design"
        className="hidden min-[701px]:block absolute top-0 left-[-80px] w-[400px] md:w-[600px] lg:w-[750px] h-full opacity-30 rotate-[-5deg] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Heading */}
      <h2
        className="text-4xl sm:text-4xl md:text-5xl text-[#8b3e68] text-center mb-10 relative z-10"
        style={{
          fontFamily: "'Alex Brush', cursive",
          letterSpacing: "0.08em",
        }}
      >
        What We Offer…
      </h2>

      {/* Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center text-center">
        {cards.map((card, index) => (
          <OfferCard
            key={index}
            img={card.img}
            title={card.title}
            delay={index}
            link={card.link}
          />
        ))}
      </div>

      {/* Bottom Text */}
      <div className="relative z-10 text-right text-xl md:text-2xl mt-10 text-[#5a2a49] pr-6 md:pr-20 italic">
        and many more….
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
