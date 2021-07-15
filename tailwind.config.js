module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xl: '1200px',
      },
      fontFamily: {
        agaramondPro: ['AGaramondPro'],
        calibri: ['Calibri'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
