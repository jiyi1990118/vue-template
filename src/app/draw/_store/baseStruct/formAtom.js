/**
 * Created By xiyuan
 * Author server@xiyuan.name (惜缘叛逆)
 * DateTime 2018/9/17 17:29
 * Describe javascript功能
 * MIT License http://www.opensource.org/licenses/mit-license.php
 */

export default {
	'input':{
		tag: 'input',
		name:'输入框',
		data: {
			style:{
				height: '25px',
				width: '100%',
			},
			domProps: {
				value: '',
				placeholder:'输入框'
			},
			on: {
				input(e) {
					console.log(e)
				}
			}
		},
	},
	'select':{
		tag: 'select',
		name:'下拉框',
		data: {
			style: {
				height: '25px',
				width: '100%'
			},
			domProps: {
				value: '',
				placeholder:'下拉框'
			},
		},
		child:[
		
		]
	}
}