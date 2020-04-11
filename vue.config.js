module.exports = {
  publicPath: './',
  outputDir: process.env.outputDir,
  lintOnSave: false,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8022,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    }, // 错误、警告在页面弹出
    proxy: {
      '/api': {
          target: 'http://192.168.0.183:8904/api',
          changeOrigin: true,
          pathRewrite: {
            "^/api":''
          }
      }
    }
  }
}
