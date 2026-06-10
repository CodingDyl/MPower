/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    fontFamily: {
      lexend: ["Lexend", "sans-serif"],
      source: ['"Source Sans 3"', "sans-serif"],
    },
    colors: {
      primary: "#555555",
      secondary: "#aaa6c3",
      tertiary: "#334367",
      "brand-deep": "#1a2d52",
      "brand-gold": "#C8952F",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      card: "0px 20px 60px -10px rgba(51, 67, 103, 0.12)",
      "card-hover": "0px 28px 72px -8px rgba(51, 67, 103, 0.22)",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "bg-pattern": "url('/src/assets/background-home.jpeg')",
    },
  },
};
export const plugins = [];
