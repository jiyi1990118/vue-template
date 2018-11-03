
import iconMange from './icon'
export default {
  //商城首页管理列表
  'contentManageList': {
    type: 'form',
    url: '/user/back/homepage/query/versionlist'
  },
  //商城首页管理新增
  'contentManageAdd': {
    type: 'post',
    url: '/user/back/homepage/insert/version'
  },
  //商城首页管理删除
  'contentManageRemove': {
    type: 'form',
    url: '/user/back/homepage/remove/version'
  },
  //商城首页管理编辑
  'contentManageEdit': {
    type: 'post',
    url: '/user/back/homepage/edit/version'
  },
  //商城首页管理预览
  'contentManageLook': {
    type: 'form',
    url: '/user/back/homepage/show/version'
  },
  //商城首页管理下架
  'contentManageSetDown': {
    type: 'form',
    url: '/user/back/homepage/soldout/version'
  },
  //商城首页管理克隆
  'contentManageClone': {
    type: 'form',
    url: '/user/back/homepage/clone/version'
  },
  //模块新增
  'contentManageCreateModule': {
    type: 'post',
    url: '/user/back/homepage/module/createModule'
  },
  //模块编辑
  'contentManageUpdateModule': {
    type: 'post',
    url: '/user/back/homepage/module/updateModule'
  },
  //模块查看
  'contentManageShowModule': {
    type: 'form',
    url: '/user/back/homepage/show/module'
  },
  //删除模块
  'contentManageDelModule': {
    type: 'form',
    url: '/user/back/homepage/module/deleteModule'
  },
  //下架模块
    'contentManageEndModule': {
    type: 'form',
    url: '/user/back/homepage/module/endModule'
  },


  //banner位设置列表
  'specialBannerSettingList': {
    type: 'form',
    url: '/user/back/homepage/query/bannerSetupList'
  },
  //banner位设置新增
  'specialBannerSettingAdd': {
    type: 'post',
    url: '/user/back/homepage/insert/bannerSetup'
  },
  //banner位设置编辑
  'specialBannerSettingEdit': {
    type: 'post',
    url: '/user/back/homepage/edit/bannerSetup'
  },
  //banner位设置查看
  'specialBannerSettingLook': {
    type: 'form',
    url: '/user/back/homepage/show/bannerSetup'
  },
  //banner位设置删除
  'specialBannerSettingDel': {
    type: 'form',
    url: '/user/back/homepage/remove/bannerSetup'
  },
  //banner位设置上架
  'specialBannerSettingPutaway': {
    type: 'form',
    url: '/user/back/homepage/putaway/bannerSetup'
  },
  //banner位设置下架
  'specialBannerSettingSoldout': {
    type: 'form',
    url: '/user/back/homepage/soldout/bannerSetup'
  },
  //位置移动
  'locationMove': {
    type: 'form',
    url: '/user/back/homepage/location/shift'
  },

  //special位设置列表
  'contentSpecialSettingList': {
    type: 'form',
    url: '/user/back/homepage/query/specialPlaceList'
  },
  //special位设置新增
  'contentSpecialSettingAdd': {
    type: 'post',
    url: '/user/back/homepage/insert/specialPlace'
  },
  //special位设置编辑
  'contentSpecialSettingEdit': {
    type: 'post',
    url: '/user/back/homepage/edit/specialPlace'
  },
  //special位设置查看
  'contentSpecialSettingLook': {
    type: 'form',
    url: '/user/back/homepage/show/specialPlace'
  },
  //special位设置删除
  'contentSpecialSettingDel': {
    type: 'form',
    url: '/user/back/homepage/remove/specialPlace'
  },
  //special位设置上架
  'contentSpecialSettingPutaway': {
    type: 'form',
    url: '/user/back/homepage/putaway/specialPlace'
  },
  //special位设置下架
  'contentSpecialSettingSoldout': {
    type: 'form',
    url: '/user/back/homepage/soldout/specialPlace'
  },
  //special位设置下架
  'contentSpecialSelectSpu': {
    type: 'form',
    url: '/user/back/homepage/select/spu'
  },

  //营销位设置列表
  'contentMarketingSettingList': {
    type: 'form',
    url: '/user/back/homepage/query/marketInfoList'
  },
  //营销位设置新增
  'contentMarketingSettingAdd': {
    type: 'post',
    url: '/user/back/homepage/insert/marketInfo'
  },
  //营销位设置编辑
  'contentMarketingSettingEdit': {
    type: 'post',
    url: '/user/back/homepage/edit/marketInfo'
  },
  //营销位设置查看
  'contentMarketingSettingLook': {
    type: 'form',
    url: '/user/back/homepage/show/marketInfo'
  },
  //营销位设置删除
  'contentMarketingSettingDel': {
    type: 'form',
    url: '/user/back/homepage/remove/marketInfo'
  },
  //营销位设置上架
  'contentMarketingSettingPutaway': {
    type: 'form',
    url: '/user/back/homepage/putaway/marketInfo'
  },
  //营销位设置下架
  'contentMarketingSettingSoldout': {
    type: 'form',
    url: '/user/back/homepage/soldout/marketInfo'
  },

  //主题位设置列表
  'contentMainSettingList': {
    type: 'form',
    url: '/user/back/homepage/query/themeList'
  },
  //主题位设置新增
  'contentMainSettingAdd': {
    type: 'post',
    url: '/user/back/homepage/insert/theme'
  },
  //主题位设置编辑
  'contentMainSettingEdit': {
    type: 'post',
    url: '/user/back/homepage/edit/theme'
  },
  //主题位设置查看
  'contentMainSettingLook': {
    type: 'form',
    url: '/user/back/homepage/show/theme'
  },
  //主题位设置删除
  'contentMainSettingDel': {
    type: 'form',
    url: '/user/back/homepage/remove/theme'
  },
  //主题位设置上架
  'contentMainSettingPutaway': {
    type: 'form',
    url: '/user/back/homepage/putaway/theme'
  },
  //主题位设置下架
  'contentMainSettingSoldout': {
    type: 'form',
    url: '/user/back/homepage/soldout/theme'
  },
  //跳转类型
  'contentManageLevel': {
    type: 'post',
    url: '/user/back/homepage/query/level'
  },
  //跳转类型-内部页面
  'contentManagePageInfo': {
    type: 'form',
    url: '/user/back/homepage/query/pageInfo'
  },

  ...iconMange
}
