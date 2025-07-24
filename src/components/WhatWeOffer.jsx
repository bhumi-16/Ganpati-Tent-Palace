import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import weddingImg from "../assets/Wedding.jpeg";
import bday from "../assets/bday.png";
import cateringImg from "../assets/Catering.jpeg";
import flowerBg from "../assets/offerbg.png";

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

// ✅ Create a separate component for each card
const OfferCard = ({ img, title, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`group relative w-[300px] h-[200px] overflow-hidden cursor-pointer rounded-md ${
        delay === 1 ? "mt-4 md:mt-24" : ""
      }`}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-300"
      />
      <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#4c1d39] px-2 group-hover:underline group-hover:text-[#fceeea] whitespace-pre-line">
        {title}
      </p>
    </motion.div>
  );
};

const WhatWeOfferSection = () => {
  const cards = [
    { img: weddingImg, title: "Wedding\nDecoration" },
    { img: bday, title: "Theme-based\nBirthday Party" },
    { img: cateringImg, title: "Catering\nServices" },
  ];

  return (
    <section className="relative bg-[#fceeea] py-16 px-4 overflow-hidden">
      {/* 🌸 Left Floral Background */}
      <img
        src={flowerBg}
        alt="floral design"
        className="absolute top-0 left-0 h-full w-[60%] sm:w-[50%] object-contain opacity-20 pointer-events-none ml-[-8%] max-w-none"
        aria-hidden="true"
      />

      {/* 💖 Heading */}
      <h2
        className="text-4xl sm:text-4xl md:text-5xl font-bold text-[#8b3e68] text-center mb-10"
        style={{
          fontFamily: "'Alex Brush', cursive",
          letterSpacing: "0.08em",
        }}
      >
        What We Offer….
      </h2>

      {/* 🎬 Animated Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center text-center">
        {cards.map((card, index) => (
          <OfferCard
            key={index}
            img={card.img}
            title={card.title}
            delay={index}
          />
        ))}
      </div>

      {/* 📎 Bottom Text */}
      <div className="text-right text-xl md:text-2xl mt-10 text-[#5a2a49] pr-6 md:pr-20 italic">
        and many more….
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
