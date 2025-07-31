import React from "react";
import flowerImg from "../../assets/contactus/contactbg.png";

const ContactCard = () => {
  return (
    <div className="bg-[#e9d3da] min-h-[100vh] flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-stretch">
        {/* Left: Contact Info */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d1c2c] mb-6">
            Quick Contact!!
          </h2>

          <div className="bg-[#b28e9b]  p-6 md:p-10 rounded-2xl text-[#2d1c2c] shadow-lg">
            <p className="mb-6 text-lg font-medium">
              Office Address: Raj Mata Ka Nohra Near Veterinary College,
              Bikaner, Rajasthan, 334001
            </p>
            <p className="mb-6 text-lg font-medium">Office Hours:</p>
            <p className="text-lg font-medium">
              Phone/WhatsApp: +91-9414136807
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hidden md:flex items-start justify-center ">
          <img
            src={flowerImg}
            alt="Flower"
            className="w-[500px] h-[558px] object-cover brightness-75 contrast-110"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
