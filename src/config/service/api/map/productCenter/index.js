import classify from './classify';
import brand from './brand';
import freightTemplate from './freightTemplate'
import label from './label'
import shelf from './shelf'
import groupedProduct from './groupedProduct'
import operation from './operation'
import supplier from './supplier'
import couponCenter from './couponCenter'
export default {
  ...classify,
  ...brand,
  ...freightTemplate,
  ...label,
  ...shelf,
  ...groupedProduct,
  ...operation,
  ...supplier,
  ...couponCenter
}
