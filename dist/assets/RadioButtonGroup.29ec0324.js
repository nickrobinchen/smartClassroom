import{a as f,ce as p,bx as v,v as g,f as B,N as R,Q as d,o as s,j as c,z as m,h as b,U as k,H as C,S as _,a1 as h,B as y,t as G}from"./index.c77972c6.js";/* empty css                */import{u as S}from"./useFormItem.0ca96f1f.js";const $=f({name:"RadioButtonGroup",components:{RadioGroup:p.Group,RadioButton:p.Button},props:{value:{type:[String,Number,Boolean]},options:{type:Array,default:()=>[]}},emits:["change"],setup(a){const o=v(),n=g([]),[r]=S(a,"value","change",n),u=B(()=>{const{options:t}=a;return!t||(t==null?void 0:t.length)===0?[]:t.some(e=>h(e))?t.map(e=>({label:e,value:e})):t});function l(...t){n.value=t}return{state:r,getOptions:u,attrs:o,handleClick:l}}});function A(a,o,n,r,u,l){const t=d("RadioButton"),i=d("RadioGroup");return s(),c(i,_(a.attrs,{value:a.state,"onUpdate:value":o[0]||(o[0]=e=>a.state=e),"button-style":"solid"}),{default:m(()=>[(s(!0),b(C,null,k(a.getOptions,e=>(s(),c(t,{key:`${e.value}`,value:e.value,disabled:e.disabled,onClick:N=>a.handleClick(e)},{default:m(()=>[y(G(e.label),1)]),_:2},1032,["value","disabled","onClick"]))),128))]),_:1},16,["value"])}var U=R($,[["render",A]]);export{U as R};
