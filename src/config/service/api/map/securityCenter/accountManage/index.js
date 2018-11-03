import organizationManage from './organizationManage'
import roleManage from './roleManage'
import accountManage from './accountManage'
import storesManage from './storesManage'
import supplierManage from './supplierManage'
import agreementManageManage from './agreementManageManage'

export default {
  ...organizationManage,
  ...roleManage,
  ...accountManage,
  ...storesManage,
  ...supplierManage,
  ...agreementManageManage
}
