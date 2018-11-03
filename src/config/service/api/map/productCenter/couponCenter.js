export default {
  'getCouponList': {
    type: 'get',
    url: '/product/product/coupon/list'
  },
  'couponAdd': {
    type: 'post',
    url: '/product/product/coupon/add'
  },
  'couponUpdate': {
    type: 'post',
    url: '/product/product/coupon/update'
  },
  'getCouponSkuList': {
    type: 'get',
    url: '/product/product/couponSku/list'
  },
  'couponSetVoucher': { //导入券
    type: 'post',
    url: '/inventory/inventoryCoupon/admin/importCouponCode'
  },
  'changeCouponCount': { //系统设置
    type: 'form',
    url: '/inventory/inventoryCoupon/admin/changeCouponCount'
  },
  'exportInventoryCoupon': {
    type: 'get',
    url: '/inventory/inventoryCoupon/admin/exportInventoryCoupon'
  },
}
