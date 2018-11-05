/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/10/30 15:55
 * Describe 更正项目中页面的 name
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

// 主要作用让node脚本中支持 ES6 import/export语法
// npm install babel-register babel-preset-env -D
require('babel-register')({
  "plugins": [
    "transform-es2015-modules-commonjs"
  ]
})

const fs = require('fs');
const path = require('path');
// 进程包
const process = require('process');
// 路由配置
const RouterConfig=require('../../src/config/router/rules/index').default;

// 资源路径列表
let pathList = [];

/**
 * 收集资源路径函数
 * @param routeConf
 * @param pathList
 */
function collectSourcePath(routeConf, pathList) {
  routeConf.forEach(function (info) {
    info.sourcePath && pathList.push(info.sourcePath);
    if (info.children) {
      collectSourcePath(info.children, pathList)
    }
  })
}

// 进行收集路由配置中的资源路径
collectSourcePath(RouterConfig, pathList);

/**
 * 更改资源中的name
 * @param filepath
 */
function updateContent(filepath) {
  let filePath = path.normalize(process.cwd() + '/src/app/' + filepath + '.vue');

  // 检查文件是否存在
  if (!fs.existsSync(filePath)) {
    filePath = path.normalize(process.cwd() + '/src/app/' + filepath + '/index.vue');
    // 避免文件是index
    if (!fs.existsSync(filePath)) {
      return console.warn('文件不存在 : ' + filePath)
    }
  }

  // 读取文件内容
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content) {
    return console.warn('文件内容不存在: ' + filePath)
  }

  // 检查文件内部name是否存在
  if (content.match(/(export\s+default\s+\{\s+name\s*\:\s*)(["'][^'"]+['"])/)) {
    // 替换name
    content = content.replace(/(export\s+default\s+\{\s+name\s*\:\s*)(["'][^'"]+['"])/, "$1'" + filepath.replace(/\/(\w)/g, function (str, $1) {
      return $1.toUpperCase();
    }) + "'");

  } else {
    // 添加name
    content = content.replace(/(export\s+default\s+\{)(\s+)([\w]+)/, "$1\n\t\tname: '" + filepath.replace(/\/(\w)/g, function (str, $1) {
      return $1.toUpperCase();
    }) + "',\n\t\t$3");
  }

  // 写入文件
  fs.writeFileSync(filePath, content, 'utf8');
}

// 遍历修改文件内容
pathList.forEach(updateContent);

console.log('处理完毕！');
