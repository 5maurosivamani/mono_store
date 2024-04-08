/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins-thin': ['Poppins-Thin', 'sans-serif'],
        'poppins-thinitalic': ['Poppins-ThinItalic', 'sans-serif'],
        'poppins-light': ['Poppins-Light', 'sans-serif'],
        'poppins-lightitalic': ['Poppins-LightItalic', 'sans-serif'],
        'poppins-regular': ['Poppins-Regular', 'sans-serif'],
        'poppins-italic': ['Poppins-Italic', 'sans-serif'],
        'poppins-medium': ['Poppins-Medium', 'sans-serif'],
        'poppins-mediumitalic': ['Poppins-MediumItalic', 'sans-serif'],
        'poppins-semibold': ['Poppins-SemiBold', 'sans-serif'],
        'poppins-semibolditalic': ['Poppins-SemiBoldItalic', 'sans-serif'],
        'poppins-bold': ['Poppins-Bold', 'sans-serif'],
        'poppins-bolditalic': ['Poppins-BoldItalic', 'sans-serif'],
        'poppins-extrabold': ['Poppins-ExtraBold', 'sans-serif'],
        'poppins-extrabolditalic': ['Poppins-ExtraBoldItalic', 'sans-serif'],
        'poppins-black': ['Poppins-Black', 'sans-serif'],
        'poppins-blackitalic': ['Poppins-BlackItalic', 'sans-serif'],
      },
      colors: {
        primary: '#FCD240',
      },
    },
  },
  plugins: [],
};
