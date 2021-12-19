
import Router from 'vue-router';
// 登录
import login from '@/views/login';
// 首页
import home from '@/views/home/index';
/**
 * 基础菜单
 */
 import dataStatis from '@/views/other/dataStatis';
 



// 启用路由
Vue.use(Router);

// 导出路由
export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: login,
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/login',
            name: '登录',
            component: login,
            hidden: true,
            meta: {
                requireAuth: false
            }
        }, {
            path: '/home',
            name: '首页',
            component: home,
            hidden: true,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/dataStatis',
            name: '数据统计',
            component: dataStatis,
            hidden: true,
            meta: {
                requireAuth: true
            }
        }
    ]
})