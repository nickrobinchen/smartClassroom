var v=Object.defineProperty;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var m=(t,o,e)=>o in t?v(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,f=(t,o)=>{for(var e in o||(o={}))_.call(o,e)&&m(t,e,o[e]);if(d)for(var e of d(o))M.call(o,e)&&m(t,e,o[e]);return t};var p=(t,o,e)=>new Promise((n,s)=>{var c=a=>{try{u(e.next(a))}catch(r){s(r)}},l=a=>{try{u(e.throw(a))}catch(r){s(r)}},u=a=>a.done?n(a.value):Promise.resolve(a.value).then(c,l);u((e=e.apply(t,o)).next())});import{B as D,b as P}from"./index.52c66243.js";import{B as C}from"./BasicForm.1cb0e446.js";import"./componentMap.e56f5f78.js";import{u as I}from"./useForm.5f123e01.js";import"./RadioButtonGroup.29ec0324.js";import{b8 as N,bq as S,N as k,a as w,v as y,k as b,f as T,Q as g,o as x,j as R,z as $,n as q,S as A}from"./index.c77972c6.js";/* empty css               */import{a as L}from"./system.8e8f10ac.js";const Z=[{title:"\u90E8\u95E8\u540D\u79F0",dataIndex:"deptName",width:160,align:"left"},{title:"\u6392\u5E8F",dataIndex:"orderNo",width:50},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:t})=>{const e=~~t.status===0,n=e?"green":"red",s=e?"\u542F\u7528":"\u505C\u7528";return N(S,{color:n},()=>s)}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180},{title:"\u5907\u6CE8",dataIndex:"remark"}],ee=[{field:"deptName",label:"\u90E8\u95E8\u540D\u79F0",component:"Input",colProps:{span:8}},{field:"status",label:"\u72B6\u6001",component:"Select",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]},colProps:{span:8}}],O=[{field:"deptName",label:"\u90E8\u95E8\u540D\u79F0",component:"Input",required:!0},{field:"parentDept",label:"\u4E0A\u7EA7\u90E8\u95E8",component:"TreeSelect",componentProps:{fieldNames:{label:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"orderNo",label:"\u6392\u5E8F",component:"InputNumber",required:!0},{field:"status",label:"\u72B6\u6001",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]},required:!0},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea"}],j=w({name:"DeptModal",components:{BasicModal:D,BasicForm:C},emits:["success","register"],setup(t,{emit:o}){const e=y(!0),[n,{resetFields:s,setFieldsValue:c,updateSchema:l,validate:u}]=I({labelWidth:100,baseColProps:{span:24},schemas:O,showActionButtonGroup:!1}),[a,{setModalProps:r,closeModal:F}]=P(i=>p(this,null,function*(){s(),r({confirmLoading:!1}),e.value=!!(i!=null&&i.isUpdate),b(e)&&c(f({},i.record));const h=yield L();l({field:"parentDept",componentProps:{treeData:h}})})),E=T(()=>b(e)?"\u7F16\u8F91\u90E8\u95E8":"\u65B0\u589E\u90E8\u95E8");function B(){return p(this,null,function*(){try{const i=yield u();r({confirmLoading:!0}),F(),o("success")}finally{r({confirmLoading:!1})}})}return{registerModal:a,registerForm:n,getTitle:E,handleSubmit:B}}});function V(t,o,e,n,s,c){const l=g("BasicForm"),u=g("BasicModal");return x(),R(u,A(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:$(()=>[q(l,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var z=k(j,[["render",V]]),te=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));export{z as D,te as a,Z as c,ee as s};
