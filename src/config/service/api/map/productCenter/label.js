export default {
    'getLabelList': {
      type: 'get',
      url: '/product/product/admin/labels'
    },
    'getLabel': {
      type: 'get',
      url: '/product/product/admin/labels/{id}'
    },
    'addLabel': {
      type: 'post',
      url: '/product/product/admin/labels'
    },
    'editLabel': {
      type: 'patch',
      url: '/product/product/admin/label'
    },
    'delLabel': {
      type: 'delete',
      url: '/product/product/labels/{id}'
    },
    'labelListSelect': {
      type: 'get',
      url: '/product/product/labels/list'
    }
    
  }
