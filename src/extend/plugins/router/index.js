/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/11/1 10:07
 * Describe javascript功能
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */
import Vue from 'vue';
// 路由插件
import Router from 'vue-router';
// 路由规则解析
import rulesParse from './rulesParse';
// 路由配置
import routerConf from '@config/router'
// 启用路由插件
Vue.use(Router);

export default new Router(Object.assign(routerConf,{
  routes: rulesParse(routerConf.rules),
  base:routerConf.mode === 'history'?routerConf.historyBase||routerConf.base||'/':routerConf.base||'./'
}));
