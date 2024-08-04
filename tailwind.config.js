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
        serif: ["Times New Roman", "serif"],
      },
      fontSize: {
        sm: ["17px", "22px"],
        md: ["19px", "24px"],
      },
    },
  },
  plugins: [],
};
