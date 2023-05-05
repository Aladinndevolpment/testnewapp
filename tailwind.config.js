module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
   ],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#26388a",
        secondary: "#e95757", 
        tertiary : "#082365",
        dark : "#263648",  
        lightGray : "#0000001a",
        bgGray :"#F5F5F5",
       darkGary :"#F0F0F0",
       mainBg:"#f1f6fb",
       newBlue : "#1258fc",
       FontGray : "#8a98a2",
       darkBlack :"#070e0b"
      },
      backgroundImage: {
         
      },
    },
    fontFamily: {
      main : ['Poppins',' sans-serif'],
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
  plugins: [
    require("tailwind-scrollbar-hide"), require('@tailwindcss/line-clamp'),
    require("daisyui"),
    
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
 
};
 
 