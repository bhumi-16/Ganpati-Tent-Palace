import React, { useState } from "react";
import axios from "axios"; // import axios
import clientImg from "../../assets/aboutus/story2.png"; 
import { FaStar } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const HappyClients = () => {
  const [clientName, setClientName] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle submit
  const handleSubmit = async () => {
    if (!clientName || !review) {
      setMessage("Please fill in both fields!");
      return;
    }
    if (!review.trim()) {
      setMessage("Please write something before sending.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await axios.post("http://localhost:5000/api/comments", {
        username: clientName,
        content: review,
      });

      if (response.status === 200 || response.status === 201) {
        setMessage(" Review submitted successfully!");
        setClientName("");
        setReview("");
        setTimeout(() => setMessage(""), 2000);
      }
    } catch (error) {
      if (error.response) {
        setMessage(" Error: " + (error.response.data.message || "Something went wrong"));
      } else {
        setMessage("⚠️ Server error. Try again later.");
      }
       setTimeout(() => setMessage(""), 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f6efe5] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
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
              <strong>4.9 out of 5 stars</strong> from 9.8k reviews
            </p>
          </div>

          {/* Review Box */}
          <div className="mt-6 bg-[#e6d2d9]/90 backdrop-blur-md rounded-lg p-4 text-sm shadow-lg max-w-md mx-auto md:mx-0">
            <p className="font-semibold text-[#5a2a49] mb-3 text-lg italic ">
              Tell Us What You Think
            </p>

            {/* Name Input */}
            <div className="flex items-center gap-2 mb-3">
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Enter your name..."
                className="flex-1 px-3 py-2 bg-transparent border-0 border-gray-400 
                           placeholder-gray-500 focus:outline-none focus:border-[#5a2a49]"
              />
            </div>

            {/* Review Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Share your experience..."
                className="flex-1 px-3 py-2 bg-transparent border-0 border-gray-400 
                           placeholder-gray-500 focus:outline-none focus:border-[#5a2a49]"
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-[#5a2a49] text-white px-2 py-2 rounded-full hover:bg-[#4c1d39] transition disabled:opacity-50"
              >
                {loading ? "..." : <IoSend />}
              </button>
            </div>

            {/* Status Message */}
            {message && (
              <p className="mt-2 text-xs text-[#3e1831]">{message}</p>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm">
            <img
              src={clientImg}
              alt="Happy Client"
              className="w-full h-auto object-cover rounded-xl shadow-md"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#e6d2d9]/90 backdrop-blur-md rounded-lg p-4 text-sm shadow-lg">
              <p className="italic text-[#5a2a49] mb-2">
                “Celebrate the Present, Create the Moments — Live with Awareness, Lead with Joy.”
              </p>
              <div>
                <p className="font-semibold text-[#3e1831]">
                  Shri Shri Ravishankar’s
                </p>
                <p className="text-[#ac97ad] text-xs">A Humanitarian Leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
