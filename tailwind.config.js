/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSmoothing: ["antialiased"],
      safelist: ["font-bold"], // Prevent PurgeCSS from removing it
    },
  },
  plugins: [],
};
