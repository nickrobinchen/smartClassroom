var m=(e,r,n)=>new Promise((d,a)=>{var p=t=>{try{o(n.next(t))}catch(i){a(i)}},u=t=>{try{o(n.throw(t))}catch(i){a(i)}},o=t=>t.done?d(t.value):Promise.resolve(t.value).then(p,u);o((n=n.apply(e,r)).next())});import{B as s}from"./TableImg.565e2cfb.js";import"./componentMap.e56f5f78.js";import{u as c}from"./useTable.b1caf103.js";import{o as l}from"./select.e19f3aa7.js";import{d as C}from"./table.8204aa8d.js";import{t as F}from"./tree.5ba9b737.js";import{N as E,a as f,Q as b,o as h,h as B,n as D,b8 as x,cC as A,K as v}from"./index.c77972c6.js";/* empty css                *//* empty css                *//* empty css              *//* empty css                */import"./BasicForm.1cb0e446.js";/* empty css               *//* empty css               */import"./FormItem.vue_vue_type_script_lang.60aa0b9b.js";/* empty css               */import"./uniqBy.0d6271bc.js";import"./index.52c66243.js";import"./useWindowSizeFn.3455cf29.js";import"./FullscreenOutlined.dcdca408.js";import"./useForm.5f123e01.js";import"./RadioButtonGroup.29ec0324.js";import"./useFormItem.0ca96f1f.js";import"./index.36f96364.js";/* empty css               *//* empty css                */import"./useContentViewHeight.06cda917.js";/* empty css                *//* empty css                *//* empty css               *//* empty css                */import"./uuid.2b29000c.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b9aeb074.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./download.8a8ffec6.js";import"./base64Conver.08b9f4ec.js";import"./index.90918534.js";import"./index.c85ba8d6.js";const w=[{title:"\u8F93\u5165\u6846",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",edit:!0,editRule:e=>m(void 0,null,function*(){return e==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""}),width:200},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200,editComponentProps:()=>({max:100,min:0}),editRender:({text:e})=>x(A,{percent:Number(e)})},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:l,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name8",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:F,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"\u52FE\u9009\u6846",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"\u662F":"\u5426",width:200},{title:"\u5F00\u5173",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"\u5F00":"\u5173",width:200},{title:"\u5355\u9009\u6846",dataIndex:"radio1",edit:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u5355\u9009\u6309\u94AE\u6846",dataIndex:"radio2",edit:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u5355\u9009\u6846",dataIndex:"radio3",edit:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:l,resultField:"list",labelField:"name",valueField:"id"},width:200}],I=f({components:{BasicTable:s},setup(){const[e]=c({title:"\u53EF\u7F16\u8F91\u5355\u5143\u683C\u793A\u4F8B",api:C,columns:w,showIndexColumn:!1,bordered:!0}),{createMessage:r}=v();function n({record:u,index:o,key:t,value:i}){return!1}function d({value:u,key:o,id:t}){return r.loading({content:`\u6B63\u5728\u6A21\u62DF\u4FDD\u5B58${o}`,key:"_save_fake_data",duration:0}),new Promise(i=>{setTimeout(()=>{u===""?(r.error({content:"\u4FDD\u5B58\u5931\u8D25\uFF1A\u4E0D\u80FD\u4E3A\u7A7A",key:"_save_fake_data",duration:2}),i(!1)):(r.success({content:`\u8BB0\u5F55${t}\u7684${o}\u5DF2\u4FDD\u5B58`,key:"_save_fake_data",duration:2}),i(!0))},2e3)})}function a(xe){return m(this,arguments,function*({record:u,index:o,key:t,value:i}){return yield d({id:u.id,key:t,value:i})})}function p(){}return{registerTable:e,handleEditEnd:n,handleEditCancel:p,beforeEditSubmit:a}}}),_={class:"p-4"};function k(e,r,n,d,a,p){const u=b("BasicTable");return h(),B("div",_,[D(u,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel,beforeEditSubmit:e.beforeEditSubmit},null,8,["onRegister","onEditEnd","onEditCancel","beforeEditSubmit"])])}var Be=E(I,[["render",k]]);export{Be as default};
