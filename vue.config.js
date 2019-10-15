const path = require('path');
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("_c", resolve("src/components"))
      .set("_conf", resolve("config"));
    config.output
      .chunkFilename("[name].[hash:8].chunk.js")
      .filename("[name].[hash:8].bundle.js");
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    proxy: {
      "/api": {
        target: "http://api.11vx.cn:7000",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          // 需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
          "^/api": "/"
        }
      }
    },
    disableHostCheck: true
  }
};
