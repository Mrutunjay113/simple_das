/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xm': { 'min': '360px' },
        'sm': { 'min': '640px' },
        'md': { 'min': '768px' },
        'lg': { 'min': '1024px' },
        'xl': { 'min': '1280px' },
        '2xl': { 'min': '1536px' }
      }
},
  },
  plugins: [],
};
