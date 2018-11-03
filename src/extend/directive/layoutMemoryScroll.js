import Vue from 'vue'
import MD5 from 'md5'
// 路由实例
import Router from '@plugins/router'

// 滚动事件方法
const event = function (event) {
  const el = event.target;
  const path = MD5(window.location.href);
  const attrNameKey = getParentKey(el);
  // 更新存储
  memoryStore[path] = memoryStore[path] || {};
  // 存储
  memoryStore[path][MD5(attrNameKey)] = {
    querySelectorKey: attrNameKey,
    top: el.scrollTop,
    left: el.scrollLeft,
  };
};

// 记忆存储
let memoryStore = {};

// 恢复scroll定位
function recoverPosition(el) {
  const path = MD5(window.location.href);
  // 获取内存中的数据
  const pageInfo = memoryStore[path] || {};

  if (el) {
    const attrNameKey = getParentKey(el);
    setPosition(pageInfo[MD5(attrNameKey)])
  } else {

    Object.keys(pageInfo).forEach(key => {
      setPosition(pageInfo[key])
    })
  }
}

// 设置元素定位
function setPosition(info) {
  if (!info) return;
  let el = document.querySelector(info.querySelectorKey);

  if (!el) return;

  setTimeout(() => {
    el.scrollTop = info.top;
    el.scrollLeft = info.left;
  }, 200);
}

// 获取元素选择器
function getSelectorKey(el) {
  if (!el) return '';
  let len = el.attributes.length;
  let attrNameKey = getParentKey(el.parentNode) + el.tagName;

  // 利用Vue元素特性组成元素唯一选择器，以便后续获取此元素
  for (let i = 0; i < len; i++) {
    if (el.attributes[i].nodeName.match(/^class$/i)) {
      attrNameKey += '[' + el.attributes[i].nodeName + '="' + el.className + '"]'
    } else {
      attrNameKey += '[' + el.attributes[i].nodeName + ']'
    }
  }
  return attrNameKey;
}

// 元素查找标识
function getParentKey(el) {
  if (el === document.body) return '';
  return getSelectorKey(el) + ' ';
}

// 使用 router.beforeEach 注册一个全局前置守卫
Router.beforeEach((to, from, next) => {
  next();
  Vue.nextTick(function () {
    // DOM 更新了
    recoverPosition();
  })
});

// 滚动位置记忆指令
export default {
  name: 'layoutMemoryScroll',
  directive: {
    inserted(el) {
      el.addEventListener('scroll', event)
    },
    componentUpdated(el) {
      // recoverPosition(el);
    },
    unbind(el) {
      el.removeEventListener('scroll', event)
    },
  }
}
