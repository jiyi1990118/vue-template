import order from './order'
import wordorder from './workerorder'
import compensate from './compensate/compensate'
import afterSaleManager from './afterSalesManager'
import companOrder from './companyOrder'

export default {
  'getAdultList':{
    type:'get',
    url:'order/orders/afterSalesAdmin/cs/list'
  },
  ...order,
  ...wordorder,
  ...compensate,
  ...afterSaleManager,
  ...companOrder
}
