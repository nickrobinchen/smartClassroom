var X=Object.defineProperty;var y=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var E=(o,n,t)=>n in o?X(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,j=(o,n)=>{for(var t in n||(n={}))L.call(n,t)&&E(o,t,n[t]);if(y)for(var t of y(n))$.call(n,t)&&E(o,t,n[t]);return o};var A=(o,n)=>{var t={};for(var s in o)L.call(o,s)&&n.indexOf(s)<0&&(t[s]=o[s]);if(o!=null&&y)for(var s of y(o))n.indexOf(s)<0&&$.call(o,s)&&(t[s]=o[s]);return t};var P=(o,n,t)=>new Promise((s,F)=>{var d=a=>{try{f(t.next(a))}catch(i){F(i)}},g=a=>{try{f(t.throw(a))}catch(i){F(i)}},f=a=>a.done?s(a.value):Promise.resolve(a.value).then(d,g);f((t=t.apply(o,n)).next())});import G from"./FormRender.7e2f8494.js";import{dU as K,dV as Y,F as J,a0 as D,a7 as Z,a4 as x,c1 as O,N as I,a as oo,R as B,J as eo,v as to,f as w,dW as no,bw as ro,ay as H,Q as R,o as V,h as W,n as z,z as k,H as so,U as ao,j as io,T as mo,V as lo,W as co,X as fo,S as uo,k as po}from"./index.c77972c6.js";/* empty css               *//* empty css               */import{b as Fo,f as U}from"./index.d9dd42f6.js";import"./index.96f0b120.js";import"./formItemConfig.b9a796dd.js";import"./componentMap.e56f5f78.js";/* empty css                *//* empty css              *//* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css               */import"./useFormItem.0ca96f1f.js";import"./RadioButtonGroup.29ec0324.js";/* empty css                *//* empty css                */import"./index.52c66243.js";import"./useWindowSizeFn.3455cf29.js";import"./FullscreenOutlined.dcdca408.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.8a8ffec6.js";import"./base64Conver.08b9f4ec.js";import"./index.90918534.js";import"./index.c85ba8d6.js";import"./useFormDesignState.7423a27b.js";function go(o){return typeof o=="function"?o:K}function q(o,n){return o&&Y(o,go(n))}function ho(o,n,t,s){(()=>{const u=x(),h=u==null?void 0:u.parent;!h||o.formConfig.schemas.forEach(m=>{q(m.componentProps,(M,e)=>{O(M)&&(m.componentProps[e]=M.bind(h))}),q(m.on,(M,e)=>{O(M)&&(m.componentProps[e]=M.bind(h))})})})();const{emit:d}=t,g=J.useForm,{resetFields:f,validate:a,clearValidate:i,validateField:C}=g(n,[]);return{validate:a,validateField:C,resetFields:f,clearValidate:i,submit:()=>P(this,null,function*(){var h,m;const u=D(Z(n.value));return d==null||d("submit",u),(m=(h=o.formConfig).submit)==null||m.call(h,u),u})}}function Co(o,n,t,s){const F=e=>Fo(o.formConfig.schemas,r=>r.field===e),d=(e,r,l)=>{const c=F(e);c&&(c[r]=l)},g=(e,r,l)=>{const c=F(e);c!=null&&c.componentProps&&(["options","treeData"].includes(r)&&f(e,void 0),c.componentProps[r]=l)},f=(e,r)=>{var l;typeof e=="string"?(o.formModel[e]=r,(l=t.value)==null||l.validateField(e,r,[])):Object.keys(e).forEach(p=>{var b;o.formModel[p]=e[p],(b=t.value)==null||b.validateField(p,e[p],[])})},a=(e,r)=>{o.formConfig[e]=r},i=e=>D(o.formModel)[e],C=()=>P(this,null,function*(){return D(o.formModel)}),v=e=>{d(e,"hidden",!0)},u=e=>{typeof e=="string"?g(e,"disabled",!0):a("disabled",e!==!1)},h=e=>{d(e,"hidden",!1)},m={};return(e=>{U(e,r=>{U(e,l=>{var c;m[l.field]||(m[l.field]=new Set),((c=r.link)==null?void 0:c.includes(l.field))&&O(r.update)&&m[l.field].add(r)}),m[r.field].add(r)})})(o.formConfig.schemas),j({linkOn:m,setValue:f,getValue:i,hidden:v,show:h,set:d,get:F,setProps:g,getData:C,disable:u},s)}const Mo=oo({name:"VFormCreate",components:{FormRender:G,Form:J,Row:B},props:{fApi:{type:Object},formModel:{type:Object,default:()=>({})},formConfig:{type:Object,required:!0}},emits:["submit","change","update:fApi","update:formModel"],setup(o,n){const t=o.formConfig.layout=="vertical"?eo:B,{emit:s}=n,F=to(null),d=w({get:()=>o.formModel,set:p=>s("update:formModel",p)}),g=w(()=>o.formConfig.schemas&&o.formConfig.schemas.filter(p=>p.hidden!==!0)),f=no(o,"fApi",s),{submit:a,validate:i,clearValidate:C,resetFields:v,validateField:u}=ho(o,d,n),c=Co({formConfig:o.formConfig,formData:o.formModel},n,F,{submit:a,validate:i,validateField:u,resetFields:v,clearValidate:C}),{linkOn:h}=c,m=A(c,["linkOn"]);f.value=m;const M=p=>{var S;const{schema:b,value:Q}=p,{field:T}=po(b);(S=h[T])==null||S.forEach(_=>{var N;(N=_.update)==null||N.call(_,Q,_,f.value)})},e=w(()=>ro(o.formConfig,["disabled","labelWidth","schemas"])),r=()=>{a()};H("formModel",d);const l=(p,b)=>{d.value[p]=b};return H("setFormModelMethod",l),{eFormModel:F,submit:a,validate:i,validateField:u,resetFields:v,clearValidate:C,handleChange:M,formModelProps:e,handleSubmit:r,setFormModel:l,formModelNew:d,wrapperComp:t,noHiddenList:g}}}),bo={class:"v-form-container"};function vo(o,n,t,s,F,d){const g=R("FormRender"),f=R("Row"),a=R("Form");return V(),W("div",bo,[z(a,uo({class:"v-form-model",ref:"eFormModel",model:o.formModel},o.formModelProps),{default:k(()=>[z(f,null,{default:k(()=>[(V(!0),W(so,null,ao(o.noHiddenList,(i,C)=>(V(),io(g,{key:C,schema:i,formConfig:o.formConfig,formData:o.formModelNew,onChange:o.handleChange,setFormModel:o.setFormModel,onSubmit:o.handleSubmit,onReset:o.resetFields},mo({_:2},[i&&i.componentProps?{name:"schema.componentProps!.slotName",fn:k(()=>[lo(o.$slots,i.componentProps.slotName,co(fo({formModel:o.formModel,field:i.field,schema:i})),void 0,!0)]),key:"0"}:void 0]),1032,["schema","formConfig","formData","onChange","setFormModel","onSubmit","onReset"]))),128))]),_:3})]),_:3},16,["model"])])}var te=I(Mo,[["render",vo],["__scopeId","data-v-0905ebe6"]]);export{te as default};