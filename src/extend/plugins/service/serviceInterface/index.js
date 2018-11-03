// 数据服务类
import ServiceClass from './serviceClass'
// 服务注册
import serverRegister from './serviceRegister'
// 服务需要注册的实现方法（可以理解驱动对接）
import registerDrive from '../registerDrive'

/**
 * service服务提供
 * @param serviceConf
 * @returns {Function}
 */
export default serviceConf => {
  // 服务注册安装
  registerDrive.install(serverRegister, serviceConf);
  return (option, ruleType) => new ServiceClass(serviceConf, option, ruleType)
}
