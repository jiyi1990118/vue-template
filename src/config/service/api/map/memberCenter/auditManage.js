export default {
    // 获取实名认证列表
    'auditUserList': {
        type: 'form',
        url: '/user/back/users/query/listauthinfo'
      },
    'auditUser': {
        type: 'form',
        url: '/user/back/users/audit/authinfo'
      },
    //  准渠道商审核列表
    'dischannelList': {
        type: 'form',
        url: '/user/back/users/distributorinfo/auditTobeDistributorList'
      },
      'auditDischannel': {
        type: 'form',
        url: '/user/back/users/distributorinfo/auditTobeDistributor'
      },
       //  渠道商审核列表
    'channelList': {
        type: 'form',
        url: '/user/back/users/query/listdistributorinfo'
      },
     'auditChannel': {
        type: 'form',
        url: '/user/back/users/audit/distributorinfo'
      },
      'saleman': {
        type: 'form',
        url: '/user/back/users/audit/saleman'
      },
      'listSaleman': {
        type: 'form',
        url: '/user/back/users/query/listSaleman'
      },
      'listSalemanager': {
        type: 'form',
        url: '/user/back/users/query/listSalemanager'
      },
      'salemanager': {
        type: 'form',
        url: '/user/back/users/audit/salemanager'
      },
}
