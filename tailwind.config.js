/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: colors.blue,
        body: "#FFFFFF",
        headerbg: "#FAFBFF",
        theme: "#B721FF",
        nav: "#404053",
        secondary: "#786CFE",
        accent: "#21D4FD",
        "input-border": "#565666",
        input: "#2A2A35",
        white: colors.white,
        text: "#12141D",
        header: "#22222b",
        button: "#f25c54",
      },
    },
    fontFamily: {
      poppins: ["'Poppins'", "sans-serif"],
      montserrat: ["'Montserrat'", "sans-serif"],
      inter: ["'Inter'", "sans-serif"],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
