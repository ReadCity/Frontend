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
        },
        adminPrimary: {
          100: "#01384D"
        },
        adminCoral: {
          100: "#EABF9F"
        },
        about: {
          100: "#F4F8FF"
        }
      },
      fontFamily: {
        primary: "Roboto",
        bungee: "Bungee Shade",
        title:"Open Sans"
      },
      backgroundImage: {
        hero: "url('/hero/kid_reading_a_book.webp')",
        gradient: "linear-gradient(to right, #1B3764, #FFCA42)"
      }
    },

  },
  plugins: [],
  // important: true
}