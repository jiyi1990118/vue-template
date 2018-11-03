export default {
  //获取仓库列表详情
  'getWarehouseList': {
    type: 'get',
    url: '/inventory/warehouse/admin/list'
  },
  //改变状态
  'changeStatus': {
    type: 'patch',
    url: '/inventory/warehouse/admin/status'
  },
  // 获取详情
  'getWarehouseDetail': {
    type: 'get',
    url: '/inventory/warehouse/admin/{id}'
  },
  //编辑仓库
  'editWarehouse':{
    type:'patch',
    url:'/inventory/warehouse/admin'
  },
  //编辑虚拟仓库数
  'editVusulWarehouse':{
    type:'post',
    url:'/inventory/inventory/admin/updateVirtual'
  },
  
  // 锁定库存
  'closeVusulWarehouse':{
    type:'post',
    url:'/inventory/inventory/admin/changeMarketingStock'
  },
  //查看所有可用仓库
  'lookAllWarehouse':{
    url:'/inventory/warehouse/admin/all'
  },

  // 修改仓库优先级
  'changeWareUp' : {
    type: 'POST',
    url : '/inventory/inventory/admin/changeSkuShort?{data}'
  },

  // 查看运费模板
  'getInventoryByOrder' :{
    url : '/inventory/frightTemplate/admin/listBywarehouseId'
  },
  // 新增配货仓
  'addInventoryByOrder' :{
    type: 'POST',
    url : '/inventory/inventory/admin/saveInventoryWarehouse'
  },
  
  // 新增配货仓
  'updateInventory' :{
    type: 'POST',
    url : '/inventory/inventory/admin/updateInventory'
  },
  
  // 根据skuid查看仓库信息
  'queryInventoryBySkuId':{
    type: 'get',
    url : '/inventory/inventory/admin/queryInventoryBySkuId/{skuId}'
  }
}

