/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pm-main': '#458bf5',
      },
    },
  },
  plugins: [],
});
