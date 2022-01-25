module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Nunito']
    },
    fontSize: {
      '2xs': ['1rem', '1.4rem'],
      xs: ['1.2rem', '1.6rem'],
      sm: ['1.4rem', '1.8rem'],
      md: ['1.6rem', '2rem'],
      lg: ['1.8rem', '2.4rem'],
      xl: ['2rem', '2.8rem'],
      '2xl': ['2.4rem', '3.2rem'],
      '3xl': ['2.8rem', '3.6rem'],
      '4xl': ['3.2rem', '4rem'],
      btn: ['1.6rem', '3.2rem']
    },
    extend: {
      colors: {
        'blue-100': '#5DA8EC',
        'blue-200': '#248DEE',
        'blue-300': '#0071BC',
        'blue-400': '#18446E',
        'blue-500': '#0B2F51',
        'blue-content': 'white',

        'red-100': '#722828',
        'red-200': '#991411',
        'red-a100': '#FF4A4A',
        'red-a200': '#FF1A1A',
        'red-content': 'white',

        pink: '#E02861',
        'pink-content': 'white',

        'green-100': '#A4D64B',
        'green-200': '#65A037',
        'green-300': '#43850F',
        'green-400': '#28A55F',
        'green-500': '#0A7B7E',
        'green-a100': '#28E0A7',
        'green-content': 'white',

        'yellow-100': '#FFD600',
        'yellow-200': '#F5CB5D',
        'yellow-300': '#F2A840',
        'yellow-content': 'white',

        'grow-100': '#A75F37',
        'grow-content': 'white',

        gray: '#a8a8a8',
        'gray-content': 'white'
      },
      backgroundImage: {
        'yellow-gradient': 'linear-gradient(180deg, #F5CB5D 0%, #F2A840 100%)'
      },
      backgroundSize: { '100%': '100%' }
    }
  },
  plugins: []
};
