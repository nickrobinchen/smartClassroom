var p=Object.defineProperty,u=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var r=(e,o,t)=>o in e?p(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,n=(e,o)=>{for(var t in o||(o={}))f.call(o,t)&&r(e,t,o[t]);if(s)for(var t of s(o))v.call(o,t)&&r(e,t,o[t]);return e},i=(e,o)=>u(e,c(o));import{r as b,a as C}from"./index.d9dd42f6.js";import w from"./PreviewCode.abc84857.js";import{N as D,a as _,bI as h,w as M,f as A,ar as J,Q as l,o as V,j as $,z as j,n as x}from"./index.c77972c6.js";import"./index.38dc1bc1.js";import"./useWindowSizeFn.3455cf29.js";const y=`<template>
  <div>
    <v-form-create
      :formConfig="formConfig"
      :formData="formData"
      v-model="fApi"
    />
    <a-button @click="submit">\u63D0\u4EA4</a-button>
  </div>
</template>
<script>

export default {
  name: 'Demo',
  data () {
    return {
      fApi:{},
      formData:{},
      formConfig: `;let N=`
    }
  },
  methods: {
    async submit() {
      const data = await this.fApi.submit()
      console.log(data)
     }
  }
}
<\/script>`;const g=_({name:"CodeModal",components:{PreviewCode:w,Modal:h},setup(){const e=M({visible:!1,jsonData:{}}),o=a=>{a.schemas&&C(a.schemas),e.visible=!0,e.jsonData=a},t=A(()=>y+JSON.stringify(b(e.jsonData),null,"	")+N);return i(n({},J(e)),{editorVueJson:t,showModal:o})}});function k(e,o,t,a,E,P){const d=l("PreviewCode"),m=l("Modal");return V(),$(m,{title:"\u4EE3\u7801",footer:null,visible:e.visible,onCancel:o[0]||(o[0]=B=>e.visible=!1),wrapClassName:"v-code-modal",style:{top:"20px"},width:"850px",destroyOnClose:!0},{default:j(()=>[x(d,{editorJson:e.editorVueJson,fileFormat:"vue"},null,8,["editorJson"])]),_:1},8,["visible"])}var Q=D(g,[["render",k]]);export{Q as default};
