/**
 * 路由插件封装
 */
// 缓存操作
import cacheAction from './cacheAction';
// 全局路由监听
import './routerListen';

/**
 * 页面缓存插件安装接口
 * @param Vue
 */
export default function install(Vue) {
  // 注入到vue原型和自身属性上
  Vue.$cacheAction = cacheAction;
  Vue.prototype.$cacheAction = cacheAction;
};


