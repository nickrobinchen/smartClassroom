var d=(o,i,r)=>new Promise((m,s)=>{var c=e=>{try{t(r.next(e))}catch(l){s(l)}},a=e=>{try{t(r.throw(e))}catch(l){s(l)}},t=e=>e.done?m(e.value):Promise.resolve(e.value).then(c,a);t((r=r.apply(o,i)).next())});import{B as P}from"./BasicForm.1cb0e446.js";import"./componentMap.e56f5f78.js";import{u as b}from"./useForm.5f123e01.js";import"./RadioButtonGroup.29ec0324.js";import A from"./PersonTable.796b5b69.js";import{P as F}from"./index.36f96364.js";import{N as g,a as v,dy as B,v as C,Q as p,o as D,j as h,z as n,n as u,B as k}from"./index.c77972c6.js";/* empty css                *//* empty css               *//* empty css               *//* empty css               */import"./FormItem.vue_vue_type_script_lang.60aa0b9b.js";/* empty css               */import"./uniqBy.0d6271bc.js";import"./index.52c66243.js";import"./useWindowSizeFn.3455cf29.js";import"./FullscreenOutlined.dcdca408.js";/* empty css                *//* empty css              *//* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css                */import"./useFormItem.0ca96f1f.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.8a8ffec6.js";import"./base64Conver.08b9f4ec.js";import"./index.90918534.js";import"./index.c85ba8d6.js";import"./TableImg.565e2cfb.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b9aeb074.js";/* empty css                */import"./useTable.b1caf103.js";/* empty css               *//* empty css                */import"./useContentViewHeight.06cda917.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],_=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],q=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:_},required:!0,colProps:{offset:2}}],y=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:_},required:!0,colProps:{offset:2}}];const T=v({name:"FormHightPage",components:{BasicForm:P,PersonTable:A,PageWrapper:F,[B.name]:B},setup(){const o=C(null),[i,{validate:r}]=b({layout:"vertical",baseColProps:{span:6},schemas:q,showActionButtonGroup:!1}),[m,{validate:s}]=b({layout:"vertical",baseColProps:{span:6},schemas:y,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{o.value;const[a,t]=yield Promise.all([r(),s()])}catch(a){}})}return{register:i,registerTask:m,submitAll:c,tableRef:o}}});function R(o,i,r,m,s,c){const a=p("BasicForm"),t=p("a-card"),e=p("PersonTable"),l=p("a-button"),E=p("PageWrapper");return D(),h(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:n(()=>[u(l,{type:"primary",onClick:o.submitAll},{default:n(()=>[k(" \u63D0\u4EA4 ")]),_:1},8,["onClick"])]),default:n(()=>[u(t,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:n(()=>[u(a,{onRegister:o.register},null,8,["onRegister"])]),_:1}),u(t,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:n(()=>[u(a,{onRegister:o.registerTask},null,8,["onRegister"])]),_:1}),u(t,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:n(()=>[u(e,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var ve=g(T,[["render",R],["__scopeId","data-v-0532f554"]]);export{ve as default};