module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/img/bg-desktop-dark.jpg')",
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '540px',
          md: '540px',
          lg: '540px',
          xl: '540px',
          '2xl': '540px',
        },
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
