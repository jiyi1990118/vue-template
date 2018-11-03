// 滚动位置记忆指令
import layoutMemoryScroll from './layoutMemoryScroll'

// 指令列表
const directiveList = [
  layoutMemoryScroll,
];

export default function (Vue) {

  // 图片错误处理指令
  Vue.directive('errorImg', {
    inserted: function (el) {
      el.addEventListener('error', () => {
        el.src = '/static/img/icons/pic_default.png';
      })
    }
  });

  // 注入
  Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      // 聚焦元素
      el.focus()
    }
  });

  Vue.directive('nodbClick', {
    inserted(el) {
      el.addEventListener('click', () => {
        if (!el.disabled) {
          el.disabled = true;
          setTimeout(() => {
            el.disabled = false;
          }, 1000)
        }
      })
    }
  });

  // 指令注入
  directiveList.forEach(info => Vue.directive(info.name, info.directive));
}
