import{B as c}from"./componentMap.e56f5f78.js";import{N as l,a as d,cE as i,Q as r,o as g,j as f,z as B,n as e,K as F}from"./index.c77972c6.js";import{B as _}from"./BasicForm.1cb0e446.js";import{u as A}from"./useForm.5f123e01.js";import"./RadioButtonGroup.29ec0324.js";import{P as C}from"./index.36f96364.js";/* empty css                */import{u as m}from"./upload.d30221a9.js";/* empty css                *//* empty css              *//* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css               */import"./useFormItem.0ca96f1f.js";/* empty css                *//* empty css                */import"./index.52c66243.js";import"./useWindowSizeFn.3455cf29.js";import"./FullscreenOutlined.dcdca408.js";/* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.8a8ffec6.js";import"./base64Conver.08b9f4ec.js";import"./index.90918534.js";import"./index.c85ba8d6.js";/* empty css               *//* empty css               */import"./FormItem.vue_vue_type_script_lang.60aa0b9b.js";import"./uniqBy.0d6271bc.js";/* empty css               *//* empty css                */import"./useContentViewHeight.06cda917.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:m}}],E=d({components:{BasicUpload:c,BasicForm:_,PageWrapper:C,[i.name]:i},setup(){const{createMessage:o}=F(),[t]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:p=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(p)}`)},uploadApi:m,register:t}}});function P(o,t,p,$,x,N){const a=r("a-alert"),s=r("BasicUpload"),n=r("BasicForm"),u=r("PageWrapper");return g(),f(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:B(()=>[e(a,{message:"\u57FA\u7840\u793A\u4F8B"}),e(s,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),e(a,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),e(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var uo=l(E,[["render",P]]);export{uo as default};