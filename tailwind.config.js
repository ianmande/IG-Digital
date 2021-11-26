module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: {
        DEFAULT: '#181818',
        light: '#31323B',
        lighter: '#181818',
      },
      pink: {
        DEFAULT: '#FC0B7B',
      },
      white: {
        DEFAULT: '#FFF',
      },
    },
    fontFamily: {
      lato: ['Lato'],
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
