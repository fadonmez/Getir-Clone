/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobileApp:
          "url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)",
      },
      colors: {
        primary: "#4c3398",
        secondary: "#ffd300",
        tertiary: "#5c3dbb",
        black: "#3e3e3e",
      },
    },
  },
  plugins: [],
};
