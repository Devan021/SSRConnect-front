import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{jsx,tsx}', './pages/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#003E87',
        primaryTextColor: '#F9FAFB',
        secondary: '#1F91CF',
        secondaryTextColor: '#F9FAFB',
        background: '#F9FAFB',
        color: '#081c34',
        warning: '#EAB308',
        danger: '#EF4444',
        success: '#019E4B',
      },
    },
  },
  plugins: [],
};

export default config;