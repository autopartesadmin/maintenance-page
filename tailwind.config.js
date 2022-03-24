module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['"Montserrat"', '"Open Sans"'],
      yaldevi: ['"Yaldevi"', '"Open Sans"'],
    },
    extend: {
      colors: {
        primary: "#01395E",
        secondary: "#E7B864",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
