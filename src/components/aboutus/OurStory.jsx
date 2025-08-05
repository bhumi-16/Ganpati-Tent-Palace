import React from "react";
import img1 from "../../assets/aboutus/story1.png"; // back image
import img2 from "../../assets/aboutus/story2.png"; // front image

const OurStory = () => {
  return (
    <section className="py-12 px-4 bg-[#f0dcf4]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-2 text-[#4c1d39]">
            <span
              style={{
                fontFamily: "'Alex Brush', cursive",
                letterSpacing: "0.08em",
              }}
            >
              Our&nbsp;&nbsp;Story
            </span>
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#4c1d39] mb-4">
            A Journey of Celebrations
          </h3>

          {/* Paragraph for medium+ screens */}
          <div className="hidden sm:block">
            <p className="text-[#5a2a49] text-lg leading-relaxed mb-3">
              Ganpati Tent Palace started with a simple dream — to create
              beautiful, stress-free events that leave a lasting impression.
              What began as a small family-run setup has now grown into one of
              Bikaner’s most trusted event planning services.
            </p>
            <p className="text-[#5a2a49] text-lg leading-relaxed mb-3">
              Over the years, we’ve had the honor of being part of countless
              celebrations — from elegant weddings to vibrant college festivals,
              from joyful birthdays to meaningful corporate events.
            </p>
            <p className="text-[#5a2a49] text-lg leading-relaxed">
              Today, we continue to craft events with the same passion and
              personal touch that started it all. Because for us, it’s not just
              about managing an event — it’s about celebrating your story.
            </p>
          </div>

          {/* Short paragraph for small screens only */}
          <div className="block sm:hidden">
            <p className="text-[#5a2a49] text-base leading-relaxed">
              From a humble start, Ganpati Tent Palace grew into Bikaner's most
              trusted event planner. We turn weddings, birthdays, and festivals
              into lasting memories — with creativity, care, and joy.
            </p>
          </div>
        </div>

       {/* Image Section */}
<div className="relative w-full sm:w-1/2 flex justify-center">
  <div className="relative w-[160px] sm:w-[220px] md:w-[260px] lg:w-[300px] aspect-[3/4]">
    {/* Background Image */}
    <img
      src={img2}
      alt="Our Story Background"
      className="w-full h-full object-cover rounded-xl shadow-lg"
    />

    {/* Foreground Image - moderate shift */}
    <img
      src={img1}
      alt="Our Story Foreground"
       className="w-full object-cover rounded-xl shadow-2xl absolute top-10 left-10 sm:top-24 sm:left-36 max-w-[90%]"
  style={{ height: "90%" }}
    />
  </div>
</div>



      </div>
    </section>
  );
};

export default OurStory;
