var v=(a,r,n)=>new Promise((m,p)=>{var e=o=>{try{i(n.next(o))}catch(t){p(t)}},u=o=>{try{i(n.throw(o))}catch(t){p(t)}},i=o=>o.done?m(o.value):Promise.resolve(o.value).then(e,u);i((n=n.apply(a,r)).next())});import{B as $}from"./BasicForm.1cb0e446.js";import"./componentMap.e56f5f78.js";import{u as h}from"./useForm.5f123e01.js";import"./RadioButtonGroup.29ec0324.js";import{N as k,a as F,bA as I,I as C,cO as g,v as y,Q as d,o as c,j as f,z as l,n as _,B,l as b}from"./index.c77972c6.js";import{P as q}from"./index.36f96364.js";/* empty css               *//* empty css               */import"./FormItem.vue_vue_type_script_lang.60aa0b9b.js";/* empty css               */import"./uniqBy.0d6271bc.js";import"./index.52c66243.js";import"./useWindowSizeFn.3455cf29.js";import"./FullscreenOutlined.dcdca408.js";/* empty css                *//* empty css              *//* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css                */import"./useFormItem.0ca96f1f.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.8a8ffec6.js";import"./base64Conver.08b9f4ec.js";import"./index.90918534.js";import"./index.c85ba8d6.js";/* empty css               *//* empty css                */import"./useContentViewHeight.06cda917.js";const A=F({components:{BasicForm:$,CollapseContainer:I,PageWrapper:q,[C.name]:C,Button:g},setup(){const[a,{appendSchemaByField:r,removeSchemaByField:n,validate:m}]=h({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",required:!0},{field:"0",component:"Input",label:" ",slot:"add"}],labelWidth:100,actionColOptions:{span:24},baseColProps:{span:8}});function p(){return v(this,null,function*(){try{const t=yield m()}catch(t){}})}const e=y(1);function u(){r({field:`field${e.value}a`,component:"Input",label:"\u5B57\u6BB5"+e.value,required:!0},""),r({field:`field${e.value}b`,component:"Input",label:"\u5B57\u6BB5"+e.value,required:!0},""),r({field:`${e.value}`,component:"Input",label:" ",slot:"add"},""),e.value++}function i(){r([{field:`field${e.value}a`,component:"Input",label:"\u5B57\u6BB5"+e.value,required:!0},{field:`field${e.value}b`,component:"Input",label:"\u5B57\u6BB5"+e.value,required:!0},{field:`${e.value}`,component:"Input",label:" ",slot:"add"}],""),e.value++}function o(t){n([`field${t}a`,`field${t}b`,`${t}`]),e.value--}return{register:a,handleSubmit:p,add:u,del:o,batchAdd:i}}});function N(a,r,n,m,p,e){const u=d("Button"),i=d("BasicForm"),o=d("CollapseContainer"),t=d("PageWrapper");return c(),f(t,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:l(()=>[_(o,{title:"\u8868\u5355\u589E\u5220"},{default:l(()=>[_(i,{onRegister:a.register,onSubmit:a.handleSubmit},{add:l(({field:s})=>[Number(s)===0?(c(),f(u,{key:0,onClick:a.add},{default:l(()=>[B("+")]),_:1},8,["onClick"])):b("",!0),Number(s)===0?(c(),f(u,{key:1,class:"ml-2",onClick:a.batchAdd},{default:l(()=>[B(" \u6279\u91CF\u6DFB\u52A0\u8868\u5355\u914D\u7F6E ")]),_:1},8,["onClick"])):b("",!0),s>0?(c(),f(u,{key:2,onClick:S=>a.del(s)},{default:l(()=>[B("-")]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var fe=k(A,[["render",N]]);export{fe as default};