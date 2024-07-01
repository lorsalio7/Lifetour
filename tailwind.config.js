/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.html",
    "./app/**/*.js"
  ],
  darkMode: "class",
  theme: {
    screens: {
      /* Если проект с подходом Mobile-First, то раскомментировать размеры ниже: */
      /* "xxs": { "min": "320px" },
      "xs": { "min": "375px" },
      "sm": { "min": "425px" },
      "md": { "min": "768px" },
      "lg": { "min": "1024px" },
      "xl": { "min": "1280px" },
      "xxl": { "min": "1536px" }, */
      "tallxxs": { "raw": "(max-height: 320px)"},
      "tallxs": { "raw": "(max-height: 375px)"},
      "tallsm": { "raw": "(max-height: 425px)"},
      "tallmd": { "raw": "(max-height: 768px)"},
      "talllg": { "raw": "(max-height: 1024px)"},
      "tallxl": { "raw": "(max-height: 1280px)"},
      "xxl": { "max": "1536px" },
      "xl": { "max": "1280px" },
      "lg": { "max": "1024px" },
      "md": { "max": "768px" },
      "sm": { "max": "425px" },
      "xs": { "max": "375px" },
      "xxs": { "max": "320px" },
      "hover-hover": { "raw": "(hover: hover)" },
    },
    container: {
      center: false,
      padding: {
        sm: "15px",
      }
    },
    backgroundPosition: {
      "right-center": "right center",
    },
    fontFamily: {
      "sans": ["Montserrat", "sans-serif"],
    },
    colors: {
      "black": "#000",
      "black-0": "#00000000",
      "white": "#fff",
      "white-20": "#ffffff33",
      "transparent": "transparent",
      "science-blue": "#0266c1",
      "science-blue-40": "#0266c166",
      "science-blue-11": "#0266c11c",
      "black-squeeze": "#f5f9fc",
      "endeavour": "#00539e",
      "outer-space": "#2d383f",
      "outer-space-40": "#2d383f66",
      "mystic": "#d9e7ea",
      "silver-chalice": "#b0b0b0",
    },
    extend: {
      objectPosition: {
        'center-bottom': 'center bottom',
      },
      maxWidth: {
        mw: "1230px",
      },
      backgroundImage: {
        "link-arrow": "url('../img/small-right-arrow-ic.svg')",
        "tour-bg": "url('../img/tour-bg.png')",
        "tour-tablet-bg": "url('../img/tour-tablet-bg.png')",
        "small-cloud": "url('../img/small-cloud-decor.png')",
      },
      boxShadow: {
        "slides-shadow": "0 0 25px #0000000a",
      }
    },
  },
  plugins: [],
}

