/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dictionary: {
          gray: {
            100: "#F4F4F4",
            200: "#E9E9E9",
            300: "#757575",
            400: "#3A3A3A",
            500: "#2D2D2D",
            600: "#1F1F1F",
            700: "#050505",
          },
          purple: "#A445ED",
          red: "#FF5252",
        },
      },
    },
  },
  plugins: [],
}
