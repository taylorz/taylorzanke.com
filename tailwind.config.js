/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Times", "serif"],
      },
      fontSize: {
        sm: ["18px", "20px"],
      },
      animation: {
        blink: "blink .25s steps(5, start) infinite",
      },
      keyframes: {
        blink: {
          to: { visibility: "hidden" },
        },
      },
    },
  },
  plugins: [],
};
