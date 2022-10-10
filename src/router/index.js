import Vue from "vue";
import Router from 'vue-router';
// 登录
import login from '@/views/index';
// 首页
import home from '@/views/home/home';


// 首页
import home1 from '@/views/home/home1';


// 启用路由
Vue.use(Router);


// 导出路由
export default new Router({
    routes: [{
            path: '/',
            name: '',
            component: login,
            meta: {
                index: 0,
                requireAuth: false
            }
        },
        {
            path: '/login',
            name: '登录',
            component: login,
            hidden: true,
            meta: {
                index: 1,
                requireAuth: false
            }
        }, {
            path: '/home',
            name: '首页',
            component: home,
            meta: {
                index: 2,
                requireAuth: false
            }
        }, {
            path: '/home1',
            name: '首页',
            component: home1,
            meta: {
                index: 2,
                requireAuth: false
            }
        }
    ]
})