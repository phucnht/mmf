module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#FFDE48',
        },
        secondary: {
          main: '#FC9669',
        },
        info: {
          main: '#3FB2FF',
          light: '#00CBFF',
          dark: '#0071BC',
        },
        action: {
          main: '#CECECE',
        },
        green: {
          500: '#64A030',
        },
        blue: {
          400: '#18446E',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
