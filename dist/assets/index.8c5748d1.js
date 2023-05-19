import{N as M,a as $,cq as U,am as v,aK as D,Z as N,b as O,c as S,s as b,f as A,Q as t,o as n,h as x,n as r,z as d,j as f,l as _,i as a,q as s,t as E,H as P,a8 as R}from"./index.c77972c6.js";import{D as V}from"./siteSetting.68e5b367.js";import{c as y,u as B}from"./index.b9a4d43b.js";import{u as T}from"./index.52c66243.js";import{h as q}from"./header.d801b988.js";import"./FullscreenOutlined.dcdca408.js";import"./index.8aa66f02.js";import"./useWindowSizeFn.3455cf29.js";import"./useContentViewHeight.06cda917.js";import"./uniqBy.0d6271bc.js";/* empty css               *//* empty css               */import"./RedoOutlined.b9aeb074.js";import"./lock.8d858ad5.js";const z=$({name:"UserDropdown",components:{Dropdown:U,Menu:v,MenuItem:y(()=>D(()=>import("./DropMenuItem.b9a42d1c.js"),["assets/DropMenuItem.b9a42d1c.js","assets/index.c77972c6.js","assets/index.1bc0bb13.css"])),MenuDivider:v.Divider,LockAction:y(()=>D(()=>import("./LockModal.c1ab212a.js"),["assets/LockModal.c1ab212a.js","assets/LockModal.0068f88c.css","assets/index.251e5d3f.css","assets/index.a18cc309.css","assets/index.3a3c1369.css","assets/index.a3d94619.css","assets/index.2ce55b64.css","assets/index.9a4d3b51.css","assets/index.49ada229.css","assets/index.47f7c782.css","assets/index.579bd49e.css","assets/index.ff4ce442.css","assets/index.0558a8a0.css","assets/index.cd256673.css","assets/index.faa73878.css","assets/index.90320c17.css","assets/index.9d09be4d.css","assets/index.0ec4bbd2.css","assets/index.c77972c6.js","assets/index.1bc0bb13.css","assets/index.52c66243.js","assets/index.d0b877f3.css","assets/useWindowSizeFn.3455cf29.js","assets/FullscreenOutlined.dcdca408.js","assets/BasicForm.1cb0e446.js","assets/BasicForm.fca7963c.css","assets/FormItem.vue_vue_type_script_lang.60aa0b9b.js","assets/componentMap.e56f5f78.js","assets/componentMap.add30703.css","assets/useFormItem.0ca96f1f.js","assets/RadioButtonGroup.29ec0324.js","assets/uuid.2b29000c.js","assets/download.8a8ffec6.js","assets/base64Conver.08b9f4ec.js","assets/index.90918534.js","assets/index.cb030764.css","assets/index.c85ba8d6.js","assets/index.7b8b5e30.css","assets/uniqBy.0d6271bc.js","assets/useForm.5f123e01.js","assets/lock.8d858ad5.js","assets/header.d801b988.js"]))},props:{theme:N.oneOf(["dark","light"])},setup(){const{prefixCls:e}=O("header-user-dropdown"),{t:g}=S(),{getShowDoc:k,getUseLockPage:h}=B(),i=b(),C=A(()=>{const{realName:m="",avatar:L,desc:I}=i.getUserInfo||{};return{realName:m,avatar:L||q,desc:I}}),[o,{openModal:l}]=T();function c(){l(!0)}function p(){i.confirmLoginOut()}function u(){R(V)}function w(m){switch(m.key){case"logout":p();break;case"doc":u();break;case"lock":c();break}}return{prefixCls:e,t:g,getUserInfo:C,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),H=["src"];function j(e,g,k,h,i,C){const o=t("MenuItem"),l=t("MenuDivider"),c=t("Menu"),p=t("Dropdown"),u=t("LockAction");return n(),x(P,null,[r(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(c,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(l,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,H),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},E(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(u,{onRegister:e.register},null,8,["onRegister"])],64)}var ae=M(z,[["render",j]]);export{ae as default};
