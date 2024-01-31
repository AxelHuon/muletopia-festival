/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.js', './src/app/*.js'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        text_black: '#1E1E1E',
        text_price: '#636363',
      },

      fontFamily: {
        tanker: 'Tanker',
      },

      backgroundImage: {
        home: 'url(../../public/images/home/bg-home.png)',
        home_2: 'url(../../public/images/home/bg-home-2.png)',
      },
    },
  },
  plugins: [],
};
