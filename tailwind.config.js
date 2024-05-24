/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#0A33D0',
          200: '#07269A',
          300: '#051965',
          400: '#020C2F'
        },
        secundary: {
          100: '#F59E0B',
        },
        graylight: '#707070',
      },
      screens: {
        '3xl': '1800px',
      },
      fontFamily: {
        'sans': ['Montserrat'],
        'body': ['Montserrat'],
        'montserrat': ['Montserrat']
      },
    },
    
  },
  plugins: [
    require('flowbite/plugin')({
        charts: true,
    }),
    // ... other plugins
  ]
}