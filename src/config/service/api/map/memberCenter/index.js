//会员管理
import memberManage from './memberManage';
// 审核实名
import auditManage from './auditManage'
// 渠道商管理
import channelManage from './channelManage'
// 代理商管理
import agentManage from './agentManage'

export default {
  ...memberManage,
  ...auditManage,
  ...channelManage,
  ...agentManage
}
