var d=(e,o,p)=>new Promise((f,c)=>{var b=l=>{try{s(p.next(l))}catch(r){c(r)}},i=l=>{try{s(p.throw(l))}catch(r){c(r)}},s=l=>l.done?f(l.value):Promise.resolve(l.value).then(b,i);s((p=p.apply(e,o)).next())});import{N as y,a as k,bA as _,bc as R,cF as z,v as C,Q as u,o as V,j as T,z as n,n as a,B as m}from"./index.c77972c6.js";/* empty css               *//* empty css                */import{B as W}from"./BasicForm.1cb0e446.js";import"./componentMap.e56f5f78.js";import{u as F}from"./useForm.5f123e01.js";import"./RadioButtonGroup.29ec0324.js";import{P as $}from"./index.36f96364.js";import{a as v}from"./cascader.a582eb2d.js";/* empty css               *//* empty css               */import"./FormItem.vue_vue_type_script_lang.60aa0b9b.js";/* empty css               */import"./uniqBy.0d6271bc.js";import"./index.52c66243.js";import"./useWindowSizeFn.3455cf29.js";import"./FullscreenOutlined.dcdca408.js";/* empty css                *//* empty css              *//* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css                */import"./useFormItem.0ca96f1f.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.8a8ffec6.js";import"./base64Conver.08b9f4ec.js";import"./index.90918534.js";import"./index.c85ba8d6.js";/* empty css               *//* empty css                */import"./useContentViewHeight.06cda917.js";const L=[{value:"large",label:"large"},{value:"middle",label:"middle"},{value:"small",label:"small"},{value:"default",label:"defualt"}],E=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"fieldTime",component:"RangePicker",label:"\u65F6\u95F4\u5B57\u6BB5",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field8",component:"ApiCascader",label:"\u8054\u52A8",colProps:{span:8},componentProps:{api:v,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:e=>!(e.levelType<3)}},{field:"field9",component:"ApiCascader",label:"\u8054\u52A8\u56DE\u663E",colProps:{span:8},componentProps:{api:v,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:e=>!(e.levelType<3)}}],N=[{field:"",component:"Divider",label:"\u57FA\u7840\u5C5E\u6027",colProps:{span:24},componentProps:{orientation:"center"}},{field:"labelWidth",defaultValue:120,component:"InputNumber",label:"labelWidth",colProps:{span:24},componentProps:{size:"small"}},{field:"size",defaultValue:"default",component:"Select",label:"size",colProps:{span:24},componentProps:{options:L,size:"small"}},{field:"disabled",defaultValue:!1,component:"Switch",label:"disabled",colProps:{span:24},componentProps:{size:"small"}},{field:"compact",defaultValue:!1,component:"Switch",label:"compact",colProps:{span:24},componentProps:{size:"small"}},{field:"",component:"Divider",label:"\u7F51\u683C\u5E03\u5C40",colProps:{span:24},componentProps:{orientation:"center"}},{field:"actionColOptions.span",component:"Slider",defaultValue:24,label:"span",colProps:{span:24},componentProps:{min:1,max:24}},{field:"",component:"Divider",label:"\u64CD\u4F5C\u6309\u94AE",colProps:{span:24},componentProps:{orientation:"center"}},{field:"showActionButtonGroup",defaultValue:!0,component:"Switch",label:"\u64CD\u4F5C\u6309\u94AE",colProps:{span:24},componentProps:({formActionType:e})=>({size:"small",onChange:o=>d(void 0,null,function*(){e.updateSchema([{field:"showResetButton",componentProps:{disabled:!o}},{field:"showSubmitButton",componentProps:{disabled:!o}}])})})},{field:"showResetButton",defaultValue:!0,component:"Switch",label:"\u91CD\u7F6E\u6309\u94AE",colProps:{span:24},componentProps:{size:"small"}},{field:"showSubmitButton",defaultValue:!0,component:"Switch",label:"\u63D0\u4EA4\u6309\u94AE",colProps:{span:24},componentProps:{size:"small"}}],O=k({components:{BasicForm:W,CollapseContainer:_,PageWrapper:$,Drawer:R,Space:z},setup(){const e=C(!1),o=C(),[p]=F({labelWidth:80,schemas:N,compact:!0,actionColOptions:{span:24},showActionButtonGroup:!1}),f=()=>d(this,null,function*(){var t;yield(t=o.value)==null?void 0:t.resetFields()}),c=t=>d(this,null,function*(){yield i(t),e.value=!1}),[b,{setProps:i,setFieldsValue:s,updateSchema:l}]=F({labelWidth:120,schemas:E,actionColOptions:{span:24},fieldMapToTime:[["fieldTime",["startTime","endTime"],"YYYY-MM"]]});function r(){return d(this,null,function*(){const h=yield function(){return new Promise(D=>{setTimeout(()=>{D({field9:["430000","430100","430102"],province:"\u6E56\u5357\u7701",city:"\u957F\u6C99\u5E02",district:"\u5CB3\u9E93\u533A"})},1e3)})}(),{field9:S,province:g,city:w,district:A}=h;yield l({field:"field9",componentProps:{displayRenderArray:[g,w,A]}}),yield s({field9:S})})}return{register:b,schemas:E,handleSubmit:t=>{},setProps:i,handleLoad:r,visible:e,showDrawer:()=>{e.value=!0},settingFormRef:o,onSettings:()=>{var t;(t=o.value)==null||t.submit()},resetSettings:f,registerSetting:p,handleSubmitSetting:c}}});function G(e,o,p,f,c,b){const i=u("a-button"),s=u("Space"),l=u("BasicForm"),r=u("Drawer"),P=u("CollapseContainer"),B=u("PageWrapper");return V(),T(B,{title:"UseForm\u64CD\u4F5C\u793A\u4F8B"},{default:n(()=>[a(s,{class:"mb-4"},{default:n(()=>[a(i,{type:"primary",onClick:e.showDrawer},{default:n(()=>[m(" \u66F4\u6539\u8BBE\u7F6E ")]),_:1},8,["onClick"]),a(i,{onClick:o[0]||(o[0]=t=>e.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}}))},{default:n(()=>[m(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE ")]),_:1}),a(i,{onClick:o[1]||(o[1]=t=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}}))},{default:n(()=>[m(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ")]),_:1}),a(i,{onClick:e.handleLoad,class:"mr-2"},{default:n(()=>[m(" \u8054\u52A8\u56DE\u663E ")]),_:1},8,["onClick"])]),_:1}),a(r,{visible:e.visible,"onUpdate:visible":o[2]||(o[2]=t=>e.visible=t),title:"\u66F4\u6539\u8BBE\u7F6E",placement:"right"},{extra:n(()=>[a(s,null,{default:n(()=>[a(i,{onClick:e.resetSettings},{default:n(()=>[m("\u91CD\u7F6E\u8BBE\u7F6E")]),_:1},8,["onClick"]),a(i,{type:"primary",onClick:e.onSettings},{default:n(()=>[m("\u5E94\u7528")]),_:1},8,["onClick"])]),_:1})]),default:n(()=>[a(l,{ref:"settingFormRef",onRegister:e.registerSetting,onSubmit:e.handleSubmitSetting},null,8,["onRegister","onSubmit"])]),_:1},8,["visible"]),a(P,{title:"useForm\u793A\u4F8B"},{default:n(()=>[a(l,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Ae=y(O,[["render",G]]);export{Ae as default};
