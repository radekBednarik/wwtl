/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      screens: {
        xsm: "425px",
        "2xsm": "375px",
        "3xsm": "320px",
      },
    },
  },
  plugins: [],
};
