import React from "react";
import contactBg from "../../assets/contactus/contact-bg.png";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";

const ContactUs = () => {
  return (
    <div>
      <section
        className="relative w-full h-[45vh] sm:h-[60vh] md:h-[75vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${contactBg})`,
          fontFamily: "'Alex Brush', cursive",
          letterSpacing: "0.10em",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

        {/* Card Content */}
        <div className="relative z-10 bg-[#3d0e2f] bg-opacity-90 text-[#f9f5f0] rounded-[2rem] px-4 sm:px-6 py-4 sm:py-6 max-w-[90%] md:max-w-[600px] text-center shadow-xl">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold font-cursive mb-4">
            Book Your Event With Us
          </h1>
        </div>
      </section>

      <ContactForm />
      <ContactCard />
    </div>
  );
};

export default ContactUs;
