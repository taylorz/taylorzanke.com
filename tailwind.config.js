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
        sans: ["Arial"],
      },
      fontSize: {
        xs: ["1.25rem", "1.35rem"],
        sm: ["1.5rem", "1.6rem"],
        base: ["1.75rem", "1.85rem"],
      },
    },
  },
  plugins: [],
};
