import HelloWorld from './HelloWorld'


//组件集合
const components = [
	HelloWorld
];
export default function (Vue) {
	components.forEach(function (component) {
		Vue.component(component.name, component);
	})
}
