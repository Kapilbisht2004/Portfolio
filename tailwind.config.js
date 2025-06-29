export default {
  darkMode: 'class', // ✅ Enable dark mode using class (not media query)
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // ✅ Ensures Tailwind scans all React files
  ],
  theme: {
    extend: {}, // ✅ You can extend colors/fonts later here
  },
  plugins: [], // ✅ Optional plugins can be added (forms, typography, etc.)
};
