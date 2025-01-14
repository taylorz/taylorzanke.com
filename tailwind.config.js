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
        sans: ["Arial", "sans"],
        serif: ["Times", "serif"],
      },
      fontSize: {
        sm: ["20px", "24px"],
        md: ["32px", "36px"],
      },
    },
  },
  plugins: [],
};
