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
        '12rem': '6rem',
        '6rem' : '4rem',
      },

      spacing: {
        '97': '25rem',
        '98': '26rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-scrollbar'),
  ],
}
