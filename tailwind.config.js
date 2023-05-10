/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "'montserrat', serif",
      },

      gridTemplateColumns: {
        'firstGridMainColumns': 'repeat(auto-fit, minmax(12rem, 1fr))',
        'secondGridMainColumns': '1.2fr 1.5fr',
      },

      minWidth: {
        '12rem': '7rem',
        '6rem' : '4.5rem',
      },

      spacing: {
        '97': '25rem',
        '98': '26rem',
      },

      width: {
        '36.3': '9.3rem',
        '36.2': '9.2rem',
        '1.5': '0.4rem',
        '50': '12.5rem',
      },

      colors: {
        'regal-blue': '#0049ff',
        'poop-black': 'rgb(52, 52, 52)'
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-scrollbar'),
  ],
}
