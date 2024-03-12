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
        serif: ["sans-serif"],
      },
      fontSize: {
        sm: ["17px", "20px"],
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
