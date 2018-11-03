import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
// element ui 样式
import 'element-ui/lib/theme-chalk/index.css';
import {Form, Select, Switch, Option, Input, Tabs, TabPane, FormItem, Slider, ColorPicker,RadioGroup,Radio} from 'element-ui';

// 应用预处理
import preprocess from '@extend/preprocess'
// 路由实例
import Router from '@plugins/router'
// 页面缓存插件
import pageCache from '@plugins/pageCache'
// service 插件
import Service from '@plugins/service'
// 扩展 过滤器
import filters from '@filters'
// 扩展 指令
import directive from '@directive'
// 扩展 组件
import components from '@components'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// 启用vue状态管理插件
Vue.use(Vuex);
// 应用预处理初始化
Vue.use(preprocess);
// material UI组件
Vue.use(VueMaterial);

// element ui组件安装
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(Switch);
Vue.use(Option);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Slider);
Vue.use(ColorPicker);
Vue.use(Radio);
Vue.use(RadioGroup);

// 使用页面缓存插件
Vue.use(pageCache);
// 使用service插件
Vue.use(Service);
// 使用扩展过滤器
Vue.use(filters);
// 使用扩展指令
Vue.use(directive);
// 使用扩展组件
Vue.use(components);
// 使用路由插件
Vue.use(Router);

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

new Vue({
	router: Router,
	render: h => h(App)
}).$mount('#app')

