import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 用户信息仓库
export default new Vuex.Store({
  state: {
    userInfo: undefined,
    token: '',
  },
  getters: {
    // 登陆token令牌
    token: state => {
      if (!state.token) {
        state.setToken = sessionStorage.getItem('__user_token') || state.setToken
      }
      return state.token;
    },
    // 用户信息
    userInfo: state => {
      if (!state.userInfo) {
        let userInfo = sessionStorage.getItem('__user_userInfo');
        state.userInfo = userInfo ? JSON.parse(userInfo) : state.userInfo
      }
      return state.userInfo;
    }
  },
  mutations: {
    // 设置token令牌
    setToken: (state, token) => {
      sessionStorage.setItem('__user_token', token);
      state.token = token;
    },
    getToken: state => {
      if (!state.token) {
        state.setToken = sessionStorage.getItem('__user_token') || state.setToken
      }
      return state.token;
    },
    // 设置用户信息
    setUserInfo: (state, userInfo) => {
      let authorityList =['/index'].concat(userInfo.menuList.map(item => item.url));
      // 更新用户权限
      Vue.$cacheNav.updateAuthority(authorityList);
      // 用户权限提取
      // console.log(JSON.stringify(authorityList))
      // 存储用户数据
      sessionStorage.setItem('__user_userInfo', JSON.stringify(userInfo));
      state.userInfo = userInfo;
    },
    getUserInfo: state => {
      if (!state.userInfo) {
        let userInfo = sessionStorage.getItem('__user_userInfo');
        state.userInfo = userInfo ? JSON.parse(userInfo) : state.userInfo
      }
      return state.userInfo;
    }
  },
})
