/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        headerBg: "#2a3543",
        mainBg: "#1c2632"
      },
      fontFamily: {
        mainFont: ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}

