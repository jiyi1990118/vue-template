export default {
  // 供应商账号列表
  'supplierUserList': {
    type: 'get',
    url: '/security/api/back/sys/supplierUser/querySupplierByPage'
  },
  // 供应商账号详情
  'supplierUserInfo': {
    type: 'get',
    url: '/security/api/back/sys/supplierUser/queryDetail'
  },
  // 供应商账户名校验是否存在
  'supplierUserRoleNameCheck': {
    type: 'post',
    url: '/back/sys/supplierUser/roleNameCheck'
  },
  // 供应商账户校验手机号是否存在
  'supplierUserMobileCheck': {
    type: 'post',
    url: '/back/sys/supplierUser/mobileCheck'
  },
  // 供应商账户校验邮箱是否存在
  'supplierUserEmailCheck': {
    type: 'post',
    url: '/back/sys/supplierUser/emailCheck'
  },
  // 供应商账号添加
  'addSupplierUser': {
    type: 'post',
    url: '/security/api/back/sys/supplierUser/add'
  },
  // 供应商编辑
  'updateSupplierUser': {
    type: 'patch',
    url: '/inventory/suppliers/admin/update'
  },
  // 供应商删除
  'deleteSupplierUser': {
    type: 'delete',
    url: '/inventory/suppliers/admin/{id}'
  },
  // 供应商列表分页
  'SupplierList': {
    type: 'post',
    url: '/back/sys/supplier/list'
  },
  // 供应商详情
  'SupplierInfo': {
    type: 'post',
    url: '/back/sys/supplier/info'
  },
  // 供应商添加
  'addSupplier': {
    type: 'post',
    url: '/inventory/suppliers/admin/add'
  },
  // 供应商账号编辑
  'updateSupplier': {
    type: 'post',
    url: '/security/api/back/sys/supplierUser/update'
  },
  // 供应商账号删除
  'deleteSupplier': {
    type: 'form',
    url: '/security/api/back/sys/supplierUser/delete'
  },
  // 重置密码借口
  'resetPasswords': {
    type: 'form',
    url: '/security/api/back/sys/member/resetPassword'
  },
}
