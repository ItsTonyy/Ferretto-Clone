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
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}
