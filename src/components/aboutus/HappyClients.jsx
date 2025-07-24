import React from "react";
import clientImg from "../../assets/aboutus/story2.png"; // Replace with actual image path
import { FaStar } from "react-icons/fa";

const HappyClients = () => {
  return (
    <section className="bg-[#f6efe5] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Section Heading */}
          {/* <h3
            className="text-3xl sm:text-4xl md:text-5xl mb-2 text-[#4c1d39]"
            style={{
              fontFamily: "'Alex Brush', cursive",
              letterSpacing: "0.08em",
            }}
          >
            Achievements
          </h3> */}

          <h2 className="text-3xl sm:text-4xl font-bold text-[#5a2a49] mb-4">
            2800+ customers <br className="hidden sm:block" />
            shared their love for{" "}
            <span className="text-[#4c1d39]">Ganpati Tent Palace</span>.
          </h2>

          <p className="text-[#220124] text-base sm:text-lg mb-4">
            From grand weddings to cozy get-togethers, our clients trust us to
            bring their celebrations to life. Hear what they have to say about
            their joyful experiences.
          </p>

          {/* Stars and Rating */}
          <div className="flex items-center justify-center md:justify-start mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[#846276] mr-1" />
            ))}
            <p className="ml-2 text-sm sm:text-base text-[#3e1831]">
              <strong>4.8 out of 5 stars</strong> from 2.8k reviews
            </p>
          </div>
        </div>

        {/* Right Image and Quote */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm">
            <img
              src={clientImg}
              alt="Happy Client"
              className="w-full h-auto object-cover rounded-xl shadow-md"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#e6d2d9]/90 backdrop-blur-md rounded-lg p-4 text-sm shadow-lg">
              <p className="italic text-[#5a2a49] mb-2">
                “Simply the best. Better than all the rest. I’d recommend
                Ganpati Tent Palace to everyone.”
              </p>
              <div>
                <p className="font-semibold text-[#3e1831]">Leslie Alexander</p>
                <p className="text-[#ac97ad] text-xs">
                  Director of Celebrations, CreativeGIG
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
