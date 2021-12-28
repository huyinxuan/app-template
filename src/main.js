import Vue from "vue";
import App from "./App.vue";
import router from './router';
import store from './vuex/store';

import "@/assets/css/common.scss";

// 初始化样式
import "@/assets/css/reset.css";

// rem 适配js
// import 'amfe-flexible'

// 设置html根字体大小
import "@/assets/css/font_html.css";

// 导入vant css(由于采用配置主题方式，这里需要导入vant less 主题文件,如果不需要自定义主题注释下面代码，然后解除config/cdn.js 中vant主题样式的注释)
import "vant/lib/index.less";


// 初始化svg图标
import "./icons/index";

// mock模式
if (process.env.VUE_APP_MODE == "mock") {
    require("../mock");
    console.log("本地mock数据已导入");
}

// 注册自定义全局组件
import components from "./utils/components";
// 注册全局插件
// import plugins from "./utils/plugins";

import * as echarts from 'echarts';
import moment from 'moment' //导入文件
Vue.prototype.$moment = moment; //赋值使用
//注册百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, { ak: 'ak=6pVSdLLnNEBwpgHl9VjcaNqA32Ph6iMg   ' })

import { Empty, Dialog, Toast } from 'vant';
Vue.use(Empty);
// 弹出框
Vue.use(Dialog);
Vue.use(Toast);
Vue.prototype.$echarts = echarts;

//预览
// import Vue from 'vue';
import { ImagePreview } from 'vant';
Vue.use(ImagePreview);

// Vue.use(plugins).use(components);
Vue.prototype.$setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
Vue.prototype.$getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
}


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");