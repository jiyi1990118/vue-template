
export default {
  //满减活动 搜索
  'getFullCutList': {
    type: 'get',
    url: '/marketing/back/activity/fullCut/querySubtractionActivities'
  },
  //满增活动 搜索
  'getFullGiftList': {
    type: 'get',
    url: '/marketing/back/activity/fullGifts/queryFullGift'
  },
//  满减活动查看
  'fullCutListLook':{
    type: 'get',
    url: '/marketing/back/activity/fullCut/queryFullCutInfo'
  },
  //满增活动查看
  'fullGiftListLook':{
    type: 'get',
    url: '/marketing/back/activity/fullGifts/queryFullGiftInfo'
  },
//  满减克隆
  'fullCutClone':{
    type:'post',
    url:'/marketing/back/activity/common/cloneActivity'
  },
  //满赠-新增/编辑
  'fullGiftAdd':{
    type:'post',
    url:'/marketing/back/activity/fullGifts/addAndUpdateFullGift'
  },
//  满减-新增/编辑
  'fullCutAdd':{
    type:'post',
    url:'/marketing/back/activity/fullCut/addAndUpdateSubtractionActivities'
  },
//  商品设置查询
  'commoditySetupQuery':{
    type:'get',
    url:"/marketing/back/activity/specialPrice/addSpecialPirce"
  },
  //净利润计算
  'netProfit':{
    type:'get',
    url:"/marketing/back/activity/common/calculationGross"
  },
  //  批量导出商品
  'batchExport':{
    type:'get',
    url:"/marketing/back/activity/common/exportSkuList"
  },
  // 满减-停用、提交按钮
  'stopActivity':{
    type:'form',
    url:"/marketing/back/activity/common/stopOrSubmitActivity"
  },
  // 查询管家服务列表
  'housekeeperList':{
    type:'get',
    url:"/marketing/back/activity/stewardService/queryStewardService"
  },
  // 管家服务处理
  'housekeeperHandle':{
    type:'form',
    url:"/marketing/back/activity/stewardService/handleStewardService"
  },
  //活动红包-新增/编辑
  'activityRedEnvelopeAdd':{
    type:'post',
    url:'/marketing/back/activity/redpacket/addAndUpdateRedPacket'
  },
 //红包活动管理 搜索
 'getActivityRedEnvelopeList': {
  type: 'get',
  url: '/marketing/back/activity/redpacket/queryRedPacket'
},
//  红包活动管理查看
'getActivityRedEnvelopeLook':{
  type: 'get',
  url: '/marketing/back/activity/redpacket/querySpecialRedPacket'
},
//  包邮活动管理-新增/编辑
'deliveryFeeAdd':{
  type:'post', 
  url:'/marketing/back/activity/Postalactivities/addAndUpdatePostalactivities'
},
 //包邮活动管理 搜索
 'getDeliveryFeeList': {
  type: 'get',
  url: '/marketing/back/activity/Postalactivities/queryPostalactivities'
},
//包邮活动查看
'deliveryFeeLook':{
  type: 'get',
  // url: '/marketing/back/activity/Postalactivities/queryHaggleInfo'
  url: '/marketing/back/activity/Postalactivities/queryPostalactivity'
},
 // 删除包邮活动
'deleteDeliveryActivity':{
  type:'form',
  url:"/marketing/back/activity/Postalactivities/deletePostalactivity"
},
// //  满减克隆
// 'fullCutClone':{
//   type:'post',
//   url:'/marketing/back/activity/common/cloneActivity'
// },

}
