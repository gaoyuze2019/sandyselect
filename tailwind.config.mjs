/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1a6237',
          accent: '#f5a623',
          background: '#fbfaf7',
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
