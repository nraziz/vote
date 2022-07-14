/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "git",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "640px",
        },
      },
    },
  },
  plugins: [],
};
