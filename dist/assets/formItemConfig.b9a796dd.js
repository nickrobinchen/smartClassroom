import{i as l,j as p}from"./componentMap.e56f5f78.js";import{ce as c,D as i,dS as r,I as t,c8 as d,ca as m,c9 as P,cx as b,cb as h,C as s,cy as f,cG as F,cH as E,cz as k,cc as u,cd as C,cI as v,E as D}from"./index.c77972c6.js";/* empty css                *//* empty css              *//* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css               */const e=new Map;e.set("Radio",c);e.set("Button",i);e.set("Calendar",r);e.set("Input",t);e.set("InputGroup",t.Group);e.set("InputPassword",t.Password);e.set("InputSearch",t.Search);e.set("InputTextArea",t.TextArea);e.set("InputNumber",d);e.set("AutoComplete",m);e.set("Select",P);e.set("TreeSelect",b);e.set("Switch",h);e.set("RadioGroup",c.Group);e.set("Checkbox",s);e.set("CheckboxGroup",s.Group);e.set("Cascader",f);e.set("Slider",F);e.set("Rate",E);e.set("Transfer",k);e.set("DatePicker",u);e.set("MonthPicker",u.MonthPicker);e.set("RangePicker",u.RangePicker);e.set("WeekPicker",u.WeekPicker);e.set("TimePicker",C);e.set("IconPicker",v);e.set("Divider",D);const a=new Map;e.forEach((o,n)=>{a.set(n,o),l[n]==null&&p(n,o)});l.forEach((o,n)=>{a.set(n,o)});const N=[],x=[{component:"InputCountDown",label:"\u5012\u8BA1\u65F6\u8F93\u5165",icon:"line-md:iconify2",colProps:{span:24},field:"",componentProps:{}},{component:"IconPicker",label:"\u56FE\u6807\u9009\u62E9\u5668",icon:"line-md:iconify2",colProps:{span:24},field:"",componentProps:{}},{component:"StrengthMeter",label:"\u5BC6\u7801\u5F3A\u5EA6",icon:"wpf:password1",colProps:{span:24},field:"",componentProps:{}},{component:"AutoComplete",label:"\u81EA\u52A8\u5B8C\u6210",icon:"wpf:password1",colProps:{span:24},field:"",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u6B63\u5219\u8868\u8FBE\u5F0F",options:[{value:"/^(?:(?:\\+|00)86)?1[3-9]\\d{9}$/",label:"\u624B\u673A\u53F7\u7801"},{value:"/^((ht|f)tps?:\\/\\/)?[\\w-]+(\\.[\\w-]+)+:\\d{1,5}\\/?$/",label:"\u7F51\u5740\u5E26\u7AEF\u53E3\u53F7"}]}},{component:"Divider",label:"\u5206\u5272\u7EBF",icon:"radix-icons:divider-horizontal",colProps:{span:24},field:"",componentProps:{orientation:"center",dashed:!0}},{component:"Checkbox",label:"\u590D\u9009\u6846",icon:"ant-design:check-circle-outlined",colProps:{span:24},field:""},{component:"CheckboxGroup",label:"\u590D\u9009\u6846-\u7EC4",icon:"ant-design:check-circle-filled",field:"",colProps:{span:24},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{component:"Input",label:"\u8F93\u5165\u6846",icon:"bi:input-cursor-text",field:"",colProps:{span:24},componentProps:{type:"text"}},{component:"InputNumber",label:"\u6570\u5B57\u8F93\u5165\u6846",icon:"ant-design:field-number-outlined",field:"",colProps:{span:24},componentProps:{style:"width:200px"}},{component:"InputTextArea",label:"\u6587\u672C\u57DF",icon:"ant-design:file-text-filled",field:"",colProps:{span:24},componentProps:{}},{component:"Select",label:"\u4E0B\u62C9\u9009\u62E9",icon:"gg:select",field:"",colProps:{span:24},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{component:"Radio",label:"\u5355\u9009\u6846",icon:"ant-design:check-circle-outlined",field:"",colProps:{span:24},componentProps:{}},{component:"RadioGroup",label:"\u5355\u9009\u6846-\u7EC4",icon:"carbon:radio-button-checked",field:"",colProps:{span:24},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{component:"DatePicker",label:"\u65E5\u671F\u9009\u62E9",icon:"healthicons:i-schedule-school-date-time-outline",field:"",colProps:{span:24},componentProps:{}},{component:"RangePicker",label:"\u65E5\u671F\u8303\u56F4",icon:"healthicons:i-schedule-school-date-time-outline",field:"",colProps:{span:24},componentProps:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}},{component:"MonthPicker",label:"\u6708\u4EFD\u9009\u62E9",icon:"healthicons:i-schedule-school-date-time-outline",field:"",colProps:{span:24},componentProps:{placeholder:"\u8BF7\u9009\u62E9\u6708\u4EFD"}},{component:"TimePicker",label:"\u65F6\u95F4\u9009\u62E9",icon:"healthicons:i-schedule-school-date-time",field:"",colProps:{span:24},componentProps:{}},{component:"Slider",label:"\u6ED1\u52A8\u8F93\u5165\u6761",icon:"vaadin:slider",field:"",colProps:{span:24},componentProps:{}},{component:"Rate",label:"\u8BC4\u5206",icon:"ic:outline-star-rate",field:"",colProps:{span:24},componentProps:{}},{component:"Switch",label:"\u5F00\u5173",icon:"entypo:switch",field:"",colProps:{span:24},componentProps:{}},{component:"TreeSelect",label:"\u6811\u5F62\u9009\u62E9",icon:"clarity:tree-view-line",field:"",colProps:{span:24},componentProps:{treeData:[{label:"\u9009\u98791",value:"1",children:[{label:"\u9009\u9879\u4E09",value:"1-1"}]},{label:"\u9009\u98792",value:"2"}]}},{component:"Upload",label:"\u4E0A\u4F20",icon:"ant-design:upload-outlined",field:"",colProps:{span:24},componentProps:{api:()=>1}},{component:"Cascader",label:"\u7EA7\u8054\u9009\u62E9",icon:"ant-design:check-outlined",field:"",colProps:{span:24},componentProps:{options:[{label:"\u9009\u98791",value:"1",children:[{label:"\u9009\u9879\u4E09",value:"1-1"}]},{label:"\u9009\u98792",value:"2"}]}},{component:"slot",label:"\u63D2\u69FD",icon:"vs:timeslot-question",field:"",colProps:{span:24},componentProps:{slotName:"slotName"}}],A={component:"Transfer",label:"\u7A7F\u68AD\u6846",icon:"bx:bx-transfer-alt",field:"",colProps:{span:24},componentProps:{render:o=>o.title,dataSource:[{key:"key-1",title:"\u6807\u98981",description:"\u63CF\u8FF0",disabled:!1,chosen:!0},{key:"key-2",title:"title2",description:"description2",disabled:!0},{key:"key-3",title:"\u6807\u98983",description:"\u63CF\u8FF03",disabled:!1,chosen:!0}]}};x.push(A);const $=[{field:"",component:"Grid",label:"\u6805\u683C\u5E03\u5C40",icon:"icon-grid",componentProps:{},columns:[{span:12,children:[]},{span:12,children:[]}],colProps:{span:24},options:{gutter:0}}];export{a,x as b,N as c,$ as l};
