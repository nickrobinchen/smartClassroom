import{B as A}from"./TableImg.565e2cfb.js";import"./componentMap.e56f5f78.js";import{u as K}from"./useTable.b1caf103.js";import{getBasicColumns as m,getBasicShortColumns as L}from"./tableData.5504fc56.js";import{N as P,a as v,Q as g,o as N,h as $,i as p,n as t,z as u,B as n,K as M}from"./index.c77972c6.js";import{d as V}from"./table.8204aa8d.js";/* empty css                *//* empty css              *//* empty css                */import"./BasicForm.1cb0e446.js";/* empty css               *//* empty css               */import"./FormItem.vue_vue_type_script_lang.60aa0b9b.js";/* empty css               */import"./uniqBy.0d6271bc.js";import"./index.52c66243.js";import"./useWindowSizeFn.3455cf29.js";import"./FullscreenOutlined.dcdca408.js";import"./useForm.5f123e01.js";import"./RadioButtonGroup.29ec0324.js";import"./useFormItem.0ca96f1f.js";import"./index.36f96364.js";/* empty css               *//* empty css                */import"./useContentViewHeight.06cda917.js";/* empty css                *//* empty css                *//* empty css               *//* empty css                */import"./uuid.2b29000c.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b9aeb074.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./download.8a8ffec6.js";import"./base64Conver.08b9f4ec.js";import"./index.90918534.js";import"./index.c85ba8d6.js";import"./select.e19f3aa7.js";const z=v({components:{BasicTable:A},setup(){const{createMessage:e}=M();function a(){}const[l,{setLoading:i,setColumns:s,getColumns:C,getDataSource:o,getRawDataSource:c,reload:r,getPaginationRef:j,setPagination:f,getSelectRows:q,getSelectRowKeys:G,setSelectedRowKeys:d,clearSelectedRowKeys:F}]=K({canResize:!0,title:"useTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",api:V,columns:m(),defSort:{field:"name",order:"ascend"},rowKey:"id",showTableSetting:!0,onChange:a,rowSelection:{type:"checkbox"},onColumnsChange:J=>{}});function B(){i(!0),setTimeout(()=>{i(!1)},1e3)}function k(){s(L())}function S(){s(m()),r({page:1})}function b(){e.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function D(){e.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function R(){e.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function w(){e.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function E(){f({current:2}),r()}function T(){e.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function _(){e.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function h(){d(["0","1","2"])}function y(){F()}return{registerTable:l,changeLoading:B,changeColumns:k,reloadTable:S,getColumn:b,getTableData:D,getTableRawData:R,getPagination:w,setPaginationInfo:E,getSelectRowList:T,getSelectRowKeyList:_,setSelectedRowKeyList:h,clearSelect:y,onChange:a}}}),I={class:"p-4"},H={class:"mb-4"},Q={class:"mb-4"};function U(e,a,l,i,s,C){const o=g("a-button"),c=g("BasicTable");return N(),$("div",I,[p("div",H,[t(o,{class:"mr-2",onClick:e.reloadTable},{default:u(()=>[n(" \u8FD8\u539F ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.changeLoading},{default:u(()=>[n(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.changeColumns},{default:u(()=>[n(" \u66F4\u6539Columns ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getColumn},{default:u(()=>[n(" \u83B7\u53D6Columns ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getTableData},{default:u(()=>[n(" \u83B7\u53D6\u8868\u683C\u6570\u636E ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getTableRawData},{default:u(()=>[n(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.setPaginationInfo},{default:u(()=>[n(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 ")]),_:1},8,["onClick"])]),p("div",Q,[t(o,{class:"mr-2",onClick:e.getSelectRowList},{default:u(()=>[n(" \u83B7\u53D6\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:u(()=>[n(" \u83B7\u53D6\u9009\u4E2D\u884CKey ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:u(()=>[n(" \u8BBE\u7F6E\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.clearSelect},{default:u(()=>[n(" \u6E05\u7A7A\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),t(o,{class:"mr-2",onClick:e.getPagination},{default:u(()=>[n(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ")]),_:1},8,["onClick"])]),t(c,{onRegister:e.registerTable},null,8,["onRegister"])])}var Ve=P(z,[["render",U]]);export{Ve as default};
