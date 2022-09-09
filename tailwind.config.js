module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      dark: "#2b2b2b",
    }),
  },
  variants: {
    extend: {},
  },
  important: true,
  plugins: [require('@tailwindcss/typography')],
};
