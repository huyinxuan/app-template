//建筑垃圾供需查询
import lajichaxun from '@/views/apanage/lajichaxun';

import auditSelect from '@/views/apanage/auditSelect'
export default [
    {
        path: '/apanage/lajiSelect',
        name: '建筑垃圾供需查询',
        component: lajichaxun,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/apanage/auditSelect',
        name: '审批信息查询',
        component: auditSelect,
        meta: {
          requireAuth: true
        }
      }
]