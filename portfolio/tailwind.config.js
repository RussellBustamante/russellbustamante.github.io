// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#005f73',
        'light-blue': '#71c9ce',
        'category-blue': '#023e8a',
        'footer-bg': '#023047',
        'hover-blue': '#3B82F6', // A nice hover blue
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      boxShadow: {
        'category': '0 2px 5px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
