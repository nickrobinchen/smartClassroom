import{e as d}from"./formItemPropsConfig.5f6bc376.js";import{N as C,a as y,dL as I,I as P,F as _,dX as v,cb as b,C as h,c9 as k,cG as F,Q as p,o as r,h as m,j as n,z as a,H as g,U as E,a3 as w,S,l as s,bU as U}from"./index.c77972c6.js";/* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css                */import $ from"./RuleProps.2516fd53.js";import{u as A}from"./useFormDesignState.7423a27b.js";import"./formItemConfig.b9a796dd.js";import"./componentMap.e56f5f78.js";/* empty css                *//* empty css                *//* empty css               *//* empty css                *//* empty css               */import"./useFormItem.0ca96f1f.js";import"./RadioButtonGroup.29ec0324.js";/* empty css                *//* empty css                */import"./index.52c66243.js";import"./useWindowSizeFn.3455cf29.js";import"./FullscreenOutlined.dcdca408.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.8a8ffec6.js";import"./base64Conver.08b9f4ec.js";import"./index.90918534.js";import"./index.c85ba8d6.js";import"./index.d9dd42f6.js";const B=y({name:"FormItemProps",components:{RuleProps:$,Empty:I,Input:P,Form:_,FormItem:v,Switch:b,Checkbox:h,Select:k,Slider:F},setup(){const{formConfig:o}=A();return{baseItemColumnProps:d,formConfig:o,showProps:t=>t&&U(t)?!t.includes(o.value.currentItem.component):!0}}}),D={class:"properties-content"},L={key:0,class:"properties-body"};function N(o,i,t,j,z,G){const c=p("Empty"),l=p("FormItem"),u=p("Form");return r(),m("div",D,[o.formConfig.currentItem?(r(),m("div",L,[o.formConfig.currentItem.key?(r(),n(u,{key:1,"label-align":"left",layout:"vertical"},{default:a(()=>[(r(!0),m(g,null,E(o.baseItemColumnProps,e=>(r(),m("div",{key:e.name},[o.showProps(e.exclude)?(r(),n(l,{key:0,label:e.label},{default:a(()=>[o.formConfig.currentItem.colProps?(r(),n(w(e.component),S({key:0,class:"component-props"},e.componentProps,{value:o.formConfig.currentItem.colProps[e.name],"onUpdate:value":f=>o.formConfig.currentItem.colProps[e.name]=f}),null,16,["value","onUpdate:value"])):s("",!0)]),_:2},1032,["label"])):s("",!0)]))),128))]),_:1})):(r(),n(c,{key:0,class:"hint-box",description:"\u672A\u9009\u62E9\u63A7\u4EF6"}))])):s("",!0)])}var _o=C(B,[["render",N]]);export{_o as default};