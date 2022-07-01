/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "1rem",
      center: true,
    },
    fontFamily: {
      sans: ["Public Sans", "sans-serif"],
    },
    extend: {
      colors: {
        // primary
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",

        // neutral
        text: "hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGrayishBlue: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
