/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        fallingStar: "fallingStar 5s linear forwards",
      },
      keyframes: {
        fallingStar: {
          "0%": { transform: "translate(0, 0) scale(var(--tw-scale-x))" },
          "100%": {
            transform: "translate(120vw, 120vh) scale(var(--tw-scale-x))",
          },
        },
      },
    },
  },
  plugins: [],
};
