import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

// Words for animated CTA heading
const words = [
  "Turning",
  "Your",
  "Special",
  "Moments",
  "into",
  "Timeless",
  "Memories",
  "with",
  "Style,",
  "Elegance,",
  "and",
  "a",
  "Personal",
  "Touch.",
];

// Framer Motion Variants
const headingVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <section className="bg-[#5a2a49] text-center pt-12 px-4 sm:px-6 md:px-8">
      {/* CTA Heading */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#e6d2d9] mb-6 leading-relaxed flex flex-wrap justify-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block mx-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>
      {/* Button */}
      <button className="mt-2 mb-12 px-6 py-2 font-medium text-[#e6d2d9] rounded-full bg-black relative overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
        <a href="/contactus#contact">
          <span className="relative z-10 scroll-smooth">Book Now</span>
        </a>
        <span className="absolute inset-0 bg-gradient-to-r from-[#e6d2d9] via-[#5a2a49] to-[#f0dcf4] blur-md opacity-50 group-hover:opacity-80 transition" />
      </button>

      {/* Footer Section */}
      <footer className="border-t pt-6 pb-3 mt-6 text-sm text-[#f7ece5]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4 gap-6 md:gap-0">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <img src={logo} alt="Logo" className="h-20 object-contain" />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-center gap-4 md:gap-6 text-base">
            <a href="/aboutus" className="hover:text-[#d6bf93] transition">
              About us
            </a>
            <a href="/services" className="hover:text-[#d6bf93] transition">
              Services
            </a>
            <a href="/gallery" className="hover:text-[#d6bf93] transition">
              Gallery
            </a>
            <a href="/contactus" className="hover:text-[#d6bf93] transition">
              Contact us
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end space-x-5 text-[#f7ece5] text-xl">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#d6bf93] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#d6bf93] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919414136807"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-[#d6bf93] transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="tel:+919414136807"
              aria-label="Phone"
              className="hover:text-[#d6bf93] transition"
            >
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-4 px-4 text-xs gap-2 md:gap-0">
          <p className="text-center md:text-left">
            © Copyright 2025, All Rights Reserved
          </p>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="/privacypolicy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/termsandconditions" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
