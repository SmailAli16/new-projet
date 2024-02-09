import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": "#fafafa",
          "base-200": "#ffffff",

          primary: "#633cff",
          "primary-focus": "#beadff",
          "primary-content": "#ffffff",

          neutral: "#737373",
        },
      },
    ],
  },
};

