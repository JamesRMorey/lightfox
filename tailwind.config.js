/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
            },
            fontFamily: {
                inter: ['Inter'],
                "special-eilte": ['"Special Elite"'] 
            }
        },
      },
    variants: {
      extend: {},
    },
    plugins: [],
  }
