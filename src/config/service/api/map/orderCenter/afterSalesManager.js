export default {
  //售后单列表
  'getAfterSaleList': {
      type: 'get',
      url: '/order/orders/afterSalesAdmin/orderListofUsersAfterSale'
  },
  //售后单详情
  'afterSaleDetails': {
      type: 'get',
      url: '/order/orders/afterSalesAdmin/queryAfterSalesDetail'
  },
  //质检详情
  'queryServiceDetail': {
    type: 'get',
    url: '/order/orders/supplier/queryServiceDetail'
  },
  //创建售后单
  'createAfterSale':{
    type: "post",
    url:"/order/orders/afterSalesAdmin/creatAfterSale"
  },
    //客服审核
    'serviceAudit':{
        type: "post",
        url:'/order/orders/afterSalesAdmin/cs/audit'
    },
  //客服经理审核
    'managerAudit':{
      type:"form",
      url:'/order/orders/afterSalesAdmin/csm/audit'
    },

    ///财务审核
    'financeAudit':{
      type:"form",
      url:"/order/orders/afterSalesAdmin/finance/audit"
    },

    //仓库质检列表
    'warehouseCheck':{
      type:'get',
      url:'/order/orders/afterSalesAdmin/afterSaleListOfWarehouseAudit'
    },

    //仓库质检
    'updateServiceSkuQuality':{
        type:"form",
        url:'/order/orders/afterSalesAdmin/updateServiceSkuQuality'
    },

  //待发货申请退款
  'refundNotSend':{
    type:"form",
    url:"/order/orders/afterSalesAdmin/refundNotSend"
},
//获取退款原因
    'retrunMoneyReason':{
        type:"form",
        url:"/order/orders/afterSalesApp/retrunMoneyReason"
    },

  //创建售后单
  'createAfter':{
      type:"post",
      url:"/order/orders/afterSalesAdmin/creatAfterSale"
  },

  // 财务审核弹窗
  'financeDialog':{
    type:"form",
    url:"/order/orders/afterSalesAdmin/searchIsOldService"
}


}
