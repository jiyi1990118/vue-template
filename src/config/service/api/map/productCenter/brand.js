export default {
  'getBrandList': {
    type: 'get',
    url: '/product/product/admin/brands'
  },
  'getBrand': {
    type: 'get',
    url: '/product/product/brands/{ id }'
  },
  'addBrand': {
    type: 'post',
    url: '/product/product/admin/brands'
  },
  'editBrand': {
    type: 'patch',
    url: '/product/product/admin/brands'
  },
  'delBrand': {
    type: 'delete',
    url: '/product/product/admin/brands/{ id }'
  },
  'brandListAll': {
    type: 'get',
    url: '/product/product/brands/list'
  },
  'getHomeAddress': {
    type: 'get',
    url: '/product/product/origins',
  },
  'homeAddressSearchBrand' : {
    type:'get',
    url:'/product/product/admin/brands'
  },
  'getBrandName':{
    type:'get',
    url:'/product/product/admin/getBrandName'
  }
}
