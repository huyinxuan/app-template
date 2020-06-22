import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 初始化样式
import "@/assets/css/reset.css";
// 移动端rem适配js
import "@/assets/js/rem.js";
// 导入vant css(由于采用CDN导入这里无需导入)
// import 'vant/lib/index.css'
// 路由权限拦截
import "./utils/permission";
// 初始化svg雪碧图
import "./icons";

// vant 常用组件全局注册
import { Button, Row, Col, Toast } from "vant";
Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(Toast);

// 注册自定义全局组件
import "./utils/components";

// 开发模式启动mock
if (
  process.env.NODE_ENV == "development" ||
  process.env.VUE_APP_MODE == "mock"
) {
  require("../mock");
  console.log("本地mock数据已导入");
}
// 打印当前运行模式
console.log("当前运行模式为:", process.env);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
