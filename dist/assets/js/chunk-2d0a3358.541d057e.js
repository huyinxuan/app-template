(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3358"],{"00ce":function(e,n,t){"use strict";t.r(n);var r,i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("van-pull-refresh",{on:{refresh:e._onRefresh},model:{value:e.refreshing,callback:function(n){e.refreshing=n},expression:"refreshing"}},[t("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e._onLoad},model:{value:e.loading,callback:function(n){e.loading=n},expression:"loading"}},e._l(e.list,(function(e){return t("van-cell",{key:e,attrs:{title:e}})})),1)],1)],1)},a=[],s=(t("b0c0"),t("d3b7"),t("ade3")),o=(t("96cf"),t("1da1")),c=t("3089"),u={data:function(){return{loading:!1,refreshing:!1,finished:!1,page:1,size:10,total:0,list:[]}},methods:{resetPageData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;this.refreshing=!1,this.loading=!1,this.finished=!1,this.page=1,this.total=0,this.size=e,this.list.length=0},_onLoad:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},_onRefresh:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.resetPageData(),e.refreshing=!0,n.next=4,e._getList();case 4:e.refreshing=!1;case 5:case"end":return n.stop()}}),n)})))()}}},l={mixins:[u],props:{},data:function(){return{list:[]}},computed:{},created:function(){},mounted:function(){},watch:{},methods:{_onLoad:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("页码：",e.page),e.loading=!0,n.next=4,new Promise((function(n,t){try{setTimeout((function(){for(var t=0;t<10;t++)e.list.push(e.list.length+1);e.loading=!1,e.page++,e.list.length>=40&&(e.finished=!0),n()}),1e3)}catch(r){t(r)}}));case 4:case"end":return n.stop()}}),n)})))()},_onRefresh:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.resetPageData(),e.refreshing=!0,n.next=4,e._onLoad();case 4:e.refreshing=!1;case 5:case"end":return n.stop()}}),n)})))()}},components:(r={},Object(s["a"])(r,c["List"].name,c["List"]),Object(s["a"])(r,c["Cell"].name,c["Cell"]),Object(s["a"])(r,c["PullRefresh"].name,c["PullRefresh"]),r)},h=l,f=t("2877"),d=Object(f["a"])(h,i,a,!1,null,"4014c3b0",null);n["default"]=d.exports}}]);