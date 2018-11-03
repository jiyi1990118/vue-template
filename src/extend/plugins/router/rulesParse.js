/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/10/30 15:55
 * Describe 序列化路由规则
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

// 路径处理工具
import PATH from '@utils/path'

// 视图资源引入
const viewImport = ruleConf => () => {
  const source = import('@app/' + ruleConf.sourcePath + '.vue');
  // 获取视图内部数据
  source.then(res => {
    res = res.default;
    // 检查页面是否定义名称，并传递给组件本身
    if (!res.name) {
      res.name = (ruleConf.name || /*ruleConf.path ||*/ ruleConf.sourcePath).replace(/\/(\w)/g, function (str, $1) {
        return $1.toUpperCase();
      })
    }
    if (!ruleConf.name) {
      ruleConf.name = res.name
    }
    return res;
  });
  return source
};

// 递归获取 视图内容
function Recursion(RouterRules, routeData, newRouterRules, rootPath) {
  rootPath = rootPath || '';
  // 用作收集路由数据
  routeData = routeData || [];
  newRouterRules = newRouterRules || [];

  // 遍历路由配置
  RouterRules.forEach(function (ruleConf) {
    //路由真实资源路径
    ruleConf.realPath = PATH.normalize(rootPath + '/' + (ruleConf.path || '')).replace(/^\/\//, '/').replace(/\/$/, '');

    let newRuleConf = Object.assign({}, ruleConf);

    let routeItemList = [];
    let routeInfo = {
      title: ruleConf.title,
      icon: ruleConf.icon || '',
      path: ruleConf.realPath,
    };

    // 收集路由信息
    routeData.push(routeInfo);

    // 关联下级路由信息
    if (Array.isArray(newRuleConf.children)) routeInfo.list = routeItemList;

    // 检查是否存在资源路径
    if (1 && typeof newRuleConf.sourcePath === 'string') {
      newRuleConf.component = viewImport(newRuleConf);

      // 初始化路由元信息
      if (typeof newRuleConf.meta === 'undefined') {
        newRuleConf.meta = {}
      }

      // 检查是否开启缓存
      newRuleConf.meta._$cache$_ = !!newRuleConf.cache/* !== false*/;
      // 通过路由配置传递页面title标题
      newRuleConf.meta._$title$_ = ruleConf.title;
      // 通过sibling标识检查是否同级兄弟路由
      if (newRuleConf.sibling) {
        Recursion(newRuleConf.children, routeItemList, newRouterRules, rootPath)
      } else
      // 检查是否拥有子路由
      if (Array.isArray(newRuleConf.children)) {
        newRuleConf.children = Recursion(newRuleConf.children, routeItemList, [], ruleConf.realPath)
      }

      // 添加到新的路由规则中
      newRouterRules.push(newRuleConf)
    } else {
      // 在路由配置节点中不存在资源，则可能是仅仅依赖路径衔接，可以继续拼接收集其子节点路由配置
      // 检查是否拥有子路由
      if (Array.isArray(newRuleConf.children)) {
        Recursion(newRuleConf.children, routeItemList, newRouterRules, ruleConf.realPath)
        //检查是否重定向
      } else if (newRuleConf.redirect) {
        newRouterRules.push(newRuleConf)
      }
    }

  });
  return newRouterRules;
}

/**
 * 序列化路由规则
 * @param RouterRules
 */
export default function (RouterRules) {
  return Recursion(RouterRules);
}
