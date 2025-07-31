import React from "react";

const testimonials = [
  {
    name: "@premktra.a",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "@jamesonx",
    text: "I just love how these people build this system.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "@camcomods",
    text: "A must have UI kit for building my landing pages.",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "@alexabornn",
    text: "A must have UI kit for building my landing pages.",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "@tmarina",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "@chrisin_pa",
    text: "I just love how these people build this system.",
    img: "https://randomuser.me/api/portraits/men/63.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#c8a6b3] text-[#5a2a49] py-16 px-4 text-center overflow-hidden">
      <p className="text-xs tracking-widest mb-2">12K+ HAPPY CUSTOMERS</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 break-words">
        Users love Landingfolio
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
