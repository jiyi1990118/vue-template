/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/9/21 10:15
 * Describe javascript功能
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

import Vuex from 'vuex'

// 字体属性组件
import fontAttr from "../_comp/attrs/font";
// 事件处理
import eventAttr from "../_comp/attrs/event";
// 边框样式设置
import borderAttr from "../_comp/attrs/border";
// 大小位置设置
import sizePositionAttr from "../_comp/attrs/sizePosition";

const store = new Vuex.Store({
	state: {
	
	},
	getters: {
	
	},
	mutations: {
	
	}
});


const mixin = {
	components: {
		fontAttr,
		eventAttr,
		borderAttr,
		sizePositionAttr
	},
	computed: {
	
	},
	methods: {
	
	}
}

// 数据数据仓库、接口
export {
	store,
	mixin
}

