export default {
  //会员管理列表
  'memberManageList': {
    type: 'form',
    url: '/user/back/users/query/listuser'
  },
  //会员冻结
  'memberManageFreeze': {
    type: 'form',
    url: '/user/users/congealUser'
  },
  //会员解冻
  'memberManageNoFreeze': {
    type: 'form',
    url: '/user/users/unfreezeUser'
  },
  //会员详情
  'memberManageLook': {
    type: 'form',
    url: '/user/back/users/queryCommonUserById'
  },
  //会员重置密码
  'memberManageChangePass': {
    type: 'form',
    url: '/user/back/users/passwordAssistance'
  },
  //创建会员
  'memberManageAdd': {
    type: 'post',
    url: '/user/back/users/create/user'
  },
  //检验手机号重复
  'memberManageMobileRepeat': {
    type: 'get',
    url: '/user/users/users/mobile/{mobileNo}'
  },
  //推荐人变更列表接口
  'memberChangeRefereeList': {
    type: 'form',
    url: '/user/back/users/referrer/listUser'
  },
  //获取用户及推荐人用户信息
  'memberChangeRefereeDetail': {
    type: 'form',
    url: '/user/back/users/referrer/userDetail'
  },
  //查询推荐人用户信息
  'memberChangeRefereeSearch': {
    type: 'form',
    url: '/user/back/users/referrer/referrerInfo'
  },
  //变更推荐人用户信息
  'memberChangeRefereeChange': {
    type: 'form',
    url: '/user/back/users/referrer/referrerChange'
  },
  //手机号换绑列表
  'memberChangePhoneList': {
    type: 'form',
    url: '/user/back/users/query/listUserList'
  },
  //手机号换绑详情
  'memberChangePhoneInfo': {
    type: 'form',
    url: '/user/back/users/query/queryUserInfo'
  },
  //手机号换绑
  'memberChangePhoneUpdate': {
    type: 'post',
    url: '/user/back/users/updateMobile'
  },
  //获取手机验证码
  'memberChangePhoneGetCode': {
    type: 'form',
    url: '/user/users/validation/code'
  },

}
