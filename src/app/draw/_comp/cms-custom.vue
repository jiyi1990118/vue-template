<script>

	// 表单元素结构数据
	import {getCompStruct} from '../_store/baseStruct';

	// 拖拉拽组件
	import draggable from 'vuedraggable';

	// 数据克隆
	function cloneData(data) {
		switch (typeof data) {
			case 'object':
				data = Object.keys(data).reduce(function (map, key) {
					map[key] = cloneData(data[key]);
					return map;
				}, Array.isArray(data) ? [] : {})
				break;
		}
		return data;
	}

	// 绑定上下文
	function contextBind(data, context) {
		switch (typeof data) {
			case 'object':
				data = Object.keys(data).reduce(function (map, key) {
					map[key] = contextBind(data[key], context);
					return map;
				}, Array.isArray(data) ? [] : {})
				break;
			case 'function':
				data = data.bind(context);
				break;
		}

		return data;
	}

	// 支持并绑定for循环
	function forBind(context, data, value, index) {
		switch (typeof data) {
			case 'object':
				data = Object.keys(data).reduce(function (map, key) {
					const Value = forBind(context, data[key], value, index);
					const Key = String(key).match(/for\s*=>\s*([^\s]+)/);

					// 获得 属性值
					let _value = Key ? Value(value, index) : Value;

					if (Key) {
						key = Key[1];
						if (typeof _value === "function") {
							_value = _value.bind(context);
						}
					}

					map[key] = _value;
					return map;
				}, Array.isArray(data) ? [] : {})
				break;
			case 'function':
				data = data.bind(context);
				break;
		}

		return data;
	}

	function render(h, struct, context, count) {
		if (typeof struct === 'string') return struct;

		// 检查是否已定义好的组件
		struct = getCompStruct(struct);

		const data = struct.data || {};

		// 给组件绑定上id
		if (struct.compId) {
			(data.attrs = data.attrs || {})['comp-id'] = struct.compId;
		}

		// 检查是否draggable组件
		if (struct.tag === 'draggable') {
			++count;
			// 添加拖拽组件的id标识
			(data.attrs = data.attrs || {})['draggable-id'] = context.struct.compId + '_' + count;
		}

		// 检查是否启用for循环
		let forData = typeof struct.for === "function" ? struct.for.bind(context)(context.struct.compId + '_' + count) : struct.for;
		if (forData) {
			return forData.map(function (value, index) {
				return struct.text ? h(struct.tag, struct.text) : h(struct.tag, forBind(context, cloneData(data), value, index) || {}, (struct.child || struct.children || []).filter(struct => typeof struct === 'string' || struct.tag).reduce(function (child, struct) {
					return child.concat(render(h, struct, context, count))
				}, []));
			})
		}

		// 非for遍历
		return struct.text ? h(struct.tag, struct.text) : h(struct.tag, contextBind(cloneData(data), context) || {}, (struct.child || struct.children || []).filter(struct => typeof struct === 'string' || struct.tag).reduce(function (child, struct) {
			return child.concat(render(h, struct, context, count))
		}, []));
	}

	export default {
		name: 'cms-custom',
		props: {
			option: Object,
			struct: Object,
		},
		components: {
			draggable
		},
		render(h) {
			if (this.struct) {
				let nodes = render(h, this.struct, this, 0);
				return nodes.length === 1 ? nodes[0] : nodes;
			}
		}
	}
</script>

<style lang="scss" scoped>
    * {
        max-width: 100%;
    }
</style>