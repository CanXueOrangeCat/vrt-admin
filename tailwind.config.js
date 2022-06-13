// https://www.npmjs.com/package/twin.semi
const { twinSemiPreset } = require('twin.semi');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [twinSemiPreset()],
};
