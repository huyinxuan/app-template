
//违法处置（完成）
import violation from '@/views/inspection/violation';



export default [
    {
        path: '/ins/violation',
        name: '违法处置',
        component: violation,
        meta: {
            requireAuth: true
        }
    },
]
