export default {
  //公司结构
  'companyQueryList': {
    type: 'form',
    url: '/security/api/back/sys/organization/queryList'
  },
  //添加公司
  'addCompany': {
    type: 'form',
    url: '/security/api/back/sys/organization/addCompany'
  },
  //编辑公司
  'updateCompany': {
    type: 'form',
    url: '/security/api/back/sys/organization/updateCompany'
  },
  // 公司详情
  'queryCompanyDetail': {
    type: 'post',
    url: '/security/api/back/sys/organization/queryCompanyDetail'
  },
  // 删除公司组织接口
  'deleteCompany': {
    type: 'form',
    url: '/security/api/back/sys/organization/delete'
  },
  // 添加组织门店
  'addOrganization': {
    type: 'post',
    url: '/security/api/back/sys/organization/add'
  },
  // 编辑组织门店
  'updateOrganization': {
    type: 'post',
    url: '/security/api/back/sys/organization/update'
  },
  // 查询组织门店详情
  'organizationQueryDetail': {
    type: 'form',
    url: '/security/api/back/sys/organization/queryDetail'
  },
}
