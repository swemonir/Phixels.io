/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         motionScale: {
        "200": "200%",
      },
    },
  },
  plugins: [
    require("tailwindcss-motion"),
  ],
};
