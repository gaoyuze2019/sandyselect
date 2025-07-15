import type { Config } from 'tailwindcss';

const config: Config = {
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

export default config;
