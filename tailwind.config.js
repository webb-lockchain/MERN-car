const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/tailwind-datepicker-react/dist/**/*.js",],
  theme: {
    fontFamily: {
      'Barlow': ['Barlow', 'sans-serif'],
      'Barlow Condensed': ['Barlow Condensed', 'sans-serif']
    },
    extend: {
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      }
    },
  },
  plugins: [],
});

