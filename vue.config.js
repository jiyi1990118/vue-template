/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/9/10 10:30
 * Describe javascript功能
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */
'use strict'
const path = require('path');

// 开发环境web服务配置
const devServer = require(resolve('build/config/devServer'));

// 项目 路由规则配置
const rulesConfig = require('./src/extend/plugins/router/config.json');

// 需要输出的配置
const exportConfig = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? rulesConfig.mode === 'history' ? rulesConfig.historyBase || rulesConfig.base || '/' : rulesConfig.base || './'
    : '/',
  // webpack 链式配置
  chainWebpack: config => {
    // 路径别名定义
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@config', resolve('src/config'))
      .set('@extend', resolve('src/extend'))
      .set('@components', resolve('src/extend/components'))
      .set('@directive', resolve('src/extend/directive'))
      .set('@filters', resolve('src/extend/filters'))
      .set('@plugins', resolve('src/extend/plugins'))
      .set('@utils', resolve('src/utils'))
      .set('@assets', resolve('src/assets'))
      .set('@img', resolve('src/assets/img'))
      .set('@app', resolve('src/app'))
      .set('@comm', resolve('src/comm'));
    
  },
  
}

// 路径解析
function resolve(dir) {
  return path.join(__dirname, dir)
}

// 检查是否生成环境
if (process.env.NODE_ENV === 'production') {

}

// 检查是否开发环境
if (process.env.NODE_ENV === 'development') {
  
  Object.assign(exportConfig, {
    // 添加deveServe
    devServer: devServer,
    configureWebpack: config => {
      config.devtool = 'source-map'
    }
  })
  
}


module.exports = exportConfig;
