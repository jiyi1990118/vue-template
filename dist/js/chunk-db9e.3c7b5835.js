(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db9e"],{"57e8":function(e,t,n){},"9d01":function(e,t,n){"use strict";n.r(t);n("7f7f");var a,i,s={name:"tabs",props:{type:String,activeName:String,closable:Boolean,addable:Boolean,value:{},editable:Boolean,tabPosition:{type:String,default:"top"},beforeLeave:Function,stretch:Boolean},data:function(){return{currentName:this.value||this.activeName,panes:[]}},render:function(){var e=this,t=arguments[0],n=this.panes.map(function(n,a){return t("li",{class:{focus:a===e.pane||n.name===e.currentName||a===e.currentName},on:{click:function(t){e.handleTabClick(n,a,t)}}},[t("span",[n.label])])});return void 0===this.currentName&&this.panes.length&&(this.currentName=this.panes[0].name),t("div",{class:"tabs-comp"},[t("div",{class:"toggle-tabs-title"},[t("ul",[n])]),t("div",{class:"toggle-tabs-content"},[" ",this.$slots.default])])},methods:{handleTabClick:function(e,t,n){e.disabled||(this.setCurrentName(e.name||t),this.$emit("tab-click",e,n))},handleTabRemove:function(e,t){e.disabled||(t.stopPropagation(),this.$emit("edit",e.name,"remove"),this.$emit("tab-remove",e.name))},handleTabAdd:function(){this.$emit("edit",null,"add"),this.$emit("tab-add")},setCurrentName:function(e){var t=this,n=function(){t.currentName=e,t.$emit("input",e)};if(this.currentName!==e&&this.beforeLeave){var a=this.beforeLeave(e,this.currentName);a&&a.then?a.then(function(){n(),t.$refs.nav&&t.$refs.nav.removeFocus()}):!1!==a&&n()}else n()},addPanes:function(e){var t=this.$slots.default.indexOf(e.$vnode);this.panes.splice(t,0,e)},removePanes:function(e){var t=this.panes,n=t.indexOf(e);n>-1&&t.splice(n,1)}},watch:{value:function(){this.currentName=this.value}}},o=s,r=(n("f710"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,"1de1f4a8",null);c.options.__file="tabs.vue";t["default"]=c.exports},f710:function(e,t,n){"use strict";var a=n("57e8"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-db9e.3c7b5835.js.map