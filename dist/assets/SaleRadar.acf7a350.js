import{N as r,a as s,dy as i,v as n,$ as d,Q as l,o as m,j as p,z as u,i as c,aD as f}from"./index.c77972c6.js";/* empty css                *//* empty css               *//* empty css               */import{u as h}from"./useECharts.f2181bf2.js";const g=s({components:{Card:i},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=n(null),{setOptions:t}=h(a);return d(()=>e.loading,()=>{e.loading||t({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#9f8ed7"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#1edec5"}}]}]})},{immediate:!0}),{chartRef:a}}});function y(e,a,t,S,w,C){const o=l("Card");return m(),p(o,{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:u(()=>[c("div",{ref:"chartRef",style:f({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var z=r(g,[["render",y]]);export{z as default};