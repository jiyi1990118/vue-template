// 路由规则
const RouterRules = [
	{
		cache: false,
		path: '/',
		redirect: '/draw/index',
	},
	{
		path: '/home',
		sourcePath: 'home/layout',
		children: [
			{
				isMenu: false,
				cache: false,
				title: '页面列表',
				path: '/',
				sourcePath: 'home/index',
			},
		]
	},
	{
		path: '/draw/:module',
		title: '自定义绘制',
		sourcePath: 'draw/index',
	},
	// 其他页面重定向
	{
		isMenu: false,
		path: '*',
		redirect: '/',
	},
];

export default RouterRules
