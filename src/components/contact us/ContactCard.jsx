import React from "react";
import flowerImg from "../../assets/contactus/contactbg.png";
const ContactCard = () => {
  return (
    <div className="relative bg-[#e9d3da] min-h-[100vh] flex items-center justify-center px-4 py-10">
      {/* Background Flower */}
      <img
        src={flowerImg}
        alt="Flower"
        className="absolute right-5 bottom-0 max-w-[40%] opacity-60 pointer-events-none"
      />

      <div className="max-w-3xl w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2d1c2c] mb-6">
          Quick Contact!!
        </h2>

        <div className="bg-[#b28e9b] p-6 md:p-10 rounded-2xl text-[#2d1c2c] shadow-lg">
          <p className="mb-6 text-lg font-medium">
            Office Address :Raj Mata Ka Nohra Near Veterinary
            College,Bikaner,Rajasthan,334001
          </p>
          <p className="mb-6 text-lg font-medium">Office Hours :</p>
          <p className="text-lg font-medium">Phone/WhatsApp:+91-9414136807</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
