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
        sm: ["20px", "24px"],
      },
      animation: {
        blink: "blink .35s steps(5, start) infinite",
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
