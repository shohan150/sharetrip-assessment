/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'murecho': ['Murecho', 'sans-serif']
      },
      colors: {
        textGray: "#5A6573",
        black:"#1A2B3D",
        skyBlue: "#1882FF",
        buttonGreen: "#03A629"
    },
  },
  plugins: [],
}};