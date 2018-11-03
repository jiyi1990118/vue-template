// 缓存仓库
import cacheStore from './cacheStore'

// 对外提供的页面缓存api
export default {
  // 添加page缓存白名单
  add: info => {
    cacheStore.commit('addRouteName', info)
  },
  // 移除page缓存白名单
  remove: name => {
    cacheStore.commit('removeRouteName', name)
  },
  // 添加layout缓存白名单
  addLayout: name => {
    cacheStore.commit('addLayoutName', name)
  },
  // 移除layout缓存白名单
  removeLayout: name => {
    cacheStore.commit('removeLayoutName', name)
  },
  // 更新权限
  updateAuthority: authorityList => {
    cacheStore.commit('updateAuthority', authorityList)
  },
  // 获取权限
  getAuthority: () => {
    return cacheStore.state.authority;
  },
  // 根据页面name检查指定的页面是否存在于打开的页面中(实际就是看是否已经缓存起来了),如果存在则返回此页面的页面信息
  isOpen: viewName => {
    let index= cacheStore.state.cachePageList.indexOf(viewName);
    return index !== -1  && cacheStore.state.cachePageInfoList[index]
  }
};
