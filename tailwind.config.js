/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}","./dashboard.jsx", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['PM', 'sans-serif'],
      },
      colors: {
        LB : "#16163C",
        DB : "#0A0A1C",
        Border: "7C7CFF"
      }
    },
  },
  plugins: [],
}
