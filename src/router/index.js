

import Router from 'vue-router';
// 登录
import login from '@/views/login';
// 首页
import home from '@/views/home/index';
/**
 * 基础菜单
 */
import dataStatis from '@/views/other/dataStatis';

import hezhun from '@/views/sh/hezhun';
import hzbj from '@/views/sh/hzbj';
import xcsb from '@/views/sh/xcsb';
import zfsc from '@/views/sh/zfsc';

import inspection from './inspection';
import apanage from './apanage';


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
                index: 1 ,
                requireAuth: false
            }
        }, {
            path: '/home',
            name: '首页',
            component: home,
            meta: {
                index: 2 ,
                requireAuth: false
            }
        },
        ...apanage,
        ...inspection,
         {
            path: '/dataStatis',
            name: '数据统计',
            component: dataStatis,
            hidden: true,
            meta: {
                index: 3,
                requireAuth: true
            }
        },
        {
            path: '/hezhun',
            name: '核准证管理',
            component: hezhun,
            hidden: true,
            meta: {
                index: 4,
                requireAuth: true
            }
        },{
            path: '/hzbj',
            name: '核准证编辑',
            component: hzbj,
            hidden: true,
            meta: {
                index: 5,
                requireAuth: true
            }
        },{
            path: '/xcsb',
            name: '巡查上报',
            component: xcsb,
            hidden: true,
            meta: {
                index: 6,
                requireAuth: true
            }
        },{
            path: '/zfsc',
            name: '执法上传',
            component: zfsc,
            hidden: true,
            meta: {
                index: 7,
                requireAuth: true
            }
        }
    ]
})