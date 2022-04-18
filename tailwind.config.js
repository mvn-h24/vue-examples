module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100%  100%',
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
      backgroundPosition: ['hover'],
    },
  },
  plugins: [],
}
