//核准证查询（完成）
import QueryCertificate from '@/views/inspection/QueryCertificate';
//执法局_审批信息查询
import lajichaxun from '@/views/apanage/lajichaxun';
//执法局_数据统计（完成）
import enfStatistics from '@/views/inspection/enfStatistics';
//执法局_严管示范街数据统计（完成）
import enfStreetStatistics from '@/views/inspection/enfStreetStatistics';
//执法局_严管示范店铺详情
import enfStreetDetails from '@/views/inspection/enfStreetDetails';
//执法局_严管示范街查询(完成)
import enfStreetTable from '@/views/inspection/enfStreetTable';
//执法局_违法处置（和violation是同一个页面）
import enfViolation from '@/views/inspection/enfViolation';
//审批局_核准证管理（完成）
import exaComparisonCertificate from '@/views/inspection/exaComparisonCertificate';
//审批局_数据统计(完成)
import exaStatistics from '@/views/inspection/exaStatistics';
//其它_数据统计（相同界面，老胡写）
import ordinaryStatistics from '@/views/inspection/ordinaryStatistics';
//违法处置（完成）
import violation from '@/views/inspection/violation';
//违法处置详情(完成)
import violationDetails from '@/views/inspection/violationDetails';


export default [{
        path: '/ins/QueryCertificate',
        name: '核准证查询',
        component: QueryCertificate,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/ins/enfStreetDetails',
        name: '严管示范店铺详情',
        component: enfStreetDetails,
        meta: {
            requireAuth: true
        }
    },
    {
      path: 'apanage/auditSelect',
      name: '执法局审批信息查询',
      component: lajichaxun,
      meta: {
          requireAuth: true
      }
  },
    {
        path: '/ins/enfStatistics',
        name: '执法局数据统计',
        component: enfStatistics,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/ins/enfStreetStatistics',
        name: '执法局严管示范街数据统计',
        component: enfStreetStatistics,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/ins/enfStreetTable',
        name: '执法局严管示范街查询',
        component: enfStreetTable,
        meta: {
            requireAuth: true
        }
    }, {
        path: '/ins/enfViolation',
        name: '执法局违法处置',
        component: enfViolation,
        meta: {
            requireAuth: true
        }
    }, {
        path: '/ins/exaComparisonCertificate',
        name: '审批局核准证管理',
        component: exaComparisonCertificate,
        meta: {
            requireAuth: true
        }
    }, {
        path: '/ins/exaStatistics',
        name: '数据统计',
        component: exaStatistics,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/ins/ordinaryStatistics',
        name: '其它数据统计',
        component: ordinaryStatistics,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/ins/violation',
        name: '违法处置',
        component: violation,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/ins/violationDetails',
        name: '违法处置详情',
        component: violationDetails,
        meta: {
            requireAuth: true
        }
    }
]
