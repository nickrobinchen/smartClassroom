import{a as h,Z as v,v as a,b as y,f as x,o as H,h as w,n as S,z,i as R,q as f,k as e,aD as u,ag as k,N as C}from"./index.c77972c6.js";import{u as B}from"./useWindowSizeFn.3455cf29.js";import{a as L}from"./useContentViewHeight.06cda917.js";const N=["src"],$=h({__name:"index",props:{frameSrc:v.string.def("")},setup(m){const s=a(!0),p=a(50),i=a(window.innerHeight),r=a(),{headerHeightRef:d}=L(),{prefixCls:o}=y("iframe-page");B(l,150,{immediate:!0});const c=x(()=>({height:`${e(i)}px`}));function l(){const n=e(r);if(!n)return;const t=d.value;p.value=t,i.value=window.innerHeight-t;const g=document.documentElement.clientHeight-t;n.style.height=`${g}px`}function _(){s.value=!1,l()}return(n,t)=>(H(),w("div",{class:f(e(o)),style:u(e(c))},[S(e(k),{spinning:s.value,size:"large",style:u(e(c))},{default:z(()=>[R("iframe",{src:m.frameSrc,class:f(`${e(o)}__main`),ref_key:"frameRef",ref:r,onLoad:_},null,42,N)]),_:1},8,["spinning","style"])],6))}});var F=C($,[["__scopeId","data-v-179381bf"]]);export{F as default};
