var be=Object.defineProperty;var x=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var X=(e,n,r)=>n in e?be(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,k=(e,n)=>{for(var r in n||(n={}))Be.call(n,r)&&X(e,r,n[r]);if(x)for(var r of x(n))he.call(n,r)&&X(e,r,n[r]);return e};import{B as Ge,a as We}from"./index.3217632b.js";import{aK as c,c as Y,f4 as v,f5 as h,f6 as M,ai as L,aj as I,f7 as K,b7 as y,aY as Q,f8 as j,f9 as Z,aU as z,fa as Pe,fb as Fe,fc as He,fd as me,a as q,b3 as we,an as xe,f as Xe,k as o,n as i,E as a,A as ke,S as ve,H as U,fe as Ke,ff as $e,fg as Ve,N as Ye,al as Qe,Q as $,o as je,h as Ze}from"./index.c77972c6.js";/* empty css               */import{c as d,u as ze,a as qe}from"./index.b9a4d43b.js";const Je=d(()=>c(()=>import("./TypePicker.7e5f2d8b.js"),["assets/TypePicker.7e5f2d8b.js","assets/TypePicker.2790efdb.css","assets/index.c77972c6.js","assets/index.1bc0bb13.css"])),G=d(()=>c(()=>import("./ThemeColorPicker.d1657cb5.js"),["assets/ThemeColorPicker.d1657cb5.js","assets/ThemeColorPicker.8eb61909.css","assets/index.464798c8.css","assets/index.3a3c1369.css","assets/index.a2831ae3.css","assets/index.c77972c6.js","assets/index.1bc0bb13.css","assets/index.3217632b.js","assets/index.5c7227e9.css","assets/index.b9a4d43b.js","assets/index.48abc832.css","assets/FullscreenOutlined.dcdca408.js","assets/index.8aa66f02.js","assets/index.55076fdd.css","assets/useWindowSizeFn.3455cf29.js","assets/useContentViewHeight.06cda917.js","assets/uniqBy.0d6271bc.js","assets/RedoOutlined.b9aeb074.js","assets/lock.8d858ad5.js"])),et=d(()=>c(()=>import("./SettingFooter.4ed54fa6.js"),["assets/SettingFooter.4ed54fa6.js","assets/SettingFooter.9c0370f9.css","assets/index.c77972c6.js","assets/index.1bc0bb13.css","assets/RedoOutlined.b9aeb074.js"])),_=d(()=>c(()=>import("./SwitchItem.9f39f7e3.js"),["assets/SwitchItem.9f39f7e3.js","assets/SwitchItem.458f0d56.css","assets/index.579bd49e.css","assets/index.464798c8.css","assets/index.3a3c1369.css","assets/index.a2831ae3.css","assets/index.c77972c6.js","assets/index.1bc0bb13.css","assets/index.3217632b.js","assets/index.5c7227e9.css","assets/index.b9a4d43b.js","assets/index.48abc832.css","assets/FullscreenOutlined.dcdca408.js","assets/index.8aa66f02.js","assets/index.55076fdd.css","assets/useWindowSizeFn.3455cf29.js","assets/useContentViewHeight.06cda917.js","assets/uniqBy.0d6271bc.js","assets/RedoOutlined.b9aeb074.js","assets/lock.8d858ad5.js"])),R=d(()=>c(()=>import("./SelectItem.091f1613.js"),["assets/SelectItem.091f1613.js","assets/SelectItem.809be52d.css","assets/index.464798c8.css","assets/index.3a3c1369.css","assets/index.a2831ae3.css","assets/index.c77972c6.js","assets/index.1bc0bb13.css","assets/index.3217632b.js","assets/index.5c7227e9.css","assets/index.b9a4d43b.js","assets/index.48abc832.css","assets/FullscreenOutlined.dcdca408.js","assets/index.8aa66f02.js","assets/index.55076fdd.css","assets/useWindowSizeFn.3455cf29.js","assets/useContentViewHeight.06cda917.js","assets/uniqBy.0d6271bc.js","assets/RedoOutlined.b9aeb074.js","assets/lock.8d858ad5.js"])),V=d(()=>c(()=>import("./InputNumberItem.80aaa70c.js"),["assets/InputNumberItem.80aaa70c.js","assets/InputNumberItem.228b843e.css","assets/index.47f7c782.css","assets/index.464798c8.css","assets/index.3a3c1369.css","assets/index.a2831ae3.css","assets/index.c77972c6.js","assets/index.1bc0bb13.css","assets/index.3217632b.js","assets/index.5c7227e9.css","assets/index.b9a4d43b.js","assets/index.48abc832.css","assets/FullscreenOutlined.dcdca408.js","assets/index.8aa66f02.js","assets/index.55076fdd.css","assets/useWindowSizeFn.3455cf29.js","assets/useContentViewHeight.06cda917.js","assets/uniqBy.0d6271bc.js","assets/RedoOutlined.b9aeb074.js","assets/lock.8d858ad5.js"])),{t:l}=Y();var t=(e=>(e[e.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",e[e.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",e[e.CHANGE_THEME=2]="CHANGE_THEME",e[e.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",e[e.MENU_ACCORDION=4]="MENU_ACCORDION",e[e.MENU_TRIGGER=5]="MENU_TRIGGER",e[e.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",e[e.MENU_COLLAPSED=7]="MENU_COLLAPSED",e[e.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",e[e.MENU_WIDTH=9]="MENU_WIDTH",e[e.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",e[e.MENU_THEME=11]="MENU_THEME",e[e.MENU_SPLIT=12]="MENU_SPLIT",e[e.MENU_FIXED=13]="MENU_FIXED",e[e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",e[e.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",e[e.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",e[e.HEADER_SHOW=17]="HEADER_SHOW",e[e.HEADER_THEME=18]="HEADER_THEME",e[e.HEADER_FIXED=19]="HEADER_FIXED",e[e.HEADER_SEARCH=20]="HEADER_SEARCH",e[e.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",e[e.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",e[e.TABS_SHOW=23]="TABS_SHOW",e[e.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",e[e.LOCK_TIME=25]="LOCK_TIME",e[e.FULL_CONTENT=26]="FULL_CONTENT",e[e.CONTENT_MODE=27]="CONTENT_MODE",e[e.SHOW_BREADCRUMB=28]="SHOW_BREADCRUMB",e[e.SHOW_BREADCRUMB_ICON=29]="SHOW_BREADCRUMB_ICON",e[e.GRAY_MODE=30]="GRAY_MODE",e[e.COLOR_WEAK=31]="COLOR_WEAK",e[e.SHOW_LOGO=32]="SHOW_LOGO",e[e.SHOW_FOOTER=33]="SHOW_FOOTER",e[e.ROUTER_TRANSITION=34]="ROUTER_TRANSITION",e[e.OPEN_PROGRESS=35]="OPEN_PROGRESS",e[e.OPEN_PAGE_LOADING=36]="OPEN_PAGE_LOADING",e[e.OPEN_ROUTE_TRANSITION=37]="OPEN_ROUTE_TRANSITION",e))(t||{});const tt=[{value:v.FULL,label:l("layout.setting.contentModeFull")},{value:v.FIXED,label:l("layout.setting.contentModeFixed")}],ot=[{value:h.CENTER,label:l("layout.setting.topMenuAlignRight")},{value:h.START,label:l("layout.setting.topMenuAlignLeft")},{value:h.END,label:l("layout.setting.topMenuAlignCenter")}],nt=e=>[{value:y.NONE,label:l("layout.setting.menuTriggerNone")},{value:y.FOOTER,label:l("layout.setting.menuTriggerBottom")},...e?[]:[{value:y.HEADER,label:l("layout.setting.menuTriggerTop")}]],it=[M.ZOOM_FADE,M.FADE,M.ZOOM_OUT,M.FADE_SIDE,M.FADE_BOTTOM,M.FADE_SCALE].map(e=>({label:e,value:e})),st=[{title:l("layout.setting.menuTypeSidebar"),mode:L.INLINE,type:I.SIDEBAR},{title:l("layout.setting.menuTypeMix"),mode:L.INLINE,type:I.MIX},{title:l("layout.setting.menuTypeTopMenu"),mode:L.HORIZONTAL,type:I.TOP_MENU},{title:l("layout.setting.menuTypeMixSidebar"),mode:L.INLINE,type:I.MIX_SIDEBAR}],_t=[{value:K.HOVER,label:l("layout.setting.triggerHover")},{value:K.CLICK,label:l("layout.setting.triggerClick")}];function rt(e,n){const r=Q(),O=lt(e,n);r.setProjectConfig(O),e===t.CHANGE_THEME&&(j(),Z())}function lt(e,n){const r=Q(),{getThemeColor:O,getDarkMode:D}=z();switch(e){case t.CHANGE_LAYOUT:const{mode:C,type:N,split:S}=n;return{menuSetting:k({mode:C,type:N,collapsed:!1,show:!0,hidden:!1},S===void 0?{split:S}:{})};case t.CHANGE_THEME_COLOR:return O.value===n?{}:(me(n),{themeColor:n});case t.CHANGE_THEME:return D.value===n?{}:(He(n),{});case t.MENU_HAS_DRAG:return{menuSetting:{canDrag:n}};case t.MENU_ACCORDION:return{menuSetting:{accordion:n}};case t.MENU_TRIGGER:return{menuSetting:{trigger:n}};case t.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:n}};case t.MENU_COLLAPSED:return{menuSetting:{collapsed:n}};case t.MENU_WIDTH:return{menuSetting:{menuWidth:n}};case t.MENU_SHOW_SIDEBAR:return{menuSetting:{show:n}};case t.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:n}};case t.MENU_THEME:return Z(n),{menuSetting:{bgColor:n}};case t.MENU_SPLIT:return{menuSetting:{split:n}};case t.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:n}};case t.MENU_FIXED:return{menuSetting:{fixed:n}};case t.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:n}};case t.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:n}};case t.OPEN_PAGE_LOADING:return r.setPageLoading(!1),{transitionSetting:{openPageLoading:n}};case t.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:n}};case t.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:n}};case t.OPEN_PROGRESS:return{transitionSetting:{openNProgress:n}};case t.LOCK_TIME:return{lockTime:n};case t.FULL_CONTENT:return{fullContent:n};case t.CONTENT_MODE:return{contentMode:n};case t.SHOW_BREADCRUMB:return{showBreadCrumb:n};case t.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:n};case t.GRAY_MODE:return Fe(n),{grayMode:n};case t.SHOW_FOOTER:return{showFooter:n};case t.COLOR_WEAK:return Pe(n),{colorWeak:n};case t.SHOW_LOGO:return{showLogo:n};case t.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:n}};case t.TABS_SHOW:return{multiTabsSetting:{show:n}};case t.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:n}};case t.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:n}};case t.HEADER_THEME:return j(n),{headerSetting:{bgColor:n}};case t.HEADER_SEARCH:return{headerSetting:{showSearch:n}};case t.HEADER_FIXED:return{headerSetting:{fixed:n}};case t.HEADER_SHOW:return{headerSetting:{show:n}};default:return{}}}const{t:s}=Y();var at=q({name:"SettingDrawer",setup(e,{attrs:n}){const{getContentMode:r,getShowFooter:O,getShowBreadCrumb:D,getShowBreadCrumbIcon:C,getShowLogo:N,getFullContent:S,getColorWeak:b,getGrayMode:J,getLockTime:ee,getShowDarkModeToggle:W,getThemeColor:te}=z(),{getOpenPageLoading:oe,getBasicTransition:ne,getEnableTransition:P,getOpenNProgress:ie}=we(),{getIsHorizontal:B,getShowMenu:F,getMenuType:H,getTrigger:se,getCollapsedShowTitle:_e,getMenuFixed:re,getCollapsed:m,getCanDrag:le,getTopMenuAlign:ae,getAccordion:Ee,getMenuWidth:ge,getMenuBgColor:Oe,getIsTopMenu:Se,getSplit:p,getIsMixSidebar:E,getCloseMixSidebarOnChange:ue,getMixSideTrigger:Te,getMixSideFixed:Ae}=xe(),{getShowHeader:u,getFixed:Me,getHeaderBgColor:ce,getShowSearch:de}=ze(),{getShowMultipleTab:f,getShowQuick:Ne,getShowRedo:Re,getShowFold:Ie}=qe(),g=Xe(()=>o(F)&&!o(B));function De(){return i(U,null,[i(Je,{menuTypeList:st,handler:T=>{rt(t.CHANGE_LAYOUT,{mode:T.mode,type:T.type,split:o(B)?!1:void 0})},def:o(H)},null)])}function Ce(){return i(G,{colorList:Ke,def:o(ce),event:t.HEADER_THEME},null)}function pe(){return i(G,{colorList:$e,def:o(Oe),event:t.MENU_THEME},null)}function fe(){return i(G,{colorList:Ve,def:o(te),event:t.CHANGE_THEME_COLOR},null)}function Le(){let T=o(se);const w=nt(o(p));return w.some(A=>A.value===T)||(T=y.FOOTER),i(U,null,[i(_,{title:s("layout.setting.splitMenu"),event:t.MENU_SPLIT,def:o(p),disabled:!o(g)||o(H)!==I.MIX},null),i(_,{title:s("layout.setting.mixSidebarFixed"),event:t.MENU_FIXED_MIX_SIDEBAR,def:o(Ae),disabled:!o(E)},null),i(_,{title:s("layout.setting.closeMixSidebarOnChange"),event:t.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:o(ue),disabled:!o(E)},null),i(_,{title:s("layout.setting.menuCollapse"),event:t.MENU_COLLAPSED,def:o(m),disabled:!o(g)},null),i(_,{title:s("layout.setting.menuDrag"),event:t.MENU_HAS_DRAG,def:o(le),disabled:!o(g)},null),i(_,{title:s("layout.setting.menuSearch"),event:t.HEADER_SEARCH,def:o(de),disabled:!o(u)},null),i(_,{title:s("layout.setting.menuAccordion"),event:t.MENU_ACCORDION,def:o(Ee),disabled:!o(g)},null),i(_,{title:s("layout.setting.collapseMenuDisplayName"),event:t.MENU_COLLAPSED_SHOW_TITLE,def:o(_e),disabled:!o(g)||!o(m)||o(E)},null),i(_,{title:s("layout.setting.fixedHeader"),event:t.HEADER_FIXED,def:o(Me),disabled:!o(u)},null),i(_,{title:s("layout.setting.fixedSideBar"),event:t.MENU_FIXED,def:o(re),disabled:!o(g)||o(E)},null),i(R,{title:s("layout.setting.mixSidebarTrigger"),event:t.MENU_TRIGGER_MIX_SIDEBAR,def:o(Te),options:_t,disabled:!o(E)},null),i(R,{title:s("layout.setting.topMenuLayout"),event:t.MENU_TOP_ALIGN,def:o(ae),options:ot,disabled:!o(u)||o(p)||!o(Se)&&!o(p)||o(E)},null),i(R,{title:s("layout.setting.menuCollapseButton"),event:t.MENU_TRIGGER,def:T,options:w,disabled:!o(g)||o(E)},null),i(R,{title:s("layout.setting.contentMode"),event:t.CONTENT_MODE,def:o(r),options:tt},null),i(V,{title:s("layout.setting.autoScreenLock"),min:0,event:t.LOCK_TIME,defaultValue:o(ee),formatter:A=>parseInt(A)===0?`0(${s("layout.setting.notAutoScreenLock")})`:`${A}${s("layout.setting.minute")}`},null),i(V,{title:s("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:t.MENU_WIDTH,disabled:!o(g),defaultValue:o(ge),formatter:A=>`${parseInt(A)}px`},null)])}function Ue(){return i(U,null,[i(_,{title:s("layout.setting.breadcrumb"),event:t.SHOW_BREADCRUMB,def:o(D),disabled:!o(u)},null),i(_,{title:s("layout.setting.breadcrumbIcon"),event:t.SHOW_BREADCRUMB_ICON,def:o(C),disabled:!o(u)},null),i(_,{title:s("layout.setting.tabs"),event:t.TABS_SHOW,def:o(f)},null),i(_,{title:s("layout.setting.tabsRedoBtn"),event:t.TABS_SHOW_REDO,def:o(Re),disabled:!o(f)},null),i(_,{title:s("layout.setting.tabsQuickBtn"),event:t.TABS_SHOW_QUICK,def:o(Ne),disabled:!o(f)},null),i(_,{title:s("layout.setting.tabsFoldBtn"),event:t.TABS_SHOW_FOLD,def:o(Ie),disabled:!o(f)},null),i(_,{title:s("layout.setting.sidebar"),event:t.MENU_SHOW_SIDEBAR,def:o(F),disabled:o(B)},null),i(_,{title:s("layout.setting.header"),event:t.HEADER_SHOW,def:o(u)},null),i(_,{title:"Logo",event:t.SHOW_LOGO,def:o(N),disabled:o(E)},null),i(_,{title:s("layout.setting.footer"),event:t.SHOW_FOOTER,def:o(O)},null),i(_,{title:s("layout.setting.fullContent"),event:t.FULL_CONTENT,def:o(S)},null),i(_,{title:s("layout.setting.grayMode"),event:t.GRAY_MODE,def:o(J)},null),i(_,{title:s("layout.setting.colorWeak"),event:t.COLOR_WEAK,def:o(b)},null)])}function ye(){return i(U,null,[i(_,{title:s("layout.setting.progress"),event:t.OPEN_PROGRESS,def:o(ie)},null),i(_,{title:s("layout.setting.switchLoading"),event:t.OPEN_PAGE_LOADING,def:o(oe)},null),i(_,{title:s("layout.setting.switchAnimation"),event:t.OPEN_ROUTE_TRANSITION,def:o(P)},null),i(R,{title:s("layout.setting.animationType"),event:t.ROUTER_TRANSITION,def:o(ne),options:it,disabled:!o(P)},null)])}return()=>i(Ge,ve(n,{title:s("layout.setting.drawerTitle"),width:330,class:"setting-drawer"}),{default:()=>[o(W)&&i(a,null,{default:()=>s("layout.setting.darkMode")}),o(W)&&i(ke,{class:"mx-auto"},null),i(a,null,{default:()=>s("layout.setting.navMode")}),De(),i(a,null,{default:()=>s("layout.setting.sysTheme")}),fe(),i(a,null,{default:()=>s("layout.setting.headerTheme")}),Ce(),i(a,null,{default:()=>s("layout.setting.sidebarTheme")}),pe(),i(a,null,{default:()=>s("layout.setting.interfaceFunction")}),Le(),i(a,null,{default:()=>s("layout.setting.interfaceDisplay")}),Ue(),i(a,null,{default:()=>s("layout.setting.animation")}),ye(),i(a,null,null),i(et,null,null)]})}});const Et=q({name:"SettingButton",components:{SettingDrawer:at,Icon:Qe},setup(){const[e,{openDrawer:n}]=We();return{register:e,openDrawer:n}}});function gt(e,n,r,O,D,C){const N=$("Icon"),S=$("SettingDrawer");return je(),Ze("div",{onClick:n[0]||(n[0]=b=>e.openDrawer(!0))},[i(N,{icon:"ion:settings-outline"}),i(S,{onRegister:e.register},null,8,["onRegister"])])}var Ot=Ye(Et,[["render",gt]]),dt=Object.freeze(Object.defineProperty({__proto__:null,default:Ot},Symbol.toStringTag,{value:"Module"}));export{rt as b,dt as i};
