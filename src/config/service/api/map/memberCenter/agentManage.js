export default {
  //代理商管理列表
  'agentManageList': {
    type: 'form',
    url: '/user/back/users/distributorinfo/agentInfoS'
  },
  //代理商管理启用停用
  'agentManageListOnOff': {
    type: 'form',
    url: '/user/back/users/distributorinfo/agentBlockOrStart'
  },
  //代理商管理详情页
  'agentManageDetails': {
    type: 'form',
    url: '/user/back/users/distributorinfo/queryAgentById'
  },
  //开户行
  'agentManageBankList': {
    type: 'get',
    url: '/user/front/users/bank/bankList'
  },
  //创建代理商
  'agentManageAdd': {
    type: 'post',
    url: '/user/back/users/distributorinfo/agentInfo'
  },
  //编辑代理商
  'agentManageEdit': {
    type: 'post',
    url: '/user/back/users/distributorinfo/updateAgentInfo'
  },
  //添加代理区域
  'agentManageAddArea': {
    type: 'post',
    url: '/user/back/users/distributorinfo/addAgentArea'
  },

}
