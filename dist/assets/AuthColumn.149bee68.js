import{B as m}from"./TableImg.565e2cfb.js";import{T as d}from"./componentMap.e56f5f78.js";import{u as c}from"./useTable.b1caf103.js";import{d as F}from"./table.8204aa8d.js";import{N as h,a as b,Q as a,o as r,h as f,n as B,z as A,j as C,l as w}from"./index.c77972c6.js";/* empty css                *//* empty css              *//* empty css                */import"./BasicForm.1cb0e446.js";/* empty css               *//* empty css               */import"./FormItem.vue_vue_type_script_lang.60aa0b9b.js";/* empty css               */import"./uniqBy.0d6271bc.js";import"./index.52c66243.js";import"./useWindowSizeFn.3455cf29.js";import"./FullscreenOutlined.dcdca408.js";import"./useForm.5f123e01.js";import"./RadioButtonGroup.29ec0324.js";import"./useFormItem.0ca96f1f.js";import"./index.36f96364.js";/* empty css               *//* empty css                */import"./useContentViewHeight.06cda917.js";/* empty css                *//* empty css                *//* empty css               *//* empty css                */import"./uuid.2b29000c.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b9aeb074.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./download.8a8ffec6.js";import"./base64Conver.08b9f4ec.js";import"./index.90918534.js";import"./index.c85ba8d6.js";const T=[{title:"\u7F16\u53F7",dataIndex:"no",width:100},{title:"\u59D3\u540D",dataIndex:"name",width:200,auth:"test"},{title:"\u72B6\u6001",dataIndex:"status"},{title:"\u72B6\u60011",dataIndex:"status1"},{title:"\u72B6\u60012",dataIndex:"status2"},{title:"\u72B6\u60013",dataIndex:"status3"},{title:"\u72B6\u60014",dataIndex:"status4"},{title:"\u72B6\u60015",dataIndex:"status5"},{title:"\u5730\u5740",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],I=b({components:{BasicTable:m,TableAction:d},setup(){const[t]=c({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:F,columns:T,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:250,title:"Action",dataIndex:"action"}});function u(o){}function i(o){}function n(o){}return{registerTable:t,handleEdit:u,handleDelete:i,handleOpen:n}}}),x={class:"p-4"};function _(t,u,i,n,o,E){const l=a("TableAction"),p=a("BasicTable");return r(),f("div",x,[B(p,{onRegister:t.registerTable},{bodyCell:A(({column:s,record:e})=>[s.key==="action"?(r(),C(l,{key:0,actions:[{label:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,e),auth:"other"},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,e),auth:"super"}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,e)},ifShow:g=>e.status!=="enable"},{label:"\u7981\u7528",popConfirm:{title:"\u662F\u5426\u7981\u7528\uFF1F",confirm:t.handleOpen.bind(null,e)},ifShow:()=>e.status==="enable"},{label:"\u540C\u65F6\u63A7\u5236",popConfirm:{title:"\u662F\u5426\u52A8\u6001\u663E\u793A\uFF1F",confirm:t.handleOpen.bind(null,e)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])])}var bt=h(I,[["render",_]]);export{bt as default};