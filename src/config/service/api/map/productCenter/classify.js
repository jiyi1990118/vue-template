export default {
  'getClassifyList': {
    type: 'get',
    url: '/product/product/admin/categories'
  },
  'classifySort': {
    type: 'patch',
    url: '/product/product/admin/categories/sort'
  },
  'removeClassify': {
    type: 'delete',
    url: '/product/product/admin/categories/{ id }'
  },
  'addClassify': {
    type: 'post',
    url: '/product/product/admin/categories'
  },
  'getClassify': {
    type: 'get',
    url: '/product/product/admin/categories/{ id }'
  },
  'editClassify': {
    type: 'patch',
    url: '/product/product/admin/categories'
  }
}
