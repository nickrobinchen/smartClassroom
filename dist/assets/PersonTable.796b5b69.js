import{B as h}from"./TableImg.565e2cfb.js";import{T as C}from"./componentMap.e56f5f78.js";import{u as w}from"./useTable.b1caf103.js";import{N as E,a as B,Q as u,o as d,h as _,n as c,z as f,j as D,l as N,B as T}from"./index.c77972c6.js";/* empty css                *//* empty css              *//* empty css                */import"./BasicForm.1cb0e446.js";/* empty css               *//* empty css               */import"./FormItem.vue_vue_type_script_lang.60aa0b9b.js";/* empty css               */import"./uniqBy.0d6271bc.js";import"./index.52c66243.js";import"./useWindowSizeFn.3455cf29.js";import"./FullscreenOutlined.dcdca408.js";import"./useForm.5f123e01.js";import"./RadioButtonGroup.29ec0324.js";import"./useFormItem.0ca96f1f.js";import"./index.36f96364.js";/* empty css               *//* empty css                */import"./useContentViewHeight.06cda917.js";/* empty css                *//* empty css                *//* empty css               *//* empty css                */import"./uuid.2b29000c.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b9aeb074.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./download.8a8ffec6.js";import"./base64Conver.08b9f4ec.js";import"./index.90918534.js";import"./index.c85ba8d6.js";const g=[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",editRow:!0},{title:"\u5DE5\u53F7",dataIndex:"no",editRow:!0},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"dept",editRow:!0}],x=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],y=B({components:{BasicTable:h,TableAction:C},setup(){const[e,{getDataSource:n}]=w({columns:g,showIndexColumn:!1,dataSource:x,actionColumn:{width:160,title:"\u64CD\u4F5C",dataIndex:"action"},scroll:{y:"100%"},pagination:!1});function i(t){var o;(o=t.onEdit)==null||o.call(t,!0)}function m(t){var o;if((o=t.onEdit)==null||o.call(t,!1),t.isNew){const a=n(),b=a.findIndex(k=>k.key===t.key);a.splice(b,1)}}function r(t){var o;(o=t.onEdit)==null||o.call(t,!1,!0)}function s(t){}function l(){const t=n(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};t.push(o)}function p(t,o){return t.editable?[{label:"\u4FDD\u5B58",onClick:r.bind(null,t,o)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:m.bind(null,t,o)}}]:[{label:"\u7F16\u8F91",onClick:i.bind(null,t)},{label:"\u5220\u9664"}]}return{registerTable:e,handleEdit:i,createActions:p,handleAdd:l,getDataSource:n,handleEditChange:s}}});function F(e,n,i,m,r,s){const l=u("TableAction"),p=u("BasicTable"),t=u("a-button");return d(),_("div",null,[c(p,{onRegister:e.registerTable,onEditChange:e.handleEditChange},{bodyCell:f(({column:o,record:a})=>[o.key==="action"?(d(),D(l,{key:0,actions:e.createActions(a,o)},null,8,["actions"])):N("",!0)]),_:1},8,["onRegister","onEditChange"]),c(t,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:f(()=>[T(" \u65B0\u589E\u6210\u5458 ")]),_:1},8,["onClick"])])}var ht=E(y,[["render",F]]);export{ht as default};
