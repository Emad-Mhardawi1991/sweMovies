module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary_black: "#212529",
        dark_gray: "#252631",
        primary_red: "#F26363",
      },
    },
  },
  plugins: [],
};
