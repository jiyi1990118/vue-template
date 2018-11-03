// 专场管理
import specialPerformanceManage from './specialPerformanceManage'
// 推广管理
import spreadManage from './spreadManage'
// 商城内容管理
import contentManage from './contentManage'

export default {
  ...specialPerformanceManage,
  ...spreadManage,
  ...contentManage
}
