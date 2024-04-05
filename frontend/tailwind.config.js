import defaultTheme from "tailwindcss/defaultTheme";
import { nextui } from "@nextui-org/react";

const colors = {
  primary: "#202729",
  secondary: "#253C44",
  dark: "#13191B",
  accent1: "#01FEFF",
  accent2: "#006fee",
  black: "#000",
  white: "#fff",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
    fontFamily: {
      suezOne: ["Suez One", "serif"],
      inter: ["Inter", "sans-serif"],
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors,
        },
        dark: {
          colors,
        },
      },
    }),
  ],
};
