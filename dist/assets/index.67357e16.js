import{M as E,a as F}from"./index.167e2f3e.js";import{P as k}from"./index.36f96364.js";import{N as C,a as w,dy as g,v as i,Q as t,o as B,j as A,z as n,i as d,n as a,B as p,k as D}from"./index.c77972c6.js";/* empty css                *//* empty css               *//* empty css               */import"./index.52c66243.js";import"./useWindowSizeFn.3455cf29.js";import"./FullscreenOutlined.dcdca408.js";/* empty css               *//* empty css                */import"./useContentViewHeight.06cda917.js";const M=w({components:{MarkDown:E,PageWrapper:k,MarkdownViewer:F,ACard:g},setup(){const e=i(null),u=i(`
# \u6807\u9898h1

##### \u6807\u9898h5

**\u52A0\u7C97**
*\u659C\u4F53*
~~\u5220\u9664\u7EBF~~
[\u94FE\u63A5](https://github.com/vbenjs/vue-vben-admin)
\u2193\u5206\u5272\u7EBF\u2193

---


* \u65E0\u5E8F\u5217\u88681
  * \u65E0\u5E8F\u5217\u88681.1

1. \u6709\u5E8F\u5217\u88681
2. \u6709\u5E8F\u5217\u88682

* [ ] \u4EFB\u52A1\u5217\u88681
* [x] \u4EFB\u52A1\u5217\u88682

> \u5F15\u7528\u793A\u4F8B

\`\`\`js
// \u4EE3\u7801\u5757:
(() => {
  var htmlRoot = document.getElementById('htmlRoot');
  var theme = window.localStorage.getItem('__APP__DARK__MODE__');
  if (htmlRoot && theme) {
    htmlRoot.setAttribute('data-theme', theme);
    theme = htmlRoot = null;
  }
})();
\`\`\`

| \u8868\u683C | \u793A\u4F8B | \u{1F389}\uFE0F |
| --- | --- | --- |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
`);function l(){const o=D(e);if(!o)return;o.getVditor().setTheme("dark","dark","dracula")}function m(o){u.value=o}function s(){u.value=""}return{value:u,toggleTheme:l,markDownRef:e,handleChange:m,clearValue:s}}}),V={class:"mt-2"};function R(e,u,l,m,s,o){const r=t("a-button"),c=t("MarkDown"),_=t("MarkdownViewer"),f=t("a-card"),h=t("PageWrapper");return B(),A(h,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:n(()=>[d("div",null,[a(r,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:n(()=>[p(" \u9ED1\u6697\u4E3B\u9898 ")]),_:1},8,["onClick"]),a(r,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:n(()=>[p(" \u6E05\u7A7A\u5185\u5BB9 ")]),_:1},8,["onClick"]),a(c,{value:e.value,"onUpdate:value":u[0]||(u[0]=v=>e.value=v),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),d("div",V,[a(f,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:n(()=>[a(_,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var O=C(M,[["render",R]]);export{O as default};
