/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #000000, #1A1A1A, #333333, #4D4D4D, #666666, #7F7F7F, #990000, #CC0000, #FF0000, #FF3300, #FF6600, #FF9900, #FFCC00, #FFFF00, #CCFF00, #99FF00, #66FF00, #33FF00, #00FF00, #00FF33, #00FF66, #00FF99, #00FFCC, #00FFFF, #0099CC)",
          "nice-gradient": "conic-gradient(from 225deg, #FF0000, #FF4D00, #FF9900, #FFD600, #FFFF00, #CCFF00, #80FF00, #33FF00, #00FF66, #00FFCC, #00FFFF, #00CCFF, #0099FF, #0066FF, #0033FF, #0000FF, #3300FF, #6600FF, #9900FF, #CC00FF, #FF00FF, #FF00CC, #FF0099, #FF0066, #FF0033)",

      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },

        ".gradient-border": {
          border: "2px liquid",
          borderRadius: "0.5rem", // Adjust border radius as needed
          "border-image":
            "linear-gradient(to right, #4c0000, #4c3300, #4c6600, #4c9900, #4ccc00)", // Darker colors
          "border-image-slice": "1",
        },

        ".border-gradient": {
          border: "2px solid transparent",
          borderRadius: "1.5rem",
          "border-image":
            "linear-gradient(to right, #FF6F61, #FFCE63, #A8D8EA, #8AAAE5, #7D84B2, #B1736A, #FF988A, #78DBE2, #FFD3B5, #FFC3A0, #5C6179, #8C758A, #596F77, #3D5A59, #5E3D50)",
          "border-image-slice": "1",
        },
        ".gradient-br": {
          border: "2px solid transparent",
          borderRadius: "1.5rem",
          "border-image":
            "linear-gradient(to right, #1E1E1E, #3E3E3E, #5E5E5E, #7E7E7E, #9E9E9E, #BEBEBE, #DEDEDE, #FFCE63, #A8D8EA, #8AAAE5)",
          "border-image-slice": "1",
        },
      });
    }),
  ],
};
