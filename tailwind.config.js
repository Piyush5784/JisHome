/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#625dfa",
        customWhite: "#fafafa",
        customGray: "#282828",
        customBlack: "#22201f",
        customOrange: "#f2efed",
      },
    },
  },
  plugins: [],
};
