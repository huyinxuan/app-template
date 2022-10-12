import Vue from "vue";
import Router from 'vue-router';
// 登录
import login from '@/views/index';
// 首页
import home from '@/views/home/home';


// 首页
import home1 from '@/views/home/home1';


// 工作步骤
import work from '@/views/work/index';
import work1 from '@/views/work/work1';
import work2 from '@/views/work/work2';
import work3 from '@/views/work/work3';
import work4 from '@/views/work/work4';
import work5 from '@/views/work/work5';
import work6 from '@/views/work/work6';
import work7 from '@/views/work/work7';
import work8 from '@/views/work/work8';

// 告警列表
import alarm from '@/views/alarm/index';

// 个人中心
import my from '@/views/my/index';
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
        }, {
            path: '/my',
            name: '个人中心',
            component: my,
            meta: {
                index: 21,
                requireAuth: false
            }
        }, {
            path: '/work',
            name: '动火作业',
            component: work,
            meta: {
                index: 3,
                requireAuth: false
            }
        },
        {
            path: '/work1',
            name: '作业准备',
            component: work1,
            meta: {
                index: 4,
                requireAuth: false
            }
        },
        {
            path: '/work2',
            name: '作业交底',
            component: work2,
            meta: {
                index: 5,
                requireAuth: false
            }
        },
        {
            path: '/work3',
            name: '作业交底',
            component: work3,
            meta: {
                index: 6,
                requireAuth: false
            }
        },
        {
            path: '/work4',
            name: '作业交底',
            component: work4,
            meta: {
                index: 7,
                requireAuth: false
            }
        },
        {
            path: '/work5',
            name: '能源隔离',
            component: work5,
            meta: {
                index: 8,
                requireAuth: false
            }
        },
        {
            path: '/work6',
            name: '能源隔离',
            component: work6,
            meta: {
                index: 9,
                requireAuth: false
            }
        },
        {
            path: '/work7',
            name: '能源隔离',
            component: work7,
            meta: {
                index: 10,
                requireAuth: false
            }
        },
        {
            path: '/work8',
            name: '能源隔离',
            component: work8,
            meta: {
                index: 11,
                requireAuth: false
            }
        },{
            path: '/alarm',
            name: '告警信息',
            component: alarm,
            meta: {
                index: 12,
                requireAuth: false
            }
        }
    ]
})