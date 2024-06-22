/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'pokeball': "url('/images/background-img.jpg')"
      },
      screens: {
        'xs': '495px',
      }
    },
  },
  variants: {
    extend: {
      scrollbar: ['rounded'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.main-before': {
          content: '""',
          'background-color': 'rgba(255, 255, 255, 0.7)',
          'z-index': 1,
        },
      }, ['before']);
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          '&::-webkit-scrollbar': {
            width: '0.7rem',
            height: '0.7rem',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#5e5e5e',
            borderRadius: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#aeaeae',
          },
        },
        '.scrollbar-rounded': {
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
          },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
