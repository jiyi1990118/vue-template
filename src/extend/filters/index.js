// 应用过滤器
import appFilters from './app';

export default function (Vue) {
  // 注入
  appFilters.forEach(function (item) {
    Vue.filter(item.name,item.fn)
  })
}
