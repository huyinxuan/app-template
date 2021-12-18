import manageIndex from '@/views/manage/index'
import publicmanage from '@/views/publicManage/index';
import bmgl from '@/views/manage/bmgl';
import czrz from '@/views/manage/czrz';
import qyhf from '@/views/manage/qyhf';
import yhgl from '@/views/manage/yhgl';
import zwgl from '@/views/manage/zwgl';


export default [{
    path: '/manage/index',
    name: '后台管理首页',
    component: manageIndex,
    meta: {
        requireAuth: true
    }
}, {
    path: '/publicManage/index',
    name: 'publicManage', //公开信息管理
    component: publicmanage,
    hidden: true,
    meta: {
        requireAuth: false
    }
},{
        path: '/manage/bmgl',
        name: '部门管理', //部门管理
        component: bmgl,
        //hidden: true,
        meta: {
            requireAuth: true
        }
},{
    path: '/manage/czrz',
    name: '操作日志', //操作日志
    component: czrz,
    //hidden: true,
    meta: {
        requireAuth: true
    }
},{
    path: '/manage/qyhf',
    name: '区域划分', //区域划分
    component: qyhf,
    //hidden: true,
    meta: {
        requireAuth: true
    }
},{
    path: '/manage/yhgl',
    name: '用户管理', //用户管理
    component: yhgl,
    //hidden: true,
    meta: {
        requireAuth: true
    }
},{
    path: '/manage/zwgl',
    name: '职位管理', //职位管理
    component: zwgl,
    //hidden: true,
    meta: {
        requireAuth: true
    }
}]