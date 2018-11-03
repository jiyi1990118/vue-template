/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/9/18 16:06
 * Describe javascript功能
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

const animation = 300;

export default {
	data() {
		return {
			// 工具栏中的拖拽选项
			toolsDropOption: {
				group: {
					name: 'one',
					pull: 'clone',
					put: false,                  // 元素是否可以从其他列表中添加，或者从组名数组中添加
					revertClone: true,          // 在移动到另一个列表后，将克隆的元素恢复到初始位置。
				},        // 指定哪些元素可拖拽
				sort: false,
				scroll: false,
				animation: animation,
				ghostClass: 'drop-move',
				draggable: '.drop-atom',                  // 关闭元素排序功能
				// fallbackOnBody: false,          // 将克隆的DOM元素追加到文档的主体中
				forceFallback: true,           // boolean 如果设置为true时，将不使用原生的html5的拖放，可以修改一些拖放中元素的样式等
			},
			// 视图中拖拽组件选项
			viewDropOption: {
				group: {
					name: 'one',
					// revertClone: false,
				},
				sort: true,
				scroll: false,
				animation: animation,
				draggable: '.drop-atom',
				forceFallback: true,
				// fallbackOnBody: false,          // 将克隆的DOM元素追加到文档的主体中
				chosenClass: 'drop-move',
				ghostClass: 'select-drop,drop-move'
			},
			// 回收站
			removeDropOption: {
				group: {
					name: 'one',
					revertClone: false,
				},
				sort: false,
				scroll: false,
				animation: animation,
				filter: '.no-drop',
				draggable: '.drop-atom',
				forceFallback: true,
				fallbackOnBody: false,          // 将克隆的DOM元素追加到文档的主体中
			}
		}
	},
	methods: {
		// 元素移入回收站 进行删除
		removeDrop_Add(event) {
			// 移除回收站中元素
			event.to.removeChild(event.item)
			// 移除数据容器中的组件
			this.removeviewComp(event.item.getAttribute('comp-id'),event.from.getAttribute('draggable-id'));
			// 选择的组件id获取并设置当前组件选中状态
			this.selectViewComp(event.from.lastChild.getAttribute('comp-id'));
		},
		// 中间绘制视图区域组件选中处理
		viewCompChoose(event) {
			// 选择的组件id获取并设置当前组件选中状态
			this.selectViewComp(event.item.getAttribute('comp-id'));
		},
		// 添加到绘制区域结束
		viewCompAddEnd(event, comStruct) {
			// 检查是否移动到绘制区域
			if (event.from === event.to) return this.tempSelectViewComp(true);
			// 移除插件创建的元素
			event.to.removeChild(event.item);
			// 调用绘制接口新增组件数据（实际是用vue来生产对应的组件）
			this.addViewCompData(comStruct, event.newIndex - 1,event.to.getAttribute('draggable-id'));
		},
		// 添加绘制区域开始
		viewCompAddStart() {
			this.tempSelectViewComp();
		},
	}
}