/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        royal: "#734fa3",
        orchid: "#f8e2ff",
        accent: "#b568ff",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        title: ["Playfair Display", "serif"],
        bricolage: ['"Bricolage Grotesque"', "sans-serif"],
        alice: ["Alice", "serif"],
        leckerli: ['"Leckerli One"', "cursive"],
        playpen: ['"Playpen Sans"', "cursive"],
        poppins: ["Poppins", "sans-serif"],
        playwrite: ['"Playfair Display"', "serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out forwards",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
