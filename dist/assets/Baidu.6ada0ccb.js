var u=(e,s,t)=>new Promise((o,n)=>{var r=a=>{try{p(t.next(a))}catch(c){n(c)}},i=a=>{try{p(t.throw(a))}catch(c){n(c)}},p=a=>a.done?o(a.value):Promise.resolve(a.value).then(r,i);p((t=t.apply(e,s)).next())});import{u as l}from"./useScript.49579546.js";import{N as d,a as f,v as m,a2 as h,o as w,h as B,aD as _,az as v,k as M}from"./index.c77972c6.js";const g="https://api.map.baidu.com/getscript?v=3.0&ak=OaBvYmKX3pjF7YFUFeeBCeGdy9Zp7xB2&services=&t=20210201100830&s=1",y=f({name:"BaiduMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=m(null),{toPromise:s}=l({src:g});function t(){return u(this,null,function*(){yield s(),yield v();const o=M(e);if(!o)return;const n=window.BMap,r=new n.Map(o),i=new n.Point(116.404,39.915);r.centerAndZoom(i,15),r.enableScrollWheelZoom(!0)})}return h(()=>{t()}),{wrapRef:e}}});function k(e,s,t,o,n,r){return w(),B("div",{ref:"wrapRef",style:_({height:e.height,width:e.width})},null,4)}var A=d(y,[["render",k]]);export{A as default};
