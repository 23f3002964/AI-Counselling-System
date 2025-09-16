/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pt-background': '#000000',
        'pt-foreground': '#ffffff',
        'pt-card': '#111111',
        'pt-card-foreground': '#ffffff',
        'pt-primary': '#ffffff',
        'pt-primary-foreground': '#000000',
        'pt-secondary': '#222222',
        'pt-secondary-foreground': '#ffffff',
      },
    },
  },
  plugins: [],
};
