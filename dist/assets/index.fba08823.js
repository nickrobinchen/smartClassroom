import{N as B,a as k,bA as b,I as d,cE as D,ab as g,v as A,bd as T,Q as r,o as _,j as v,z as t,n as u,i as h,B as s,h as P,H as $,U as y,t as N,K as w}from"./index.c77972c6.js";import{P as L}from"./index.36f96364.js";/* empty css                *//* empty css               *//* empty css                */import"./useWindowSizeFn.3455cf29.js";import"./useContentViewHeight.06cda917.js";const V=k({name:"TabsDemo",components:{CollapseContainer:b,PageWrapper:L,[d.name]:d,[D.name]:D},setup(){const e=g(),l=A(""),{closeAll:m,closeLeft:C,closeRight:F,closeOther:f,closeCurrent:c,refreshPage:a,setTitle:i}=T(),{createMessage:n}=w();function p(){l.value?i(l.value):n.error("\u8BF7\u8F93\u5165\u8981\u8BBE\u7F6E\u7684Tab\u6807\u9898\uFF01")}function o(E){e(`/feat/tabs/detail/${E}`)}return{closeAll:m,closeLeft:C,closeRight:F,closeOther:f,closeCurrent:c,toDetail:o,refreshPage:a,setTabTitle:p,title:l}}}),W={class:"mt-2 flex flex-grow-0"};function I(e,l,m,C,F,f){const c=r("a-alert"),a=r("a-button"),i=r("a-input"),n=r("CollapseContainer"),p=r("PageWrapper");return _(),v(p,{title:"\u6807\u7B7E\u9875\u64CD\u4F5C\u793A\u4F8B"},{default:t(()=>[u(n,{title:"\u5728\u4E0B\u9762\u8F93\u5165\u6846\u8F93\u5165\u6587\u672C,\u5207\u6362\u540E\u56DE\u6765\u5185\u5BB9\u4F1A\u4FDD\u5B58"},{default:t(()=>[u(c,{banner:"",message:"\u8BE5\u64CD\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u9875\u9762\u6807\u9898\uFF0C\u4EC5\u4FEE\u6539Tab\u6807\u9898"}),h("div",W,[u(a,{class:"mr-2",onClick:e.setTabTitle,type:"primary"},{default:t(()=>[s(" \u8BBE\u7F6ETab\u6807\u9898 ")]),_:1},8,["onClick"]),u(i,{placeholder:"\u8BF7\u8F93\u5165",value:e.title,"onUpdate:value":l[0]||(l[0]=o=>e.title=o),class:"mr-4 w-12"},null,8,["value"])])]),_:1}),u(n,{class:"mt-4",title:"\u6807\u7B7E\u9875\u64CD\u4F5C"},{default:t(()=>[u(a,{class:"mr-2",onClick:e.closeAll},{default:t(()=>[s(" \u5173\u95ED\u6240\u6709 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeLeft},{default:t(()=>[s(" \u5173\u95ED\u5DE6\u4FA7 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeRight},{default:t(()=>[s(" \u5173\u95ED\u53F3\u4FA7 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeOther},{default:t(()=>[s(" \u5173\u95ED\u5176\u4ED6 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeCurrent},{default:t(()=>[s(" \u5173\u95ED\u5F53\u524D ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.refreshPage},{default:t(()=>[s(" \u5237\u65B0\u5F53\u524D ")]),_:1},8,["onClick"])]),_:1}),u(n,{class:"mt-4",title:"\u6807\u7B7E\u9875\u590D\u7528\u8D85\u51FA\u9650\u5236\u81EA\u52A8\u5173\u95ED(\u4F7F\u7528\u573A\u666F: \u52A8\u6001\u8DEF\u7531)"},{default:t(()=>[(_(),P($,null,y(6,o=>u(a,{key:o,class:"mr-2",onClick:E=>e.toDetail(o)},{default:t(()=>[s(" \u6253\u5F00"+N(o)+"\u8BE6\u60C5\u9875 ",1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})}var H=B(V,[["render",I]]);export{H as default};
