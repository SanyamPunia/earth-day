module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': "Poppins"
    },
    backgroundImage: {
      'desertification': "url('../public/desertification-2.png')",
      'globalWarming': "url('../public/global-warming.jpg')",
      'oceanAcidification': "url('../public/oceanacidification.png')",
      'deforestation': "url('../public/deforestation.png')",
      'overpopulation': "url('../public/overpopulation.jpg')",
      'plasticPollution': "url('../public/plasticpollution.png')",
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}