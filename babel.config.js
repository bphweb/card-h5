module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libararyDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
