module.exports = {
  publicPath: './',
  outputDir: process.env.outputDir,
  lintOnSave: true,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8022,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    } // 错误、警告在页面弹出
    // proxy: {
    // [process.env.VUE_APP_MODE]: {
    //     target: `http://cs.ep.eichong.com:2482/api`,
    //     changeOrigin: true,
    //     pathRewrite: {//看后台是否有，决定是否重写
    //         ["^" + process.env.VUE_APP_API_URL]: ""
    //     }
    // }
  }
}
