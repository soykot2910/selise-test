/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "412px",
        md: "600px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1920px",
      },
    },
  },
  plugins: [],
};
