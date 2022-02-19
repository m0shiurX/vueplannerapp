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
      colors: {
        'dark-blue': 'hsl(235, 21%, 11%)',
        'dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'light-grayish-blue': 'hsl(234, 39%, 85%)',
        'light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
        'dark-grayish-blue': 'hsl(234, 11%, 52%)',
        'very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
        // - Very Dark Grayish Blue: hsl(237, 14%, 26%)
      },
    },
  },
  plugins: [],
};
