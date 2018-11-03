/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/11/3 6:19 PM
 * Describe javascript功能描述
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

module.exports ={
  clientLogLevel: 'warning',
  historyApiFallback: true,
  hot: true,
  // 是否启用资源压缩
  compress: true,
  // host: 'localhost',
  // port: '8080',
  // 是否自动打开浏览器
  // open: false,
  // overlay: false ? {warnings: false, errors: true} : false,
  // 公开的路径目录
  // publicPath: '/',
  // 接口代理配置
  proxy: require('./proxy'),
  quiet: true, // necessary for FriendlyErrorsPlugin
  watchOptions: {
    poll: true,
  }
}
