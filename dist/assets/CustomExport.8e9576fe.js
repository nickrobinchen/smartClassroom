import{B as d}from"./TableImg.565e2cfb.js";import"./componentMap.e56f5f78.js";import{E as f}from"./index.935a5973.js";import{c as _,d as n,j as E}from"./data.1dd38dbe.js";import{u as B}from"./index.52c66243.js";import{P as C}from"./index.36f96364.js";import{N as F,a as x,Q as t,o as g,j as b,z as r,n as e,B as M}from"./index.c77972c6.js";/* empty css                *//* empty css              *//* empty css                */import"./BasicForm.1cb0e446.js";/* empty css               *//* empty css               */import"./FormItem.vue_vue_type_script_lang.60aa0b9b.js";/* empty css               */import"./uniqBy.0d6271bc.js";import"./useForm.5f123e01.js";import"./RadioButtonGroup.29ec0324.js";import"./useFormItem.0ca96f1f.js";/* empty css                *//* empty css                *//* empty css               *//* empty css                */import"./uuid.2b29000c.js";import"./useWindowSizeFn.3455cf29.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b9aeb074.js";import"./FullscreenOutlined.dcdca408.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./download.8a8ffec6.js";import"./base64Conver.08b9f4ec.js";import"./index.90918534.js";import"./index.c85ba8d6.js";/* empty css               *//* empty css                */import"./useContentViewHeight.06cda917.js";const A=x({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:C},setup(){function o({filename:m,bookType:i}){E({data:n,filename:m,write2excelOpts:{bookType:i}})}const[p,{openModal:a}]=B();return{defaultHeader:o,columns:_,data:n,register:p,openModal:a}}});function S(o,p,a,m,i,T){const s=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return g(),b(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[e(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[e(s,{onClick:o.openModal},{default:r(()=>[M(" \u5BFC\u51FA ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),e(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var Eo=F(A,[["render",S]]);export{Eo as default};
