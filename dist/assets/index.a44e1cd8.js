var d=(t,s,e)=>new Promise((p,F)=>{var l=u=>{try{o(e.next(u))}catch(r){F(r)}},i=u=>{try{o(e.throw(u))}catch(r){F(r)}},o=u=>u.done?p(u.value):Promise.resolve(u.value).then(l,i);o((e=e.apply(t,s)).next())});import{P as _}from"./index.36f96364.js";import{N as C,a as f,dy as m,s as E,Q as c,o as D,j as A,z as a,n,B,i as y}from"./index.c77972c6.js";import{t as g}from"./account.ba101e02.js";/* empty css                *//* empty css               *//* empty css               *//* empty css               *//* empty css                */import"./useWindowSizeFn.3455cf29.js";import"./useContentViewHeight.06cda917.js";const k=f({name:"TestSessionTimeout",components:{ACardGrid:m.Grid,ACard:m,PageWrapper:_},setup(){const t=E();function s(){return d(this,null,function*(){t.setToken(void 0),t.setSessionTimeout(!0)})}function e(){return d(this,null,function*(){try{yield g()}catch(p){}})}return{test1:s,test2:e}}}),x=y("span",null,null,-1);function h(t,s,e,p,F,l){const i=c("a-button"),o=c("a-card-grid"),u=c("a-card"),r=c("PageWrapper");return D(),A(r,{title:"\u767B\u5F55\u8FC7\u671F\u793A\u4F8B",content:"\u7528\u6237\u767B\u5F55\u8FC7\u671F\u793A\u4F8B\uFF0C\u4E0D\u518D\u8DF3\u8F6C\u767B\u5F55\u9875\uFF0C\u76F4\u63A5\u751F\u6210\u9875\u9762\u8986\u76D6\u5F53\u524D\u9875\u9762\uFF0C\u65B9\u4FBF\u4FDD\u6301\u8FC7\u671F\u524D\u7684\u7528\u6237\u72B6\u6001\uFF01"},{default:a(()=>[n(u,{title:"\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8BBF\u95EE\u6D4B\u8BD5\u63A5\u53E3",extra:"\u6240\u8BBF\u95EE\u7684\u63A5\u53E3\u4F1A\u8FD4\u56DEToken\u8FC7\u671F\u54CD\u5E94"},{default:a(()=>[n(o,{style:{width:"50%","text-align":"center"}},{default:a(()=>[n(i,{type:"primary",onClick:t.test1},{default:a(()=>[B("HttpStatus == 401")]),_:1},8,["onClick"])]),_:1}),n(o,{style:{width:"50%","text-align":"center"}},{default:a(()=>[x,n(i,{class:"ml-4",type:"primary",onClick:t.test2},{default:a(()=>[B("Response.code == 401")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var j=C(k,[["render",h]]);export{j as default};