/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/9/25 10:06
 * Describe javascript功能
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

import {store as viewStore,comAPI} from '../drawViewData.js'

export default {
	'div': {
		tag: 'div',
		name: '普通容器',
		data: {
			style: {
				minHeight: '100px',
				width: '100%',
			},
			domProps: {},
			on: {},
			class: {
				container: true
			}
		},
		child: [
			'test123',
			{
				tag: 'p',
				text: 'p标签内容'
			},
			{
				tag: 'draggable',
				data: {
					style: {
						minHeight: '100px',
						width: '100%',
					},
					// 组件 props
					props: {
						element: 'div',
						options: {
							group: {
								name: 'one',
								revertClone: false,
							},
							sort: true,
							scroll: false,
							animation: 300,
							draggable: '.drop-atom',
							forceFallback: true,
							chosenClass: 'drop-move',
							ghostClass: 'select-drop,drop-move',
						},
					},
					on: {
						choose(event) {
							comAPI.selectViewComp(event.item.getAttribute('comp-id'));
						},
					},
				},
				child: [
					{
						tag: 'div',
						data: {
							class: {
								"drop-atom": true
							},
							style: {
								// height: '1px',
								width: '100%',
								// border: '1px solid #f0f0f0'
							},
						},
					},
					{
						tag: 'cms-custom',
						for: function (draggableId) {
							return comAPI.getDraggableList(draggableId).list;
						},
						"for=>key": function (value) {
							console.log(value.compId)
							return value.compId;
						},
						attrs:{
							"for=>key": function (value) {
								return value.compId;
							},
						},
						data: {
							style: {},
							"for=>key": function (value) {
								return value.compId;
							},
							// 组件 props
							props: {
								"for=>struct": function (value) {
									return value;
								}
							},
							class: {
								"drop-atom": true,
								'for=>focus-drop': function (value) {
									return value.compId === viewStore.state.selectComp;
								},
							}
						},
					}
				]
			}
		]
	},
}