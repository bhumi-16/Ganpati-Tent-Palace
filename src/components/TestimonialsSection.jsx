import React, { useEffect, useState } from "react";
import axios from "axios";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Fetch comments from API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/comments");
        setTestimonials(response.data);// Assuming API returns [{ username, content, img }]
        // Sort by newest first
        const sorted = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setTestimonials(sorted);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  // Function to generate initials
  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return (
        parts[0][0].toUpperCase() + parts[1][0].toUpperCase()
      ); // First + Last
    }
    return parts[0][0].toUpperCase(); // Only first name
  };

  // Decide what to display
  const displayed = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section className="bg-[#c8a6b3] text-[#5a2a49] py-16 px-4 text-center overflow-hidden">
      <p className="text-xs tracking-widest mb-2">50K+ HAPPY CUSTOMERS</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 break-words">
        Stories of Celebration & Joy
      </h2>

      {/* Testimonials Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {displayed.length > 0 ? (
          displayed.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start 
              bg-[#e6d2d9] text-[#5a2a49] px-5 py-4 rounded-xl gap-4 
              w-full sm:w-[320px] min-h-[120px] mx-auto shadow-md"
            >
              {/* Avatar or Initials */}
              {testimonial.img ? (
                <img
                  src={testimonial.img}
                  alt={testimonial.username}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#5a2a49] text-white font-bold text-lg">
                  {getInitials(testimonial.username)}
                </div>
              )}

              {/* Message */}
              <div className="text-sm text-center sm:text-left break-words flex-1">
                <p className="mb-1">{testimonial.content}</p>
                <p className="font-semibold">~{testimonial.username}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-[#3e1831]">No reviews yet.</p>
        )}
      </div>

      {/* Footer Link */}
      {testimonials.length > 6 && (
        <div className="mt-10 text-sm">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-[#5a2a49] font-semibold underline hover:text-[#3e1831]"
          >
            {showAll ? "Show Less Reviews" : "Read All Reviews"}
          </button>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
