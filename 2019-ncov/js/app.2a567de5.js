(function(t){function e(e){for(var r,i,c=e[0],u=e[1],s=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),a=n.n(r),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c={name:"app",components:{},mounted:function(){this.$router.push("/list")}},u=c,s=(n("034f"),n("2877")),l=Object(s["a"])(u,o,i,!1,null,null,null),p=l.exports,f=n("5c96"),d=n.n(f);n("c69f");a.a.use(d.a);var b=n("5880"),h=n.n(b);a.a.use(h.a);var m=new h.a.Store({state:{timeLineData:[],provinceData:[]},mutations:{setTimeLineData:function(t,e){t.timeLineData=e},setProvinceData:function(t,e){t.provinceData=e}}}),v=n("6389"),g=n.n(v),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","row-key":"id","tree-props":{children:"cities",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{prop:"name",label:"地区"}}),n("el-table-column",{attrs:{prop:"confirmedCount",label:"确诊"}}),n("el-table-column",{attrs:{prop:"deadCount",label:"死亡"}}),n("el-table-column",{attrs:{prop:"curedCount",label:"治愈"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.cities?[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.showGrow(e.row)}}},[t._v("增长图")])]:void 0}}],null,!0)})],1),n("el-dialog",{attrs:{title:"提示",visible:t.showGrowChart,width:"70%"},on:{"update:visible":function(e){t.showGrowChart=e}}},[n("v-chart",{attrs:{options:t.chartOption}})],1)],1)},w=[],O=(n("a4d3"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("e439"),n("dbb4"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("841c"),n("159b"),n("96cf"),n("1da1")),x=n("ade3"),j=n("08c1"),D=n("cebe"),P=n.n(D),S=n("9ca8");n("5c3d");function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){Object(x["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var M={name:"ProvinceList",components:{"v-chart":S["a"]},data:function(){return{tableData:[],showGrowChart:!1,chartOption:{color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:[],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"确诊",type:"bar",barWidth:"60%",data:[]}]}}},computed:L({},Object(j["b"])(["provinceData","timeLineData"])),methods:L({},Object(j["a"])(["setTimeLineData","setProvinceData"]),{showGrow:function(t){var e=this,n=t.provinceShortName,r=/新增(\d+)例/;console.log(this.timeLineData.length);var a=this.timeLineData.filter((function(t){return t.title.indexOf(n)>-1&&t.title.search(r)>-1})).map((function(t){return{count:parseInt(t.title.match(r)[1]),date:e.dateFormat(t.pubDate,"yyyy/MM/dd")}})).reverse();this.chartOption.xAxis[0].data=a.map((function(t){return t.date})),this.chartOption.series[0].data=a.map((function(t){return t.count})),this.showGrowChart=!0},dateFormat:function(t,e){if(!t)return"";"number"===typeof t&&(t=new Date(t));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),S:t.getMilliseconds()};for(var r in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("(".concat(r,")")).test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return e}}),mounted:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("./json/area.json");case 2:return n=e.sent,r=n.data,e.next=6,P.a.get("./json/timeline.json");case 6:a=e.sent,o=a.data,t.setProvinceData(r),t.setTimeLineData(o),i=1,t.tableData=r.map((function(t){return L({},t,{id:i++,name:t.provinceShortName,cities:t.cities.map((function(t){return L({},t,{id:i++,name:t.cityName})}))})}));case 12:case"end":return e.stop()}}),e)})))()}},k=M,C=Object(s["a"])(k,y,w,!1,null,"29926017",null),E=C.exports;a.a.use(g.a);var R=new g.a({routes:[{path:"/",redirect:"home"},{path:"/list",name:"list",component:E},{path:"/detail",name:"detail",component:E}]});a.a.config.productionTip=!1,new a.a({render:function(t){return t(p)},store:m,router:R}).$mount("#app")},5880:function(t,e){t.exports=Vuex},6389:function(t,e){t.exports=VueRouter},"85ec":function(t,e,n){},"8bbf":function(t,e){t.exports=Vue},c69f:function(t,e,n){},cebe:function(t,e){t.exports=axios}});
//# sourceMappingURL=app.2a567de5.js.map