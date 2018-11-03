/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/11/1 11:06
 * Describe 页面通讯操作插件
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

// 页面操作通讯
const pageAction = {
  /**
   * 类似方法监听器
   * @param pageName 页面名称
   * @param actionName 操作名称
   * @param actionFn 操作回调的方法
   */
  waitAction(pageName, actionName, actionFn) {
    let index = $store.state.cachePageList.indexOf(pageName);
    if (index !== -1) {
      // 存储页面操作信息
      $store.state.cachePageInfoList[index].pageActionStore[actionName] = {
        option: {},
        fn: actionFn
      }
    }
  },
  /**
   * 操作触发
   * @param pageName 页面名称
   * @param actionName 操作名称
   * @param option 触发的自定义参数
   */
  emitAction(pageName, actionName, option) {
    let index = $store.state.cachePageList.indexOf(pageName);

    if (index !== -1) {

      // 获取页面操作信息
      let actionInfo = $store.state.cachePageInfoList[index].pageActionStore[actionName];

      // 调用操作的回调方法
      if (actionInfo) {
        actionInfo.fn(actionInfo.option)
      }

    } else {
      console.warn(pageName + '页面中：' + actionName + '自定义操作不存在')
    }
  }
};

export default function (Vue) {
  Vue.$pageAction = pageAction;
  Vue.prototype.$pageAction = pageAction;
}

