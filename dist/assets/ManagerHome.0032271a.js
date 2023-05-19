import{P as y}from"./index.36f96364.js";import{a as g,v as c,a2 as v,bE as C,s as F,f as k,Q as x,o as E,j as S,z as s,i as e,n as r,k as o,bF as b,t as B}from"./index.c77972c6.js";/* empty css                */import{h as w}from"./header.d801b988.js";import{u as h}from"./useECharts.f2181bf2.js";import{i as A}from"./install.34857f1c.js";/* empty css               */import"./useWindowSizeFn.3455cf29.js";import"./useContentViewHeight.06cda917.js";const z={class:"lg:flex"},j={class:"md:ml-6 flex flex-col md:mt-0 mt-2"},O={class:"md:text-lg text-md"},U=e("span",{class:"text-secondary"}," \u4ECA\u65E5\u6674\uFF0C20\u2103 - 32\u2103\uFF01 ",-1),D=e("div",{class:"flex flex-1 justify-end md:mt-0 mt-4"},[e("div",{class:"flex flex-col justify-center text-right"},[e("span",{class:"text-secondary"}),e("span",{class:"text-2xl"})]),e("div",{class:"flex flex-col justify-center text-right md:mx-16 mx-12"},[e("span",{class:"text-secondary"}),e("span",{class:"text-2xl"})]),e("div",{class:"flex flex-col justify-center text-right md:mr-10 mr-4"},[e("span",{class:"text-secondary"}),e("span",{class:"text-2xl"})])],-1),Q=g({__name:"ManagerHome",setup(K){const u=c(null),d=c(null);v(()=>{const{setOptions:f,echarts:n}=h(d),{setOptions:l}=h(u);n.use([A]),C.get({url:"/manager/basicData"}).then(t=>{const i={tooltip:{},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"none",symbolSize:100,roam:!1,label:{show:!0,fontSize:18},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,12],data:t.teacher_class_relation.nodes,links:t.teacher_class_relation.links,edgeLabel:{show:!0,position:"middle",fontSize:16,formatter:a=>a.data.relation.name},lineStyle:{opacity:.9,width:2,curveness:0}}]};l({series:[{type:"pie",data:t.student.classes.map(a=>({name:a.name+":"+a.count+"\u4EBA",value:a.count}))}]}),f(i)})});const _=F(),p=k(()=>_.getUserInfo),m=c(["1","2"]);return(f,n)=>{const l=x("a-collapse-panel"),t=x("a-collapse");return E(),S(o(y),{contentBackground:!1},{headerContent:s(()=>[e("div",z,[r(o(b),{src:o(p).avatar||o(w),size:72,class:"!mx-auto !block"},null,8,["src"]),e("div",j,[e("h1",O,"\u6B22\u8FCE\u60A8, \u7BA1\u7406\u5458\uFF1A"+B(o(p).realName)+"\uFF01",1),U]),D])]),default:s(()=>[r(t,{activeKey:m.value,"onUpdate:activeKey":n[0]||(n[0]=i=>m.value=i)},{default:s(()=>[r(l,{key:"1",header:"\u73ED\u7EA7\u4FE1\u606F\u6982\u89C8"},{default:s(()=>[e("div",{ref_key:"chartRef",ref:u,style:{"{\n                width":"500px",height:"500px"}},null,512)]),_:1}),r(l,{key:"2",header:"\u6559\u5E08\u6559\u5B66\u5173\u7CFB\u6982\u89C8"},{default:s(()=>[e("div",{ref_key:"relationChartRef",ref:d,style:{"{\n                width":"500px",height:"500px"}},null,512)]),_:1})]),_:1},8,["activeKey"])]),_:1})}}});export{Q as default};
