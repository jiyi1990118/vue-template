export default {
  // 角色列表分页
  'roleList': {
    type: 'form',
    url: '/security/api/back/sys/role/list'
  },
  // 角色列表
  'roleSelectList': {
    type: 'post',
    url: '/security/api/back/sys/role/select'
  },
  // 角色信息
  'roleInfo': {
    type: 'form',
    url: '/security/api/back/sys/role/info'
  },
  // 角色是否存在接口
  'roleCheck': {
    type: 'post',
    url: '/security/api/back/sys/role/check'
  },
  // 添加角色
  'addRoleSave': {
    type: 'post',
    url: '/security/api/back/sys/role/save'
  },
  // 编辑角色
  'updateRoleSave': {
    type: 'post',
    url: '/security/api/back/sys/role/update'
  },
  // 删除角色
  'deleteRoleSave': {
    type: 'form',
    url: '/security/api/back/sys/role/delete'
  },
  // menuList
  'menuList': {
    type: 'post',
    url: '/security/api/back/sys/menu/nav'
  },
}
