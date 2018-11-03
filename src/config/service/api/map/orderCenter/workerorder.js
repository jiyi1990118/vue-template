export default {
    'getWorkOrderList': {//查询工单记录列表
        type: 'get',
        url: '/order/orders/customerService/queryCusServiceRecord'
    },
    'addWorkOrder': {//增
        type: 'post',
        url: '/order/orders/customerService/saveCusServiceRecord'
    },
    'editWorkOrder': {//编辑
        type: 'post',
        url: '/order/orders/customerService/editCusServiceRecord'
    },
    'delWorkOrder': {//删?customerServiceRecordId={id}
        type: 'put',
        url: '/order/orders/customerService/delCusServiceRecord?customerServiceRecordId={id}',
    },
     
}