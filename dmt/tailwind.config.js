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
        DMT: "DMT",

        custom: ['Icono', 'sans'],
        Icono:"Icono",
      },

      lineHeight: {
        '1': '86%',
      },

      spacing: {
        '0': '0',
        '1': '1.1vw',
        '2': '2vw',
        '2.5': "10vh",
        '3': '2.8vw',
        '4': '10vw',
        '5': '12.2vw',
        '6': '27.9vw',
        '16': '34.8vw',
        '17':'73.9vh',
        '80': '80vw',
      },

      fontSize: {
        xs: '0.70rem',
      },
    },
  },
  plugins: [],
};
