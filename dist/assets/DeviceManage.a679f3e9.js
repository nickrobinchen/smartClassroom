import{P as k}from"./index.36f96364.js";import{N as B,a as A,Q as t,o as E,j as F,z as e,v as g,n as a,B as n}from"./index.c77972c6.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.3455cf29.js";import"./useContentViewHeight.06cda917.js";const v=A({components:{PageWrapper:k},setup(){const u=g(!1);return{data:[{title:"\u7535\u6E90\u603B\u95F8",checked:!0},{title:"\u6295\u5F71\u4EEA",checked:!1},{title:"\u667A\u6167\u767D\u73ED",checked:!0},{title:"\u6559\u5BA4\u5149\u6E90",checked:!0},{title:"\u97F3\u50CF\u91C7\u96C6\u7CFB\u7EDF",checked:!1}],checked:u}}});function C(u,o,D,w,x,P){const l=t("a-space"),s=t("a-select-item"),r=t("a-select"),d=t("a-switch"),p=t("a-card"),_=t("a-list-item"),i=t("a-list"),m=t("a-page-header"),f=t("PageWrapper");return E(),F(f,null,{default:e(()=>[a(m,{title:"\u667A\u6167\u6559\u5BA4\u8BBE\u5907\u63A7\u5236",subtitle:""},{extra:e(()=>[a(l,null,{default:e(()=>[n("\u8BF7\u9009\u62E9\u6559\u5BA4:")]),_:1}),a(l,null,{default:e(()=>[a(r,{ref:"select",value:u.label,"onUpdate:value":o[0]||(o[0]=c=>u.label=c),style:{width:"240px"},defaultOpen:!0},{default:e(()=>[a(s,{value:"A301\u6559\u5BA4"},{default:e(()=>[n("\u6570\u636E\u7ED3\u6784")]),_:1})]),_:1},8,["value"])]),_:1})]),default:e(()=>[a(i,{grid:{gutter:16,column:4},"data-source":u.data},{renderItem:e(({item:c})=>[a(_,null,{default:e(()=>[a(p,{title:c.title},{default:e(()=>[n("\u7535\u6E90\u63A7\u5236\uFF1A"),a(d,{checked:c.checked,"onUpdate:checked":h=>c.checked=h},null,8,["checked","onUpdate:checked"])]),_:2},1032,["title"])]),_:2},1024)]),_:1},8,["data-source"])]),_:1})]),_:1})}var j=B(v,[["render",C]]);export{j as default};
