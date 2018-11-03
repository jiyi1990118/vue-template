export default {
  // 协议列表
  'agreementList': {
    type: 'form',
    url: '/security/api/back/sys/agreement/list'
  },
  // 协议详情
  'agreementInfo': {
    type: 'form',
    url: '/security/api/back/sys/agreement/info'
  },
  // 新增协议
  'addAgreement': {
    type: 'post',
    url: '/security/api/back/sys/agreement/add'
  },
  // 编辑协议
  'updateAgreement': {
    type: 'post',
    url: '/security/api/back/sys/agreement/update'
  },
  // 删除协议
  'deleteAgreement': {
    type: 'form',
    url: '/security/api/back/sys/agreement/delete'
  },
  //协议类型
  'queryAgreementType':{
    type:'post',
    url:'/security/api/back/sys/agreement/queryAgreementType'
  },
  //协议占位符
  'queryAgreementPlaceholder':{
    type:'post',
    url:'/security/api/back/sys/agreement/queryAgreementPlaceholder'
  }
}
