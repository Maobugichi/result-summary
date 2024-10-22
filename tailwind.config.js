/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      custom: [' Hanken Grotesk', 'sans-serif']
    },
    colors: {
    lightRedAlpha: "hsla(0, 100%, 67%,0.2)",
    lightRed: "hsl(0, 100%, 67%)",
    orangeyYellow: "hsl(39, 100%, 56%)",
    orangeyYellowAlpha: "hsla(39, 100%, 56%,0.2)",
    greenTeal: "hsl(166, 100%, 37%)",
    greenTealAlpha: "hsla(166, 100%, 37%,0.2)",
    cobaltBlue: "hsl(234, 85%, 45%)",
    cobaltBlueAlpha: "hsla(234, 85%, 45%,0.2)",
    violetBlue: "hsla(256, 72%, 46%, 1)",
    persianBlue: "hsla(241, 72%, 46%, 0)",
    white: "hsl(0, 0%, 100%)",
    paleBlue: "hsl(221, 100%, 96%)",
    lightLavender: "hsl(241, 100%, 89%)",
    darkGrayBlue: "hsl(224, 30%, 27%)",
    slateBlue: "hsl(252, 100%, 67%)",
    lightRoyalBlue: "hsl(241, 81%, 54%)"
    },
    
    extend: {

    },
  },
  plugins: [],
}