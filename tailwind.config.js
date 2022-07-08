/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#0F0C1D',
        'lighter-background': '#201a38',
      },

      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
};
