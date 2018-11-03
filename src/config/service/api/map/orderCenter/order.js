export default {
    'getOrderList': {
      type: 'post',
      url: '/order/orders/admin/orderinfoByConditions'
    },
    'getOrderFinancial': {//导出财务订单列表
        type: 'get',
        dataType:'response',
        url: '/order/orders/orderFinancialList',
        timeout:'300000'
    },
    // 'getOrderDetails': {//订单详情
    //     type: 'post',
    //     url: '/order/orders/getOrderDetail?orderNo={orderNo}'
    // },
    'getOrderDetails': {//订单详情
        type: 'get',
        url: '/order/orders/orderDetails'
    },
    'getRejectOrderList': {//获取待推单列表
        type: 'get',
        url: '/order/orders/admin/orderinfoByNotes'
    },
    'getPushOrderDetails': {//待推送订单详情
        type: 'get',
        url: '/order/orders/SigleOrderInfoOfPush'
    },
    'getCancelReason': {//获取取消订单原因
        type: 'get',
        url: '/order/orders/getReason'
    },
    'editOrderAddress': {
        type: 'post',
        url: '/order/orders/admin/editOrderReceivAddr'
    },
    'getTrajectoryLog': {//物流轨迹
        type: 'get',
        url: '/order/logistics/trance/queryByLogisticsNo'
    },
    'getCancelPushList': {//获待拦截列表
        type: 'get',
        url: '/order/orders/admin/queryCancelPushOrder'
    },
    'cancelPush': {//拦截订单
        type: 'get',
        url: '/order/orders/cancelPushOrder'
    },
    'pushOrder': {//推送订单
        type: 'post',
        url: '/order/orders/pushOrder?orderNo={id}'
    },
    'apartOrder': {//拆单
        type: 'post',
        url: '/order/orders/admin/customerSpilt'
    },
  'saveaApartOrder': {//拆单保存
    type: 'post',
    url: '/order/orders/admin/saveCustomerSpilt'
  },
    'resetOrder': {//改派
        type: 'post',
        url: '/order/orders/Reassignment'
    },
    'getAddressDetail': {//获取订单收货地址
        type: 'get',
        url: 'user/users/address/getUserConsignById/{id}'
    },
    'getSkuWarehouseList': {//获取仓库列表
        type:'get',
        url:'/inventory/inventory/stockBySkuId'
    },
    // 订单详情的佣金
    'getCommission': {
        type:'get',
        url:'user/back/users/distributorinfo/queryBrokerageByOrderId/{id}'
    },
    // 售后单佣金/orders/afterSalesAdmin/getServiceBrokerageMessage
    'getAfterCommission': {
        type:'form',
        url:'order/orders/afterSalesAdmin/getServiceBrokerageMessage'
    },

}
