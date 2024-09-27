/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily:{
        'Montserrat':'Montserrat, sans-serif'
      },
      colors:{
        'darkred':'#A4311D',
        'lightblack':'#3D3D3D',
        'lightorange':'#FAF1E6',
        'headerBorder':'#C8C8C8',
        'blurSubtitle':'rgba(54, 54, 54, 0.60)'
      },
      fontSize:{
        '13':'13px',
        '14':'14px',
        '40':'40px',
        '30':'30px',
      },
      screens:{
        '1350':'1350px',
        '1150':'1150px',
      },
      lineHeight:{
        '26':'26px'
      },
      boxShadow:{
        'mainShadow':'4px 2px 16.6px 0px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}