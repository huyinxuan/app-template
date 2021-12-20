//建筑垃圾供需查询
import weigui from '@/views/other/weigui';
export default [
    {
        path: '/weigui',
        name: '建筑垃圾供需查询',
        component: weigui,
        meta: {
          requireAuth: true,
          index: 44
        }
      }
]