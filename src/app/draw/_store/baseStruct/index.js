/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/9/19 17:04
 * Describe javascript功能
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

import Vue from 'vue'
// 表单元素结构数据
import formAtom from './formAtom';
// 容器结构数据
import container from './container';

const atomCompMap = {
	form: formAtom,
	container,
}

// 获取组件结构
function getCompStruct(struct) {
	const oldStruct = struct;
	// 检查是否已定义好的组件
	const atomId = struct.atomId;
	const atomType = struct.atomType;
	
	if (atomId && atomType) {
		try {
			struct = atomCompMap[atomType][atomId];
			oldStruct.name || Vue.set(oldStruct, 'name', struct.name);
		}
		catch (e) {
			console.error('组件未定义...')
		}
	}
	return struct;
}

export {
	atomCompMap,
	getCompStruct
}