
//违法处置详情（完成）
import violationDetails from '@/views/inspection/violationDetails';
//历史记录
import history from '@/views/inspection/history';
//历史详情记录
import historyDetails from '@/views/inspection/historyDetails';

export default [
    {
        path: '/violationDetails',
        name: '违法处置详情',
        component: violationDetails,
        meta: {
            index:34,
            requireAuth: true
        }
    },
    {
        path: '/history',
        name: '历史记录',
        component: history,
        meta: {
            index:34,
            requireAuth: true
        }
    },
    {
        path: '/historyDetails',
        name: '历史详情',
        component: historyDetails,
        meta: {
            index:34,
            requireAuth: true
        }
    }
]
