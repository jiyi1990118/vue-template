export default {
  'getSupplierList': {
    type: 'get',
    url: '/inventory/suppliers/admin/list/pd'
  },
  'getSupplierDetail':{
    type:'get',
    url:'/inventory/suppliers/admin/{id}'
  },
  'auditSupplier':{
    type:'form',
    url:'/inventory/suppliers/admin/audit'
  }
}
