/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {


      fontFamily: {
        custom: ['DMT', 'sans'], 
        // NationalMedium: "NationalMedium",
        DMT: "DMT",
      },

      spacing: {
        '0': '0',
        '1': '1.1vw',   
        '2': '2vw',   
        '3': '3vw',   
        '4': '12.2vw',
        '16':'34.8vw',
        '80':'80vw',  
      },




      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
