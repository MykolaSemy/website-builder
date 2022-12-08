/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["Dancing Script", "cursive"],
      },
      keyframes: {
        appear: {
          "0%": { trasform: "scale(0)" },
          "100%": { trasform: "scale(1)" },
        },
      },
      animation: {
        appear: "appear 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
