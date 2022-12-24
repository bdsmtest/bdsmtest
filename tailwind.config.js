/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000",
        darkgray: "#222",
        lightgray: "#666",
      },
    },
  },
  plugins: [],
}
