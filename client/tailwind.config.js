/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBg: "#2a3543",
        mainBg: "#131a21",
        // Secondary blue boxes is for all boxes in main and couple 
        // of other things
        secondaryBlueBoxes: "#1c2632",
        textWhite: "#FFF5EE",
        primaryPurple: "#7a84ff",
        primaryGray: "rgba(255, 255, 255, 0.15)",
        teamLostGray: "rgba(255, 255, 255, 0.4)"
      },

      fontFamily: {
        mainFont: ["Space Grotesk", "sans-serif"],
        sofiaSans: ["Sofia Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}
