export default {
	//分页查询上下架列表
	'shelflist':{
		type:'GET',
		url:'/product/product/admin/spu/list'
	},
	//sku上下架
  'shelf':{
  	type:'PATCH',
  	url:'/product/product/admin/sku/status',
  }
}
