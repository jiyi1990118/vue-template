export default {
    // 获取准、渠道商列表
    'getChannelList': {
        type: 'form',
        url: '/user/back/users/distributorinfo/queryDistributorList'
      },
   // 获取准、渠道商详情
   'getChannelDetail': {
    type: 'form',
    url: '/user/back/users/distributorinfo/queryDistributorDetail'
  },
    //   渠道商的冻结和启用
  'changeChannelStatus': {
      type:'form',
      url:'/user/back/users/distributorinfo/frzzezDistributorOrNot'
  }
}
