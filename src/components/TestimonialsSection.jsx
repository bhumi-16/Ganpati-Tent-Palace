import React from "react";

const testimonials = [
  {
    name: "@manish",
    text: "Ganpati Tent Palace made our wedding magical! Every detail was perfect and stress-free.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "@shailender",
    text: "From décor to catering, everything was beyond expectations. Guests still talk about our event!",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "@vikas",
    text: "Professional, creative, and caring—exactly what we needed for our corporate annual meet.",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "@alok",
    text: "They transformed our backyard into a dream engagement venue. Truly unforgettable!",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "@jyoti",
    text: "Our college festival was a grand success, thanks to their flawless planning and vibrant setup.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "@nishant",
    text: "Beautiful designs, tasty food, and warm hospitality. They make celebrations truly special.",
    img: "https://randomuser.me/api/portraits/men/63.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#c8a6b3] text-[#5a2a49] py-16 px-4 text-center overflow-hidden">
      <p className="text-xs tracking-widest mb-2">50K+ HAPPY CUSTOMERS</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 break-words">
        Stories of Celebration & Joy
      </h2>

      {/* Testimonials Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => {
          // Show only first 3 on small screens, all on md+
          const isHiddenOnMobile = index > 2 ? "hidden md:flex" : "flex";

          return (
            <div
              key={index}
              className={`${isHiddenOnMobile} flex-col sm:flex-row bg-[#e6d2d9] text-[#5a2a49] px-4 py-4 rounded-full items-center gap-4 min-w-0 overflow-hidden mx-auto w-full sm:w-auto`}
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-sm text-center sm:text-left break-words">
                <span className="block">{testimonial.text}</span>
                <span className="font-semibold block">{testimonial.name}</span>
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer Link */}
      <div className="mt-10 text-sm">Read All 2,682 Reviews</div>
    </section>
  );
};

export default TestimonialsSection;
