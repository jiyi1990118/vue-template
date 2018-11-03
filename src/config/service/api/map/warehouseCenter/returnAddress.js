// inventory

export default {
  // 新增退换货地址
    'addReturnAddress':{
      type:'post',
      url:'/inventory/returnAddress/admin'
    },
     // 查看退换货地址详情
     'returnAddressDetail':{
      type:'get',
      url:'/inventory/returnAddress/admin/{id}'
    },
    // 编辑退换货地址
    'editReturnAddress':{
      type:'patch',
      url:'/inventory/returnAddress/admin'
    },
    // 退换货地址列表
    'returnAddressList':{
      url:'/inventory/returnAddress/admin/list'
    },
    // 退换货地址使用/停用
    'changeAdddressStatus':{
      type: 'patch',
      url:'/inventory/returnAddress/admin/status?id={id}&flag={toStatus}'
    },
    // 删除地址
    'deletedAdddressStatus':{
      type: 'delete',
      url:'/inventory/returnAddress/admin/{id}'
    }
  }
  
