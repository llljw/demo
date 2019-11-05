module.exports = {
  lintOnSave: false,

  devServer: {
    proxy: {
      '/portal': {
        target: 'http://122.51.57.101:8081', // 后端服务器域名
        // target: 'http://localhost:8081', // 后端服务器域名
        ws: true, // 是否代理websockets
        changeOrigin: true, // 设置同源 默认false，是否需要改变原始主机头为目标UR
      },
    },
    disableHostCheck: true,
  }
};
