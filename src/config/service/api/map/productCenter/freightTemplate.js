export default {
  //运费模版列表
  'getFrightTemplateList': {
    type: 'get',
    url: '/inventory/frightTemplate/admin/list'
  },
  // 添加运费模版
  'addFreightTemplate': {
    type: 'post',
    url: '/inventory/frightTemplate/admin/create'
  },
  // 调价
  'editModifyPrice': {
    type: 'post',
    url: '/inventory/frightTemplate/admin/modifyPrice'
  },
  // 查看调价列表
  'getModifyPriceList': {
    type: 'get',
    url: '/inventory/frightTemplate/admin/modifyPrice/list/{id}'
  },
  // 查看调价详情
  'examineModifyPrice': {
    type: 'get',
    url: '/inventory/frightTemplate/admin/modifyPrice/{id}'
  },
  // 删除调价
  'delModifyPrice': {
    type: 'DELETE',
    url: '/inventory/frightTemplate/admin/{id}'
  },
  //所有仓库
  'getWarehouseListAll': {
    type: 'get',
    url: '/inventory/warehouse/admin/all',
  },
  //供应商列表
  'getSuppliersList':{
    type:'get'
    ,url:'/inventory/suppliers/list'
  },
  'findWarehouse':{
    type:'get',
    url:'/inventory/warehouse/admin/findWarehouseBySupplierId'
  }

}
