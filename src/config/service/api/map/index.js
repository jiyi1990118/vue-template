// 用户中心
import users from './user';
// 会员中心
import members from './members';
// 商品中心
import productCenters from './productCenter';
// 订单中心
import orderCenter from './orderCenter';
// 会员中心
import memberCenter from './memberCenter';

import settlementCenter from './settlementCenter';

//仓储中心
import warehouseCenter from './warehouseCenter';
//内容中心
import contentCenter from './contentCenter'

// 营销中心
import marketCenter from './marketCenter'

//安全中心
import securityCenter from './securityCenter'

export default {
  //登陆
  'login': {
    type: 'get',
    url: '/login{user}Test/test/{age}',
    dataType: 'text',
    data: {
      user: 'test'
    },
    header: {
      token: 'token'
    }
  },
  'qiniu':{
    type:'get',
    url:'user/users/qiniu/token'
  },
  //注册
  'register': '/register',
  //修改密码
  'changePwd': '/passwordUpdate',
  // 用户中心
  ...users,
  // 会员中心
  ...members,
  // 商品中心api字典
  ...productCenters,
  // 订单中心api字典
  ...orderCenter,
  // 会员中心
  ...memberCenter,
  //結算中心
  ...settlementCenter,
  //仓储中心
  ...warehouseCenter,
  //内容中心
  ...contentCenter,
  // 营销中心
  ...marketCenter,
  //安全中心
  ...securityCenter

}

