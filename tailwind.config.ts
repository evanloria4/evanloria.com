/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}', './src/styles/main.css'],
  theme: {
    extend: {
      colors: {
        primary: '#7b1e1e',
        accent: '#6a5acd',
        background: '#ffffff',
        muted: '#f5f5f5',
        text: '#1e1e1e',
        lightText: '#ffffff',
      },
      borderRadius: {
        md: '0.5rem',
        lg: '1rem',
      },
    },
  },
  plugins: [],
};
