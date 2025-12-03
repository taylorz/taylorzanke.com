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
        serif: ["Times New Roman", "Times", "serif"],
        sans: ["Arial"],
      },
      fontSize: {
        sm: ["14px", "16px"],
      },
    },
  },
  plugins: [],
};
