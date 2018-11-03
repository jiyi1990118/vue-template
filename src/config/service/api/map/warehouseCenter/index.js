import warehouseManage from './warehouseManage'
import warehouseAddress from './warehouseAddress'
import returnAddress from './returnAddress'

export default {
  ...warehouseManage,
  ...warehouseAddress,
  ...returnAddress
}
