import{a as N,a9 as e,v as O,aa as R,ab as S,ac as A,c as v,b as k,f as d,k as s,ad as f,n as r,D as G,ae as D}from"./index.c77972c6.js";/* empty css               */var P="/assets/no-data.f7e550cc.svg",C="/assets/net-error.61b7e6df.svg",B=N({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(a){const n=O(new Map),{query:p}=R(),o=S(),c=A(),{t}=v(),{prefixCls:x}=k("app-exception-page"),E=d(()=>{const{status:l}=p,{status:i}=a;return Number(l)||i}),m=d(()=>s(n).get(s(E))),b=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(n).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:a.full?b:u,handler:()=>a.full?o(f.BASE_LOGIN):o()}),s(n).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:a.full?b:u,handler:()=>a.full?o(f.BASE_LOGIN):o()}),s(n).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(n).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:P}),s(n).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:C}),()=>{const{title:l,subTitle:i,btnText:T,icon:_,handler:g,status:y}=s(m)||{};return r(D,{class:x,status:y,title:a.title||l,"sub-title":a.subTitle||i},{extra:()=>T&&r(G,{type:"primary",onClick:g},{default:()=>T}),icon:()=>_?r("img",{src:_},null):null})}}});export{B as default};
