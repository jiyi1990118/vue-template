//运营管理
export default {
  'productList':{
    type: 'get',
    url: '/product/product/admin/spu/od'
  },
  //查看spu详细信息
  'spuDetail':{
    type: 'get',
    url: '/product/product/admin/spu/{id}/{flag}'
  },

  //运营提交sku审核
  'operationalAudit':{
     type: 'form',
      url: '/product/product/admin/sku/operationalAudit'
  },

  //查询组合商品详情
  'combinationDetail':{
    type: 'get',
    url: '/product/product/admin/spu/group/detail/{id}'
  }
}
