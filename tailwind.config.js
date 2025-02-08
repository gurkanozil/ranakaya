/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      screens: {
        'no-scrollbar': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
      },
    },
  },
  plugins: [],
};
