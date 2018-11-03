export default{
    //补偿单列表分页搜索
    'compensationlist': {
        url: '/order/orders/compensationOrder/admin/list'

    },
    // 补偿单详情
    'compensationlistDetail':{
        url: '/order/orders/compensationOrder/admin/details'
    },

    // 编辑补偿单
    'compensationlistUpdate' :{
        type: 'patch',
        url: '/order/orders/compensationOrder/admin/update'
    },
  // 编辑红包补偿单
  'compensationlistUpdateRed' :{
    type: 'patch',
    url: '/order/orders/compensationOrder/admin/update/redpack'
  },

    // 新增补偿单
    'compensationlistAdd' :{
        type: 'POST',
        url: '/order/orders/compensationOrder/admin/create'
    },
  
  // 新增红包补偿单
  'compensationlistAddRed' :{
    type: 'POST',
    url: '/order/orders/compensationOrder/admin/append/redpacket'
  },
  
    // 提交补偿单

    'compensationlistSubmit' :{
        type: 'PATCH',
        url: '/order/orders/compensationOrder/admin/submit'
    },

    // 审核补偿单
    'compensationlistAudits' :{
        type: 'PATCH',
        url: '/order/orders/compensationOrder/admin/auditor'
    },
    // 获取售后单ID和售后单号
    'getServiceIdAndNo' :{
        type: 'get',
        url: '/order/orders/afterSalesAdmin/getServiceListByOrderNo'
    }
}
