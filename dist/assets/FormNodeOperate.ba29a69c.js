import{N as v,a as k,al as g,f as D,Q as I,o as N,h as b,i as d,n as i,q as p,aC as m}from"./index.c77972c6.js";import{c as O}from"./index.d9dd42f6.js";import{u as $}from"./useFormDesignState.7423a27b.js";const B=k({name:"FormNodeOperate",components:{Icon:g},props:{schema:{type:Object,default:()=>({})},currentItem:{type:Object,default:()=>({})}},setup(e){const{formConfig:o,formDesignMethods:s}=$();return{activeClass:D(()=>e.schema.key===e.currentItem.key?"active":"unactivated"),handleDelete:()=>{const n=t=>{t.some((l,a)=>{var c;const{component:y,key:h}=l;if(["Grid","Tabs"].includes(y)&&((c=l.columns)==null||c.forEach(r=>n(r.children))),h===e.currentItem.key){let r=t.length===1?{component:""}:t.length-1>a?t[a+1]:t[a-1];return s.handleSetSelectItem(r),O(t,a),!0}})};n(o.value.schemas)},handleCopy:()=>{s.handleCopy()}}}}),F={class:"copy-delete-box"};function S(e,o,s,u,f,C){const n=I("Icon");return N(),b("div",F,[d("a",{class:p(["copy",e.activeClass]),onClick:o[0]||(o[0]=m((...t)=>e.handleCopy&&e.handleCopy(...t),["stop"]))},[i(n,{icon:"ant-design:copy-outlined"})],2),d("a",{class:p(["delete",e.activeClass]),onClick:o[1]||(o[1]=m((...t)=>e.handleDelete&&e.handleDelete(...t),["stop"]))},[i(n,{icon:"ant-design:delete-outlined"})],2)])}var V=v(B,[["render",S]]);export{V as default};