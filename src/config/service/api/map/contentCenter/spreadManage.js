export default {
  //海报管理列表
  'spreadManageList': {
    type: 'form',
    url: '/user/back/content/query/posterInfoList'
  },
  //新增海报
  'spreadManageAdd': {
    type: 'post',
    url: '/user/back/content/insert/posterInfo'
  },
  //编辑海报
  'spreadManageEdit': {
    type: 'post',
    url: '/user/back/content/editor/posterInfo'
  },
  //删除海报
  'spreadManageRemove': {
    type: 'form',
    url: '/user/back/content/remove/posterInfo'
  },
  //下架海报
  'spreadManageSoldout': {
    type: 'form',
    url: '/user/back/content/soldout/posterInfo'
  },
  //预览海报
  'spreadManageInfo': {
    type: 'form',
    url: '/user/back/content/select/posterInfo'
  },

}
