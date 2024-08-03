/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        rose: "#d6a494",
        purple: "#c494d6",
        ligthBlue: "#94b6d6",
        blueTwo: "#8a86ca",

      }
    },

  },
  plugins: [],
}

