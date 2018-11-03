/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/9/17 13:22
 * Describe javascript功能
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

import Vuex from 'vuex'

const store = new Vuex.Store({
	state: {
		// 组件工具选中的index
		selectIndexModule: 0,
		// 组件模块
		compToolsData: [
			{
				name: '创意模板',
				icon: 'cms-creative',
				class: [
					{
						title: "模板演示",
						compList: []
					}
				]
			},
			{
				name: '组件',
				icon: 'cms-zujian',
				class: [
					{
						title: "全部",
						compList: [
						
						]
					},
					{
						title: "轮播",
						compList: []
					},
					{
						title: "icon",
						compList: []
					},
					{
						title: "营销",
						compList: []
					},
					{
						title: "主题",
						compList: []
					}
				]
			},
			{
				name: '元件',
				icon: 'cms-zujian1',
				class: [
					{
						title: "全部",
						compList: []
					},
					{
						title: "基本元素",
						compList: []
					},
					{
						title: "表单元素",
						compList: [
							{
								atomType: 'form',
								atomId: 'input'
							},
							{
								atomType: 'form',
								atomId: 'select'
							},
						]
					},
					{
						title:'容器',
						compList: [
							{
								atomType: 'container',
								atomId: 'div'
							},
						]
					}
				]
			}
		],
	},
	getters: {
		// 组件工具数据
		compToolsData: state => {
			return state.compToolsData;
		},
		selectIndexModule: state => {
			return state.selectIndexModule;
		},
		selectCompToolsData: state => {
			return state.compToolsData[state.selectIndexModule].class || [];
		},
		// tab 选择项
		tabFocusName() {
		
		}
	},
	mutations: {
		// 选择组件模块
		compToolsSelectModule: (state, comItem) => {
			const index = state.compToolsData.indexOf(comItem)
			state.selectIndexModule = index === -1 ? state.selectIndexModule : index;
			
		},
	},
})


const mixin = {
	methods: {
		// 选择组件工具模块
		selectCompModule(compItem) {
			store.commit('compToolsSelectModule', compItem);
		}
	},
	computed: {
		// 组件工具数据
		compToolsData() {
			return store.getters.compToolsData
		},
		// 选择的组件模块索引
		selectCompIndexModule() {
			return store.getters.selectIndexModule
		},
		selectCompToolsData() {
			return store.getters.selectCompToolsData
		},
		selectCompItemIndex() {
			const selectModule = store.getters.compToolsData[store.getters.selectIndexModule]
			return selectModule.focusKey = selectModule.focusKey || store.getters.selectIndexModule + '_' + 0
		}
	}
}

// 组件工具数据仓库
export {
	store,
	mixin
}