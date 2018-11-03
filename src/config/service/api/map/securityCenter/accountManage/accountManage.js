export default {
  // 账号列表
  'accountQueryList': {
    type: 'form',
    url: '/security/api/back/sys/member/queryList'
  },
  // 新增账户接口
  'addAccount': {
    type: 'post',
    url: '/security/api/back/sys/member/add'
  },
  // 编辑账户接口
  'updateAccount': {
    type: 'post',
    url: '/security/api/back/sys/member/update'
  },
  // 删除账户接口
  'deleteAccount': {
    type: 'form',
    url: '/security/api/back/sys/member/delete'
  },
  // 账户详情接口
  'accountDetail': {
    type: 'form',
    url: '/security/api/back/sys/member/queryDetail'
  },
  // 重置密码
  'accountResetPassword': {
    type: 'post',
    url: '/security/api/back/sys/member/resetPassword'
  },
  //角色列表接口
  'roleListAll': {
    type: 'post',
    url: '/security/api/back/sys/role/select'
  },
  //拉取组织结构列表
  'backOrganizationList': {
    type: 'form',
    url: '/security/api/back/sys/organization/queryParentList'
  },
  //权限
  'menuIdAllList': {
    type: 'form',
    url: '/security/api/back/sys/member/queryAllMenu'
  }
}
