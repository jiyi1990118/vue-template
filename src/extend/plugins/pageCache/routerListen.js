/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/11/1 11:39
 * Describe 路由监听
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

// 路由实例
import Router from '@plugins/router';
// 页面缓存接口
import cacheAction from './cacheAction'

// 使用 router.beforeEach 注册一个全局前置守卫
Router.beforeEach((to, from, next) => {
  // 是否需要延时
  let isDelayed = false;
  // 获取权限列表
  let authorityList = cacheAction.getAuthority();
  // 目标页面路径
  let targetPath = to.matched[to.matched.length - 1].path;

  // 校验是否有权限访问目标页面，否则跳转到无权限访问页面
  if (false && to.meta._$title$_ !== undefined && authorityList.indexOf(targetPath) === -1) {
    return next({path: '/401'});
  }

  // 检查上一个页面 是否关闭缓存了（默认是开启）如未开启则从动态缓存名单中移除
  if (from.meta._$cache$_ !== undefined && !from.meta._$cache$_) {

    // 获取当前视图内部组件名称
    let viewName = to.name;
    // 获取路由视图名称
    if (!viewName) {
      viewName = to.matched[to.matched.length - 1].components.default.name
    }

    // 检查目标页面是否存在缓存，并返回页面信息
    let pageInfo = cacheAction.isOpen(viewName);

    // 检查之前是否打开过同样Name的页面
    if (pageInfo) {
      // 检查两次页面是否完全一样的路径与参数
      if (to.fullPath !== pageInfo.fullPath) {
        isDelayed = true;
        cacheAction.remove(viewName);
      }
    }
  }
  // 进行管道中的下一个钩子
  if (isDelayed) {
    requestAnimationFrame(() => requestAnimationFrame(() => next()))
  } else {
    next();
  }

  document.title = to.meta._$title$_ || '乐富购运营支撑系统';
  // 元素滚动条归位
  // document.querySelector('.content-body') && (document.querySelector('.content-body').scrollLeft = 0);
});

// 全局后置钩子
Router.afterEach((to, from) => {
  // 当前路由层级长度
  const len = to.matched.length - 1;

  // 下列路径忽略填入tab菜单中
  const ignoreCachePaths = [
    "/login",
    "/404",
    "/401"
  ];

  // 获取此页面（本次打开的）的所有上级页面路由信息 （主要分来存储layout和本次页面的缓存）
  to.matched.forEach(function (val, index) {
    // 获取当前视图名称
    let viewName = val.name;

    // 检查是否最新的页面资源（用于区分 上级页面【布局】，本页面分别进行缓存存储处理）
    if (index === len) {
      // 获取页面组件的name
      if (!viewName) {
        viewName = val.components.default.name
      }

      // 添加缓存白名单
      ignoreCachePaths.indexOf(to.fullPath) === -1 && cacheAction.add({
        name: viewName,
        title: to.meta._$title$_,
        fullPath: to.fullPath,
        params: to.params,
        query: to.query
      })

    } else {
      // 获取layout视图名称
      if (!viewName) {
        viewName = val.components.default.name
      }
      // 添加layout缓存白名单
      cacheAction.addLayout(viewName)
    }
  })
});

