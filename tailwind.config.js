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
          200: '#248DEE',
          300: '#0071BC',
          400: '#18446E',
        },
        neutral: {
          400: '#717171',
        },
        red: {
          100: '#722828',
        },
        rarity: {
          common: '#767676',
          rare: '#0071BC',
          epic: '#F27340',
          legendary: '#F2A840',
        },
      },
      boxShadow: {
        card: '0px 0px 12px #F27340A0',
      },
    },
  },
  variants: {},
  plugins: [],
};
