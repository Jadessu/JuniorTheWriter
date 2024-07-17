module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        script: ['"Style Script"', 'cursive'],
      },
      spacing: {
        '2/3': '66.666667%',
      },
      colors: {
        gradientBg: 'var(--gradient-bg)',
        dark2: '#0f0c29',
        dark3: 'var(--dark3)',
        dark4: 'var(--dark4)',
        dark5: 'var(--dark5)',
        text1: 'var(--text1)',
        text2: 'var(--text2)',
        text3: 'var(--text3)',
        accent1: 'var(--accent1)',
        accent2: 'var(--accent2)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
