import{B as i,b as c}from"./index.52c66243.js";import{N as p,a as d,Q as r,o as m,j as M,z as o,n,B as l}from"./index.c77972c6.js";import"./useWindowSizeFn.3455cf29.js";import"./FullscreenOutlined.dcdca408.js";const _=d({components:{BasicModal:i},setup(){const[e,{closeModal:t,setModalProps:a}]=c();return{register:e,closeModal:t,setModalProps:()=>{a({title:"Modal New Title"})}}}});function f(e,t,a,C,E,B){const s=r("a-button"),u=r("BasicModal");return m(),M(u,{onRegister:e.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],okButtonProps:{disabled:!0}},{default:o(()=>[n(s,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:o(()=>[l(" \u4ECE\u5185\u90E8\u5173\u95ED\u5F39\u7A97 ")]),_:1},8,["onClick"]),n(s,{type:"primary",onClick:e.setModalProps},{default:o(()=>[l(" \u4ECE\u5185\u90E8\u4FEE\u6539title ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var N=p(_,[["render",f]]);export{N as default};
