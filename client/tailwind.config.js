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
        primaryPurple: "#7a84ff"
      },

      fontFamily: {
        mainFont: ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}
