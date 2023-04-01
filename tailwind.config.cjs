/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        myPrimary: {
          100: "#1B3764",
        },
        mySecondary: {
          100: "#FFCA42"
        },
        myNeutral: {
          100: "#F6F8FC"
        }
      },
      fontFamily: {
        primary: "Roboto",
        bungee: "Bungee Shade"
      },
      backgroundImage: "url('/hero/kid_reading_a_book.webp')"
    },
  },
  plugins: [],
}