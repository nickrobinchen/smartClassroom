import{N as _,a as S,c9 as m,eE as f,eF as T,eG as x,eH as R,eI as X,eJ as h,eK as y,eL as E,eM as Y,eN as B,eO as C,eP as w,eQ as F,v as n,Q as s,o as r,j as i,z as o,i as l,n as c,B as b,a3 as k,x as N,y as P}from"./index.c77972c6.js";import{P as $}from"./index.36f96364.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.3455cf29.js";import"./useContentViewHeight.06cda917.js";const g=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],A=g.map(e=>({label:e,value:e,key:e})),V=S({components:{Select:m,PageWrapper:$,FadeTransition:f,ScaleTransition:T,SlideYTransition:x,ScrollYTransition:R,SlideYReverseTransition:X,ScrollYReverseTransition:h,SlideXTransition:y,ScrollXTransition:E,SlideXReverseTransition:Y,ScrollXReverseTransition:B,ScaleRotateTransition:C,ExpandXTransition:w,ExpandTransition:F},setup(){const e=n("Fade"),a=n(!0);function t(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:A,value:e,start:t,show:a}}}),W={class:"flex"},D={class:"box"};function I(e,a,t,L,Q,j){const p=s("Select"),u=s("a-button"),d=s("PageWrapper");return r(),i(d,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:o(()=>[l("div",W,[c(p,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),c(u,{type:"primary",class:"ml-4",onClick:e.start},{default:o(()=>[b(" start ")]),_:1},8,["onClick"])]),(r(),i(k(`${e.value}Transition`),null,{default:o(()=>[N(l("div",D,null,512),[[P,e.show]])]),_:1}))]),_:1})}var O=_(V,[["render",I],["__scopeId","data-v-45b1f032"]]);export{O as default};
