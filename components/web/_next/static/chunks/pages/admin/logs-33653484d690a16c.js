(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1774],{57838:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(97685),u=n(67294);function i(){var e=u.useReducer(function(e){return e+1},0);return(0,r.Z)(e,2)[1]}},25378:function(e,t,n){"use strict";var r=n(67294),u=n(57838),i=n(24308);t.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,r.useRef)({}),n=(0,u.Z)();return(0,r.useEffect)(function(){var r=i.ZP.subscribe(function(r){t.current=r,e&&n()});return function(){return i.ZP.unsubscribe(r)}},[]),t.current}},97183:function(e,t,n){"use strict";var r=n(2897),u=n(7293),i=r.ZP;i.Header=r.h4,i.Footer=r.$_,i.Content=r.VY,i.Sider=u.Z,t.Z=i},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return u}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function u(e){return e?r[e]:r.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(19013),u=n(13882);function i(e,t){return(0,u.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(59910),u=n(13882),i=n(93645);function o(e,t,n){(0,u.Z)(2,arguments);var o=(0,r.Z)(e,t)/1e3;return(0,i.u)(null==n?void 0:n.roundingMethod)(o)}},23426:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/logs",function(){return n(87905)}])},82536:function(e,t,n){"use strict";n.d(t,{o:function(){return d}});var r=n(85893);n(67294);var u=n(85818),i=n(20550),o=n(54398),c=n(53731),s=n(58091);let{Title:l}=u.Z;function a(e,t){let n="black";return"warning"===t.level?n="orange":"error"===t.level&&(n="red"),(0,r.jsx)(i.Z,{color:n,children:e})}function f(e){return(0,r.jsx)(c.Z,{children:e})}let d=e=>{let{logs:t,pageSize:n}=e;return(null==t?void 0:t.length)?(0,r.jsxs)("div",{className:"logs-section",children:[(0,r.jsx)(l,{children:"Logs"}),(0,r.jsx)(o.Z,{size:"middle",dataSource:t,columns:[{title:"Level",dataIndex:"level",key:"level",filters:[{text:"Info",value:"info"},{text:"Warning",value:"warning"},{text:"Error",value:"Error"}],onFilter:(e,t)=>0===t.level.indexOf(e),render:a},{title:"Timestamp",dataIndex:"time",key:"time",render:e=>{let t=new Date(e);return(0,s.Z)(t,"pp P")},sorter:(e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Message",dataIndex:"message",key:"message",render:f}],rowKey:e=>e.time,pagination:{pageSize:n||20}})]}):null}},87905:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(85893),u=n(67294),i=n(82536),o=n(64777),c=n(6960);function s(){let[e,t]=(0,u.useState)([]),n=async()=>{try{let e=await (0,o.rQ)(o.sG);t(e)}catch(e){console.log("==== error",e)}};return(0,u.useEffect)(()=>{let e=null;return setInterval(n,5e3),n(),e=setInterval(n,5e3),()=>{clearInterval(e)}},[]),(0,r.jsx)(i.o,{logs:e,pageSize:20})}s.getLayout=function(e){return(0,r.jsx)(c.l,{page:e})}},9008:function(e,t,n){e.exports=n(83121)},11163:function(e,t,n){e.exports=n(80880)}},function(e){e.O(0,[173,164,2744,9680,4931,5402,2231,7381,5818,492,8014,9915,4041,3698,3013,4398,8091,9863,180,6960,9774,2888,179],function(){return e(e.s=23426)}),_N_E=e.O()}]);