// vue.config.js
module.exports = {
  // 选项...
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0", // 允许外部ip访问
    port: 8046, // 端口
    https: false, // 启用https
    overlay: {
      warnings: false,
      errors: false
    }, // 错误、警告在页面弹出
    proxy: {
      "/mock": {
        target: "",
        changeOrigin: true, // 允许websocket跨域
        // ws: true,
        pathRewrite: {
          "^/mock": ""
        }
      }
    } // 代理转发配置，用于调试环境
  }
};
