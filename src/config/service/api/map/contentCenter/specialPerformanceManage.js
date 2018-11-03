export default {
  //专场列表
  'specialManageList': {
    type: 'form',
    url: '/user/back/homepage/specail/list'
  },
  //新建楼层专场接口
  'specialManageAdd': {
    type: 'post',
    url: '/user/back/content/specail/createSpecail'
  },
  //查看楼层专场接口
  'specialManageLook': {
    type: 'form',
    url: '/user/back/content/specail/selectSpecail'
  },
  //修改楼层专场接口
  'specialManageEdit': {
    type: 'post',
    url: '/user/back/content/specail/updateSpecail'
  },
  //专场下架
  'specialManageSetDown': {
    type: 'form',
    url: '/user/back/content/specail/specialSetup'
  },
  //专场删除
  'specialManageDelect': {
    type: 'form',
    url: '/user/back/content/specail/deleteSpecial'
  },


}
