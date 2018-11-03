// service 库
import serviceInterface from './serviceInterface'
// service 配置
import serviceConf from '@config/service'

/**
 * 数据服务器插件
 * @param Vue
 * @param  serviceConf
 */
export default function (Vue) {
  // service 插件初始化
  let serviceInstance= serviceInterface(serviceConf);
  // 添加service全局方法
  Vue.$service = serviceInstance;
  // 添加service实例方法
  Vue.prototype.$service = serviceInstance;
}
