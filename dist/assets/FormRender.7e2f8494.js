import g from"./index.96f0b120.js";import{N as C,a as y,R,J as $,Q as t,o as r,j as n,z as s,h as a,H as p,U as i,T as v,V as k}from"./index.c77972c6.js";/* empty css               */import"./formItemConfig.b9a796dd.js";import"./componentMap.e56f5f78.js";/* empty css                *//* empty css              *//* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css               */import"./useFormItem.0ca96f1f.js";import"./RadioButtonGroup.29ec0324.js";/* empty css                *//* empty css                */import"./index.52c66243.js";import"./useWindowSizeFn.3455cf29.js";import"./FullscreenOutlined.dcdca408.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.8a8ffec6.js";import"./base64Conver.08b9f4ec.js";import"./index.90918534.js";import"./index.c85ba8d6.js";import"./index.d9dd42f6.js";import"./useFormDesignState.7423a27b.js";const D=y({name:"FormRender",components:{VFormItem:g,Row:R,Col:$},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,default:()=>({})},formConfig:{type:Object,default:()=>[]},setFormModel:{type:Function,default:null}},emits:["change","submit","reset"],setup(o){}});function M(o,e,b,w,j,N){const l=t("FormRender",!0),f=t("Col"),d=t("Row"),u=t("VFormItem");return["Grid"].includes(o.schema.component)?(r(),n(d,{key:0,class:"grid-row"},{default:s(()=>[(r(!0),a(p,null,i(o.schema.columns,(m,c)=>(r(),n(f,{class:"grid-col",key:c,span:m.span},{default:s(()=>[(r(!0),a(p,null,i(m.children,(F,h)=>(r(),n(l,{key:h,schema:F,formData:o.formData,formConfig:o.formConfig,setFormModel:o.setFormModel},null,8,["schema","formData","formConfig","setFormModel"]))),128))]),_:2},1032,["span"]))),128))]),_:1})):(r(),n(u,{key:1,formConfig:o.formConfig,schema:o.schema,formData:o.formData,setFormModel:o.setFormModel,onChange:e[0]||(e[0]=m=>o.$emit("change",{schema:o.schema,value:m})),onSubmit:e[1]||(e[1]=m=>o.$emit("submit",o.schema)),onReset:e[2]||(e[2]=m=>o.$emit("reset"))},v({_:2},[o.schema.componentProps&&o.schema.componentProps.slotName?{name:o.schema.componentProps.slotName,fn:s(()=>[k(o.$slots,o.schema.componentProps.slotName)]),key:"0"}:void 0]),1032,["formConfig","schema","formData","setFormModel"]))}var ao=C(D,[["render",M]]);export{ao as default};
