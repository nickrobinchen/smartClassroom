var F=Object.defineProperty,y=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var _=(e,o,a)=>o in e?F(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,p=(e,o)=>{for(var a in o||(o={}))I.call(o,a)&&_(e,a,o[a]);if(C)for(var a of C(o))M.call(o,a)&&_(e,a,o[a]);return e},c=(e,o)=>y(e,E(o));import{u as D}from"./useFormDesignState.7423a27b.js";import{f as B,g as j}from"./index.d9dd42f6.js";import{C as J,M as U}from"./index.38dc1bc1.js";import{N as g,a as w,cD as N,bI as O,w as S,ar as k,Q as r,o as x,j as $,z as n,n as l,B as i,i as h,K,dN as T,dO as V}from"./index.c77972c6.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.3455cf29.js";const z=w({name:"ImportJsonModal",components:{CodeEditor:J,Upload:N,Modal:O},setup(){const{createMessage:e}=K(),o=S({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "\u8F93\u5165\u6846",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=D(),u=()=>{o.visible=!1},m=()=>{o.visible=!0},d=()=>{try{const s=JSON.parse(o.json);s.schemas&&B(s.schemas,t=>{j(t)}),a.setFormConfig(c(p({},s),{activeKey:1,currentItem:{component:""}})),u(),e.success("\u5BFC\u5165\u6210\u529F")}catch(s){e.error("\u5BFC\u5165\u5931\u8D25\uFF0C\u6570\u636E\u683C\u5F0F\u4E0D\u5BF9")}};return c(p({handleImportJson:d,beforeUpload:s=>{const t=new FileReader;return t.readAsText(s),t.onload=function(){o.json=this.result,d()},!1},handleCancel:u,showModal:m},k(o)),{MODE:U})}}),A=e=>(T("data-v-69289c55"),e=e(),V(),e),L=A(()=>h("p",{class:"hint-box"},"\u5BFC\u5165\u683C\u5F0F\u5982\u4E0B:",-1)),R={class:"v-json-box"};function Q(e,o,a,u,m,d){const f=r("CodeEditor"),s=r("a-button"),t=r("Upload"),b=r("Modal");return x(),$(b,{title:"JSON\u6570\u636E",visible:e.visible,onOk:e.handleImportJson,onCancel:e.handleCancel,cancelText:"\u5173\u95ED",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(s,{onClick:e.handleCancel},{default:n(()=>[i("\u53D6\u6D88")]),_:1},8,["onClick"]),l(t,{class:"upload-button",beforeUpload:e.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(s,{type:"primary"},{default:n(()=>[i("\u5BFC\u5165json\u6587\u4EF6")]),_:1})]),_:1},8,["beforeUpload"]),l(s,{type:"primary",onClick:e.handleImportJson},{default:n(()=>[i("\u786E\u5B9A")]),_:1},8,["onClick"])]),default:n(()=>[L,h("div",R,[l(f,{value:e.json,"onUpdate:value":o[0]||(o[0]=v=>e.json=v),ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["visible","onOk","onCancel"])}var ee=g(z,[["render",Q],["__scopeId","data-v-69289c55"]]);export{ee as default};
