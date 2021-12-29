
//违法处置详情
import violationDetails from '@/views/inspection/violationDetails';

//违法处置
import violation from '@/views/inspection/violation';

//违法处置详情(修改执法处置)
import violationDisposal from '@/views/inspection/violationDisposal';

//违法处置详情(申诉)
import vioProsecution from '@/views/inspection/vioProsecution';

//审核管理
import examine from '@/views/inspection/examine';

//历史详情记录
import historyDetails from '@/views/inspection/historyDetails';

//新增账号页面
import countManageAdd from '@/views/other/countManageAdd';


export default [
    {
        path: '/violationDetails',
        name: '违法处置详情',
        component: violationDetails,
        meta: {
            index:56,
            requireAuth: true
        }
    }, 
    {
        path: '/countManageAdd',
        name: '新增账号页面',
        component: countManageAdd,
        meta: {
            index:49,
            requireAuth: true
        }
    },
    {
        path: '/examine',
        name: '审核管理',
        component: examine,
        meta: {
            index:14,
            requireAuth: true
        }
    },
    {
        path: '/historyDetails',
        name: '历史详情',
        component: historyDetails,
        meta: {
            index:50,
            requireAuth: true
        }
    }
    ,
    {
        path: '/violation',
        name: '违法处置',
        component: violation,
        meta: {
            index:24,
            requireAuth: true
        }
    }  ,
    {
        path: '/wfczcl',
        name: '修改执法处置',
        component: violationDisposal,
        meta: {
            index:34,
            requireAuth: true
        }
    } ,
    {
        path: '/wfczss',
        name: '申诉',
        component: vioProsecution,
        meta: {
            index:18,
            requireAuth: true
        }
    }
]
