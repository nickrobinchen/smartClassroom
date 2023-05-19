var Le=Object.defineProperty;var ve=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var ge=(e,r,o)=>r in e?Le(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,w=(e,r)=>{for(var o in r||(r={}))Pe.call(r,o)&&ge(e,o,r[o]);if(ve)for(var o of ve(r))Me.call(r,o)&&ge(e,o,r[o]);return e};var D=(e,r,o)=>new Promise((p,h)=>{var b=l=>{try{i(o.next(l))}catch(u){h(u)}},c=l=>{try{i(o.throw(l))}catch(u){h(u)}},i=l=>l.done?p(l.value):Promise.resolve(l.value).then(b,c);i((o=o.apply(e,r)).next())});import{ax as Ne,aw as ke,a as De,F as Ve,cO as _e,cP as He,J as Be,Z as B,f as _,c as ze,N as Ce,Q as U,o as q,j as X,z as H,i as Ue,aD as Ye,n as le,V as Y,S as te,B as ue,t as de,l as re,W as ie,aJ as W,ch as J,O as ne,k as n,a1 as ce,cj as he,cQ as Q,cR as me,a0 as K,bH as We,$ as ee,cS as Ge,bu as qe,aL as je,aI as Ke,a4 as Xe,az as be,a7 as Fe,cT as Oe,cK as we,cN as Re,cU as Je,M as Qe,R as Ze,w as Te,v as x,b as xe,a2 as et,X as fe,h as tt,H as nt,U as pe,T as Ie,G as ot}from"./index.c77972c6.js";/* empty css               *//* empty css               */import{d as st,h as at,a as Se,_ as rt}from"./FormItem.vue_vue_type_script_lang.60aa0b9b.js";import{u as it}from"./uniqBy.0d6271bc.js";import{a as ct}from"./index.52c66243.js";const $e=Symbol();function lt(e){return ke(e,$e)}function ut(){return Ne($e)}const dt=De({name:"BasicFormAction",components:{FormItem:Ve.Item,Button:_e,BasicArrow:He,[Be.name]:Be},props:{showActionButtonGroup:B.bool.def(!0),showResetButton:B.bool.def(!0),showSubmitButton:B.bool.def(!0),showAdvancedButton:B.bool.def(!0),resetButtonOptions:{type:Object,default:()=>({})},submitButtonOptions:{type:Object,default:()=>({})},actionColOptions:{type:Object,default:()=>({})},actionSpan:B.number.def(6),isAdvanced:B.bool,hideAdvanceBtn:B.bool},emits:["toggle-advanced"],setup(e,{emit:r}){const{t:o}=ze(),p=_(()=>{const{showAdvancedButton:i,actionSpan:l,actionColOptions:u}=e,v=24-l,O=i?{span:v<6?24:v}:{};return w(w({style:{textAlign:"right"},span:i?6:4},O),u)}),h=_(()=>Object.assign({text:o("common.resetText")},e.resetButtonOptions)),b=_(()=>Object.assign({text:o("common.queryText")},e.submitButtonOptions));function c(){r("toggle-advanced")}return w({t:o,actionColOpt:p,getResetBtnOptions:h,getSubmitBtnOptions:b,toggleAdvanced:c},ut())}});function ft(e,r,o,p,h,b){const c=U("Button"),i=U("BasicArrow"),l=U("FormItem"),u=U("a-col");return e.showActionButtonGroup?(q(),X(u,ie(te({key:0},e.actionColOpt)),{default:H(()=>[Ue("div",{style:Ye([{width:"100%"},{textAlign:e.actionColOpt.style.textAlign}])},[le(l,null,{default:H(()=>[Y(e.$slots,"resetBefore"),e.showResetButton?(q(),X(c,te({key:0,type:"default",class:"mr-2"},e.getResetBtnOptions,{onClick:e.resetAction}),{default:H(()=>[ue(de(e.getResetBtnOptions.text),1)]),_:1},16,["onClick"])):re("",!0),Y(e.$slots,"submitBefore"),e.showSubmitButton?(q(),X(c,te({key:1,type:"primary",class:"mr-2"},e.getSubmitBtnOptions,{onClick:e.submitAction}),{default:H(()=>[ue(de(e.getSubmitBtnOptions.text),1)]),_:1},16,["onClick"])):re("",!0),Y(e.$slots,"advanceBefore"),e.showAdvancedButton&&!e.hideAdvanceBtn?(q(),X(c,{key:2,type:"link",size:"small",onClick:e.toggleAdvanced},{default:H(()=>[ue(de(e.isAdvanced?e.t("component.form.putAway"):e.t("component.form.unfold"))+" ",1),le(i,{class:"ml-1",expand:!e.isAdvanced,up:""},null,8,["expand"])]),_:1},8,["onClick"])):re("",!0),Y(e.$slots,"advanceAfter")]),_:3})],4)]),_:3},16)):re("",!0)}var pt=Ce(dt,[["render",ft]]);function mt(e,r,o){const p=/^\[(.+)\]$/;if(p.test(e)){const h=e.match(p);if(h&&h[1]){const b=h[1].split(",");return r=Array.isArray(r)?r:[r],b.forEach((c,i)=>{he(o,c.trim(),r[i])}),!0}}}function ht(e,r,o){const p=/^\{(.+)\}$/;if(p.test(e)){const h=e.match(p);if(h&&h[1]){const b=h[1].split(",");return r=W(r)?r:{},b.forEach(c=>{he(o,c.trim(),r[c.trim()])}),!0}}}function bt({defaultValueRef:e,getSchema:r,formModel:o,getProps:p}){function h(i){var u,v;if(!W(i))return{};const l={};for(const O of Object.entries(i)){let[,s]=O;const[j]=O;if(!j||J(s)&&s.length===0||ne(s))continue;const V=n(p).transformDateFunc;W(s)&&(s=V==null?void 0:V(s)),J(s)&&((u=s[0])==null?void 0:u.format)&&((v=s[1])==null?void 0:v.format)&&(s=s.map(L=>V==null?void 0:V(L))),ce(s)&&(s===""?s=void 0:s=s.trim()),!mt(j,s,l)&&!ht(j,s,l)&&he(l,j,s)}return b(l)}function b(i){const l=n(p).fieldMapToTime;if(!l||!Array.isArray(l))return i;for(const[u,[v,O],s="YYYY-MM-DD"]of l){if(!u||!v||!O)continue;if(!i[u]){Reflect.deleteProperty(i,u);continue}const[j,V]=i[u],[L,m]=Array.isArray(s)?s:[s,s];i[v]=Q(j).format(L),i[O]=Q(V).format(m),Reflect.deleteProperty(i,u)}return i}function c(){const i=n(r),l={};i.forEach(u=>{const{defaultValue:v}=u;me(v)||(l[u.field]=v,o[u.field]===void 0&&(o[u.field]=v))}),e.value=K(l)}return{handleFormValues:h,initDefault:c}}const G=24;function yt({advanceState:e,emit:r,getProps:o,getSchema:p,formModel:h,defaultValueRef:b}){const c=Xe(),{realWidthRef:i,screenEnum:l,screenRef:u}=We(),v=_(()=>{if(!e.isAdvanced)return 0;const m=n(o).emptySpan||0;if(qe(m))return m;if(W(m)){const{span:F=0}=m,M=n(u);return m[M.toLowerCase()]||F||0}return 0}),O=je(V,30);ee([()=>n(p),()=>e.isAdvanced,()=>n(i)],()=>{const{showAdvancedButton:m}=n(o);m&&O()},{immediate:!0});function s(m,F=0,M=!1){const P=n(i),R=parseInt(m.md)||parseInt(m.xs)||parseInt(m.sm)||m.span||G,C=parseInt(m.lg)||R,N=parseInt(m.xl)||C,t=parseInt(m.xxl)||N;return P<=l.LG?F+=R:P<l.XL?F+=C:P<l.XXL?F+=N:F+=t,M?(e.hideAdvanceBtn=!1,F<=G*2?(e.hideAdvanceBtn=!0,e.isAdvanced=!0):F>G*2&&F<=G*(n(o).autoAdvancedLine||3)?e.hideAdvanceBtn=!1:e.isLoad||(e.isLoad=!0,e.isAdvanced=!e.isAdvanced),{isAdvanced:e.isAdvanced,itemColSum:F}):F>G*(n(o).alwaysShowLines||1)?{isAdvanced:e.isAdvanced,itemColSum:F}:{isAdvanced:!0,itemColSum:F}}const j=Ge({});function V(){var P;let m=0,F=0;const{baseColProps:M={}}=n(o);for(const R of n(p)){const{show:C,colProps:N}=R;let t=!0;if(Ke(C)&&(t=C),ne(C)&&(t=C({schema:R,model:h,field:R.field,values:w(w({},n(b)),h)})),t&&(N||M)){const{itemColSum:a,isAdvanced:g}=s(w(w({},M),N),m);m=a||0,g&&(F=m),j[R.field]=g}}(P=c==null?void 0:c.proxy)==null||P.$forceUpdate(),e.actionSpan=F%G+n(v),s(n(o).actionColOptions||{span:G},m,!0),r("advanced-change")}function L(){e.isAdvanced=!e.isAdvanced}return{handleToggleAdvanced:L,fieldsIsAdvancedMap:j}}function At({emit:e,getProps:r,formModel:o,getSchema:p,defaultValueRef:h,formElRef:b,schemaRef:c,handleFormValues:i}){function l(){return D(this,null,function*(){const{resetFunc:t,submitOnReset:a}=n(r);t&&ne(t)&&(yield t()),n(b)&&(Object.keys(o).forEach(d=>{const f=n(p).find(S=>S.field===d),A=(f==null?void 0:f.component)&&st.includes(f.component),T=K(h.value[d]);o[d]=A?T||"":T}),be(()=>R()),e("reset",Fe(o)),a&&N())})}function u(t){return D(this,null,function*(){const a=n(p).map(A=>A.field).filter(Boolean),g=".",d=a.filter(A=>A.indexOf(g)>=0),f=[];Object.keys(t).forEach(A=>{const T=n(p).find(E=>E.field===A);let S=t[A];const oe=Reflect.has(t,A);S=at(T==null?void 0:T.component,S);const{componentProps:se}=T||{};let $=se;if(typeof se=="function"&&($=$({formModel:n(o)})),oe&&a.includes(A)){if(F(A))if(Array.isArray(S)){const E=[];for(const z of S)E.push(z?Q(z):null);n(o)[A]=E}else n(o)[A]=S?$!=null&&$.valueFormat?S:Q(S):null;else n(o)[A]=S;$!=null&&$.onChange&&($==null||$.onChange(S)),f.push(A)}else d.forEach(E=>{try{const z=E.split(".").reduce((Z,y)=>Z[y],t);Oe(z)&&(n(o)[E]=n(z),f.push(E))}catch(z){Oe(h.value[E])&&(n(o)[E]=K(n(h.value[E])))}})}),M(f).catch(A=>{})})}function v(t){return D(this,null,function*(){const a=K(n(p));if(!t)return;let g=ce(t)?[t]:t;ce(t)&&(g=[t]);for(const d of g)O(d,a);c.value=a})}function O(t,a){if(ce(t)){const g=a.findIndex(d=>d.field===t);g!==-1&&(delete o[t],a.splice(g,1))}}function s(t,a,g=!1){return D(this,null,function*(){const d=K(n(p)),f=d.findIndex(T=>T.field===a),A=W(t)?[t]:t;if(!a||f===-1||g){g?d.unshift(...A):d.push(...A),c.value=d,L(t);return}f!==-1&&d.splice(f+1,0,...A),L(t),c.value=d})}function j(t){return D(this,null,function*(){let a=[];if(W(t)&&a.push(t),J(t)&&(a=[...t]),!a.every(d=>d.component==="Divider"||Reflect.has(d,"field")&&d.field)){we("All children of the form Schema array that need to be updated must contain the `field` field");return}c.value=a})}function V(t){return D(this,null,function*(){let a=[];if(W(t)&&a.push(t),J(t)&&(a=[...t]),!a.every(f=>f.component==="Divider"||Reflect.has(f,"field")&&f.field)){we("All children of the form Schema array that need to be updated must contain the `field` field");return}const d=[];n(p).forEach(f=>{let A;if(a.forEach(T=>{f.field===T.field&&(A=T)}),A!==void 0&&f.field===A.field){const T=Re(f,A);d.push(T)}else d.push(f)}),L(d),c.value=it(d,"field")})}function L(t){let a=[];W(t)&&a.push(t),J(t)&&(a=[...t]);const g={},d=m();a.forEach(f=>{f.component!="Divider"&&Reflect.has(f,"field")&&f.field&&!me(f.defaultValue)&&(!(f.field in d)||me(d[f.field])||Je(d[f.field]))&&(g[f.field]=f.defaultValue)}),u(g)}function m(){return n(b)?i(Fe(n(o))):{}}function F(t){return n(p).some(a=>a.field===t?Se.includes(a.component):!1)}function M(t){return D(this,null,function*(){var a;return(a=n(b))==null?void 0:a.validateFields(t)})}function P(t){return D(this,null,function*(){var a;return yield(a=n(b))==null?void 0:a.validate(t)})}function R(t){return D(this,null,function*(){var a;yield(a=n(b))==null?void 0:a.clearValidate(t)})}function C(t,a){return D(this,null,function*(){var g;yield(g=n(b))==null?void 0:g.scrollToField(t,a)})}function N(t){return D(this,null,function*(){t&&t.preventDefault();const{submitFunc:a}=n(r);if(a&&ne(a)){yield a();return}if(!!n(b))try{const d=yield P(),f=i(d);e("submit",f)}catch(d){throw new Error(d)}})}return{handleSubmit:N,clearValidate:R,validate:P,validateFields:M,getFieldsValue:m,updateSchema:V,resetSchema:j,appendSchemaByField:s,removeSchemaByField:v,resetFields:l,setFieldsValue:u,scrollToField:C}}function vt(h){return D(this,arguments,function*({getSchema:e,getProps:r,formElRef:o,isInitedDefault:p}){Qe(()=>D(this,null,function*(){if(n(p)||!n(r).autoFocusFirstItem)return;yield be();const b=n(e),c=n(o),i=c==null?void 0:c.$el;if(!c||!i||!b||b.length===0||!b[0].component.includes("Input"))return;const u=i.querySelector(".ant-row:first-child input");!u||u==null||u.focus()}))})}const gt={model:{type:Object,default:()=>({})},labelWidth:{type:[Number,String],default:0},fieldMapToTime:{type:Array,default:()=>[]},compact:B.bool,schemas:{type:Array,default:()=>[]},mergeDynamicData:{type:Object,default:null},baseRowStyle:{type:Object},baseColProps:{type:Object},autoSetPlaceHolder:B.bool.def(!0),autoSubmitOnEnter:B.bool.def(!1),submitOnReset:B.bool,submitOnChange:B.bool,size:B.oneOf(["default","small","large"]).def("default"),disabled:B.bool,emptySpan:{type:[Number,Object],default:0},showAdvancedButton:B.bool,transformDateFunc:{type:Function,default:e=>{var r,o;return(o=(r=e==null?void 0:e.format)==null?void 0:r.call(e,"YYYY-MM-DD HH:mm:ss"))!=null?o:e}},rulesMessageJoinLabel:B.bool.def(!0),autoAdvancedLine:B.number.def(3),alwaysShowLines:B.number.def(1),showActionButtonGroup:B.bool.def(!0),actionColOptions:Object,showResetButton:B.bool.def(!0),autoFocusFirstItem:B.bool,resetButtonOptions:Object,showSubmitButton:B.bool.def(!0),submitButtonOptions:Object,resetFunc:Function,submitFunc:Function,hideRequiredMark:B.bool,labelCol:Object,layout:B.oneOf(["horizontal","vertical","inline"]).def("horizontal"),tableAction:{type:Object},wrapperCol:Object,colon:B.bool,labelAlign:B.string,rowProps:Object};const Bt=De({name:"BasicForm",components:{FormItem:rt,Form:Ve,Row:Ze,FormAction:pt},props:gt,emits:["advanced-change","reset","submit","register","field-value-change"],setup(e,{emit:r,attrs:o}){const p=Te({}),h=ct(),b=Te({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),c=x({}),i=x(!1),l=x({}),u=x(null),v=x(null),{prefixCls:O}=xe("basic-form"),s=_(()=>w(w({},e),n(l))),j=_(()=>[O,{[`${O}--compact`]:n(s).compact}]),V=_(()=>{const{baseRowStyle:y={},rowProps:I}=n(s);return w({style:y},I)}),L=_(()=>w(w(w({},o),e),n(s))),m=_(()=>{const y=n(u)||n(s).schemas;for(const I of y){const{defaultValue:k,component:ae,isHandleDateDefaultValue:ye=!0}=I;if(ye&&k&&Se.includes(ae))if(!Array.isArray(k))I.defaultValue=Q(k);else{const Ae=[];k.forEach(Ee=>{Ae.push(Q(Ee))}),I.defaultValue=Ae}}return n(s).showAdvancedButton?K(y.filter(I=>I.component!=="Divider")):K(y)}),{handleToggleAdvanced:F,fieldsIsAdvancedMap:M}=yt({advanceState:b,emit:r,getProps:s,getSchema:m,formModel:p,defaultValueRef:c}),{handleFormValues:P,initDefault:R}=bt({getProps:s,defaultValueRef:c,getSchema:m,formModel:p});vt({getSchema:m,getProps:s,isInitedDefault:i,formElRef:v});const{handleSubmit:C,setFieldsValue:N,clearValidate:t,validate:a,validateFields:g,getFieldsValue:d,updateSchema:f,resetSchema:A,appendSchemaByField:T,removeSchemaByField:S,resetFields:oe,scrollToField:se}=At({emit:r,getProps:s,formModel:p,getSchema:m,defaultValueRef:c,formElRef:v,schemaRef:u,handleFormValues:P});lt({resetAction:oe,submitAction:C}),ee(()=>n(s).model,()=>{const{model:y}=n(s);!y||N(y)},{immediate:!0}),ee(()=>n(s).schemas,y=>{A(y!=null?y:[])}),ee(()=>m.value,y=>{be(()=>{var I;(I=h==null?void 0:h.redoModalHeight)==null||I.call(h)}),!n(i)&&y!=null&&y.length&&(R(),i.value=!0)}),ee(()=>p,je(()=>{n(s).submitOnChange&&C()},300),{deep:!0});function $(y){return D(this,null,function*(){l.value=Re(n(l)||{},y)})}function E(y,I,k){p[y]=I;const{validateTrigger:ae}=n(L);ne(k.dynamicRules)||J(k.rules)||((!ae||ae==="change")&&g([y]).catch(ye=>{}),r("field-value-change",y,I))}function z(y){const{autoSubmitOnEnter:I}=n(s);if(!!I&&y.key==="Enter"&&y.target&&y.target instanceof HTMLElement){const k=y.target;k&&k.tagName&&k.tagName.toUpperCase()=="INPUT"&&C()}}const Z={getFieldsValue:d,setFieldsValue:N,resetFields:oe,updateSchema:f,resetSchema:A,setProps:$,removeSchemaByField:S,appendSchemaByField:T,clearValidate:t,validateFields:g,validate:a,submit:C,scrollToField:se};return et(()=>{R(),r("register",Z)}),w({getBindValue:L,handleToggleAdvanced:F,handleEnterPress:z,formModel:p,defaultValueRef:c,advanceState:b,getRow:V,getProps:s,formElRef:v,getSchema:m,formActionType:Z,setFormModel:E,getFormClass:j,getFormActionBindProps:_(()=>w(w({},s.value),b)),fieldsIsAdvancedMap:M},Z)}});function Ft(e,r,o,p,h,b){const c=U("FormItem"),i=U("FormAction"),l=U("Row"),u=U("Form");return q(),X(u,te(e.getBindValue,{class:e.getFormClass,ref:"formElRef",model:e.formModel,onKeypress:ot(e.handleEnterPress,["enter"])}),{default:H(()=>[le(l,ie(fe(e.getRow)),{default:H(()=>[Y(e.$slots,"formHeader"),(q(!0),tt(nt,null,pe(e.getSchema,v=>(q(),X(c,{key:v.field,isAdvanced:e.fieldsIsAdvancedMap[v.field],tableAction:e.tableAction,formActionType:e.formActionType,schema:v,formProps:e.getProps,allDefaultValues:e.defaultValueRef,formModel:e.formModel,setFormModel:e.setFormModel},Ie({_:2},[pe(Object.keys(e.$slots),O=>({name:O,fn:H(s=>[Y(e.$slots,O,ie(fe(s||{})))])}))]),1032,["isAdvanced","tableAction","formActionType","schema","formProps","allDefaultValues","formModel","setFormModel"]))),128)),le(i,te(e.getFormActionBindProps,{onToggleAdvanced:e.handleToggleAdvanced}),Ie({_:2},[pe(["resetBefore","submitBefore","advanceBefore","advanceAfter"],v=>({name:v,fn:H(O=>[Y(e.$slots,v,ie(fe(O||{})))])}))]),1040,["onToggleAdvanced"]),Y(e.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model","onKeypress"])}var jt=Ce(Bt,[["render",Ft]]);export{jt as B};