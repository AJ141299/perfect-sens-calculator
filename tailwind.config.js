/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#0F0C1D',
        'lighter-background': '#201a38',
        'border': '#581e6d',
      },

      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
};
