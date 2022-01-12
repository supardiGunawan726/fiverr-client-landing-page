module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`'Roboto'`, "sans-serif"],
      },
      colors: {
        primary: "#3961F3",
        secondary: "#05D4FC",
        accent: "#F582FF",
      },
    },
  },
  plugins: [],
};
