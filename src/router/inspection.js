
//违法处置（完成）
import violation from '@/views/inspection/violationDetails';



export default [
    {
        path: '/violation',
        name: '违法处置',
        component: violation,
        meta: {
            index:34,
            requireAuth: true
        }
    },
]
