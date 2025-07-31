import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    if (e.target.value.length <= 50) {
      setName(e.target.value);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  // Handle services checkbox toggle
  const handleServiceChange = (service) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // Form submit handler opens WhatsApp with message
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917427802555"; 

    const whatsappMessage = `New Event Booking Request!!!
Name: ${name || "N/A"}
Phone: ${phone || "N/A"}
Event: ${eventType || "N/A"}
Date: ${eventDate || "N/A"}
Location: ${location || "N/A"}
Services: ${services.length > 0 ? services.join(", ") : "N/A"}
Message: ${message || "N/A"}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6dfda] font-sans px-4 py-8" id="contact">
      <div className="bg-[#d2aaaa] p-8 rounded-[2rem] shadow-lg w-full max-w-3xl relative">
        <h2
          className="text-xl sm:text-2xl font-semibold text-center text-[#3d1f2a] italic mb-6 font-leckerli"
          style={{
            letterSpacing: "0.08em",
          }}
        >
          Tell us about your event idea!
        </h2>
        <form 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#3d1f2a] font-playpen"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-full mt-1 px-4 py-1 rounded-full border border-black outline-none"
              placeholder="Enter your Full Name"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full mt-1 px-4 py-1 rounded-full border border-black outline-none"
              placeholder="Enter your Location"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full mt-1 px-4 py-1 rounded-full border border-black outline-none"
              placeholder="Enter your Phone Number"
              required
            />
          </div>

          {/* Event Type */}
          <div>
            <label>Event Type</label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full mt-1 px-4 py-1 rounded-full border border-black outline-none text-[#3e1831] focus:ring-2 focus:ring-[#3e1831] focus:border-[#3e1831]"
              required
            >
              <option value="" disabled>
                Select Event Type
              </option>
              <option>Birthday Party</option>
              <option>Wedding</option>
              <option>Baby Shower</option>
              <option>Anniversary</option>
              <option>Corporate Event</option>
              <option>Naming Ceremony</option>
              <option>Engagement</option>
              <option>Housewarming</option>
              <option>Other</option>
            </select>
          </div>

          {/* Event Date */}
          <div>
            <label>Event Date</label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full mt-1 px-4 py-1 rounded-full border border-black outline-none"
              required
            />
          </div>

          {/* Services Required */}
          <div>
            <label>Services Required</label>
            <div className="mt-1 border border-black rounded-xl p-2 font-poppins max-h-[150px] overflow-y-auto">
              {[
                "Venue Decoration",
                "Photography",
                "Catering Services",
                "Music",
                "Makeup Services",
              ].map((service) => (
                <div key={service} className="flex items-center space-x-2 py-1">
                  <input
                    type="checkbox"
                    className="accent-[#3d1f2a]"
                    checked={services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  />
                  <label className="text-sm">{service}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Other Message */}
          <div className="sm:col-span-1 col-span-full">
            <label>Other Message</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-xl border border-black outline-none"
              placeholder="Any extra info"
            />
          </div>

          {/* Button */}
          <div className="sm:col-start-2 flex justify-end items-end">
            <button
              type="submit"
              className="px-6 py-2 mt-2 rounded-xl border border-black bg-[#bf9b94] hover:bg-[#e4c0bc] transition duration-300 font-playwrite"
            >
              Book Now!!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
