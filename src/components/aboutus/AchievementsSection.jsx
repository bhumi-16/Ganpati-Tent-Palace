import React from "react";

// Dummy images (replace with actual imports or URLs)
import ach1 from "../../assets/aboutus/b.png";
import ach2 from "../../assets/aboutus/gita.png";
import ach3 from "../../assets/aboutus/reception.png";

const achievements = [
  {
    image: ach1,
    date: "JAN 12, 2023",
    title: "Grand Ramayan Event – A Historic Success",
    tag: "Events",
  },
  {
    image: ach2,
    date: "FEB 25, 2023",
    title: "Bhagwat Katha – Gathering of Devotees Nationwide",
    tag: "Recognition",
  },
  {
    image: ach3,
    date: "MAR 15, 2023",
    title: "Grand Reception Party - A Night to Remember",
    tag: "Milestone",
  },
];

const AchievementsSection = () => {
  return (
    <section className="bg-[#e6d2d9] text-[#5a2a49] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl mb-2"
          style={{
            fontFamily: "'Alex Brush', cursive",
            letterSpacing: "0.08em",
          }}
        >
          Our Achievements
        </h2>
        <p className="text-[#5a2a49]-400 text-sm sm:text-base">
          A glimpse into some of our proudest milestones and recognitions.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-[#f0dcf4] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-[#f6efe5]-400">{item.date}</p>
              <h3 className="text-lg font-medium mt-2 mb-1">{item.title}</h3>
              <span className="text-sm text-[#6d576f]">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
