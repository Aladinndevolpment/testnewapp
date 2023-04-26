module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
   ],
  // purge: [],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF0D00",
        secondary: "#2E66F6",
        accent: "#263238", 
        blackColor : "#263238",
        gray : "#78889B", 
      },
      backgroundImage: {
         
      },
    },
    fontFamily: {
      fontSource: ['Source Sans Pro', "sans-serif"], 
    },
    screens: {
      xs: "500",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
 
 