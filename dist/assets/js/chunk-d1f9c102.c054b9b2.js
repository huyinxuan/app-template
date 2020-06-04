(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1f9c102"],{"00ce":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-pull-refresh",{on:{refresh:t._onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t._onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t){return i("van-cell",{key:t,attrs:{title:t}})})),1)],1)],1)},s=[],r=(i("b0c0"),i("d3b7"),i("ade3")),a=i("d282"),o=i("1325"),c=i("a8c1"),l=i("3875"),u=i("543e"),h=Object(a["a"])("pull-refresh"),d=h[0],f=h[1],g=h[2],p=50,b=["pulling","loosing","success"],v=d({mixins:[l["a"]],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,value:{type:Boolean,required:!0},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:p}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{touchable:function(){return"loading"!==this.status&&"success"!==this.status&&!this.disabled},headStyle:function(){if(this.headHeight!==p)return{height:this.headHeight+"px"}}},watch:{value:function(t){this.duration=this.animationDuration,t?this.setStatus(+this.headHeight,!0):this.slots("success")||this.successText?this.showSuccessTip():this.setStatus(0,!1)}},mounted:function(){this.bindTouchEvent(this.$refs.track),this.scrollEl=Object(c["c"])(this.$el)},methods:{checkPullStart:function(t){this.ceiling=0===Object(c["b"])(this.scrollEl),this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart:function(t){this.touchable&&this.checkPullStart(t)},onTouchMove:function(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&(Object(o["c"])(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd:function(){var t=this;this.touchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(+this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},ease:function(t){var e=+this.headHeight;return t>e&&(t=t<2*e?e+(t-e)/2:1.5*e+(t-2*e)/4),Math.round(t)},setStatus:function(t,e){var i;i=e?"loading":0===t?"normal":t<this.headHeight?"pulling":"loosing",this.distance=t,i!==this.status&&(this.status=i)},genStatus:function(){var t=this.$createElement,e=this.status,i=this.distance,n=this.slots(e,{distance:i});if(n)return n;var s=[],r=this[e+"Text"]||g(e);return-1!==b.indexOf(e)&&s.push(t("div",{class:f("text")},[r])),"loading"===e&&s.push(t(u["a"],{attrs:{size:"16"}},[r])),s},showSuccessTip:function(){var t=this;this.status="success",setTimeout((function(){t.setStatus(0)}),this.successDuration)}},render:function(){var t=arguments[0],e={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""};return t("div",{class:f()},[t("div",{ref:"track",class:f("track"),style:e},[t("div",{class:f("head"),style:this.headStyle},[this.genStatus()]),this.slots()])])}}),m=i("7744");function x(t){var e=window.getComputedStyle(t),i="none"===e.display,n=null===t.offsetParent&&"fixed"!==e.position;return i||n}var S,k=i("5fbe"),w=Object(a["a"])("list"),T=w[0],O=w[1],j=w[2],y=T({mixins:[Object(k["a"])((function(t){this.scroller||(this.scroller=Object(c["c"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,s=t.offset,r=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var a=e.bottom-e.top;if(!a||x(i))return!1;var o=!1,c=t.$refs.placeholder.getBoundingClientRect();o="up"===r?e.top-c.top<=s:c.bottom-e.bottom<=s,o&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:O("loading"),key:"loading"},[this.slots("loading")||t(u["a"],{attrs:{size:"16"}},[this.loadingText||j("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:O("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:O("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:O("placeholder")});return t("div",{class:O(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}}),$=(i("96cf"),i("1da1")),L={data:function(){return{loading:!1,refreshing:!1,finished:!1,page:1,size:10,total:0,list:[]}},methods:{resetPageData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;this.refreshing=!1,this.loading=!1,this.finished=!1,this.page=1,this.total=0,this.size=t,this.list.length=0},_onLoad:function(){return Object($["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},_onRefresh:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.resetPageData(),t.refreshing=!0,e.next=4,t._getList();case 4:t.refreshing=!1;case 5:case"end":return e.stop()}}),e)})))()}}},B={mixins:[L],props:{},data:function(){return{list:[]}},computed:{},created:function(){},mounted:function(){},watch:{},methods:{_onLoad:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("页码：",t.page),t.loading=!0,e.next=4,new Promise((function(e,i){try{setTimeout((function(){for(var i=0;i<10;i++)t.list.push(t.list.length+1);t.loading=!1,t.page++,t.list.length>=40&&(t.finished=!0),e()}),1e3)}catch(n){i(n)}}));case 4:case"end":return e.stop()}}),e)})))()},_onRefresh:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.resetPageData(),t.refreshing=!0,e.next=4,t._onLoad();case 4:t.refreshing=!1;case 5:case"end":return e.stop()}}),e)})))()}},components:(S={},Object(r["a"])(S,y.name,y),Object(r["a"])(S,m["a"].name,m["a"]),Object(r["a"])(S,v.name,v),S)},R=B,E=i("2877"),C=Object(E["a"])(R,n,s,!1,null,"4014c3b0",null);e["default"]=C.exports},7744:function(t,e,i){"use strict";var n=i("c31d"),s=i("2638"),r=i.n(s),a=i("d282"),o=i("a142"),c=i("ba31"),l=i("48f4"),u=i("dfaf"),h=i("ad06"),d=Object(a["a"])("cell"),f=d[0],g=d[1];function p(t,e,i,n){var s=e.icon,a=e.size,u=e.title,d=e.label,f=e.value,p=e.isLink,b=i.title||Object(o["b"])(u);function v(){var n=i.label||Object(o["b"])(d);if(n)return t("div",{class:[g("label"),e.labelClass]},[i.label?i.label():d])}function m(){if(b)return t("div",{class:[g("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[u]),v()])}function x(){var n=i.default||Object(o["b"])(f);if(n)return t("div",{class:[g("value",{alone:!b}),e.valueClass]},[i.default?i.default():t("span",[f])])}function S(){return i.icon?i.icon():s?t(h["a"],{class:g("left-icon"),attrs:{name:s,classPrefix:e.iconPrefix}}):void 0}function k(){var n=i["right-icon"];if(n)return n();if(p){var s=e.arrowDirection;return t(h["a"],{class:g("right-icon"),attrs:{name:s?"arrow-"+s:"arrow"}})}}function w(t){Object(c["a"])(n,"click",t),Object(l["a"])(n)}var T=p||e.clickable,O={clickable:T,center:e.center,required:e.required,borderless:!e.border};return a&&(O[a]=a),t("div",r()([{class:g(O),attrs:{role:T?"button":null,tabindex:T?0:null},on:{click:w}},Object(c["b"])(n)]),[S(),m(),x(),k(),null==i.extra?void 0:i.extra()])}p.props=Object(n["a"])(Object(n["a"])({},u["a"]),l["c"]),e["a"]=f(p)},dfaf:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}}}]);