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
  "Drop",
  "us",
  "a",
  "line",
  "or",
  "two,",
  "we",
  "are",
  "open",
  "for",
  "creative",
  "minds",
  "and",
  "collaborations!",
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
    <section className="bg-[#5a2a49] text-center pt-12 px-4">
      {" "}
      {/* ↓ pt-20 → pt-12 */}
      {/* CTA Heading */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#e6d2d9] mb-6 leading-relaxed flex flex-wrap justify-center" // ↓ text size + mb
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
      {/* Button with reduced spacing */}
      <button className="mt-2 mb-12 px-6 py-2 font-medium text-[#e6d2d9] rounded-full bg-black relative overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
        <span className="relative z-10">Book Now</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#e6d2d9] via-[#5a2a49] to-[#f0dcf4] blur-md opacity-50 group-hover:opacity-80 transition" />
      </button>
      {/* Footer Section */}
      <footer className="border-t pt-6 pb-3 mt-6 text-sm text-[#f7ece5]">
        {" "}
        {/* ↓ pt-8 pb-4 → pt-6 pb-3 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center mb-3 md:mb-0">
            <img src={logo} alt="Logo" className="h-12 object-contain" />{" "}
            {/* ↓ h-14 → h-12 */}
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center space-x-6 mb-3 md:mb-0">
            <a href="/aboutus" className="hover:text-[#d6bf93]">
              About us
            </a>
            <a href="/services" className="hover:text-[#d6bf93]">
              Services
            </a>
            <a href="/gallery" className="hover:text-[#d6bf93]">
              Gallery
            </a>
            <a href="/contactus" className="hover:text-[#d6bf93]">
              Contact us
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-5 text-[#f7ece5]">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919414136807"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a href="tel:+919414136807">
              <FaPhoneAlt />
            </a>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 px-4 text-xs">
          <p className="mb-1 md:mb-0">© Copyright 2025, All Rights Reserved</p>
          <div className="flex space-x-4">
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
