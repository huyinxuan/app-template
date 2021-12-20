
// 商品管理
import dataStatist from '@/views/process/dataStatistics';

/**
 * 审批局界面
 */
// // 核准证管理
// import hezhun from '@/views/sh/hezhun';
// // 审批局数据统计
// import hezhun1 from '@/views/process/projectMuck';
// // 巡查上报
// import hezhun2 from '@/views/process/projectMuck';
// // 企业加分--执法上报
// import hezhun3 from '@/views/process/projectMuck';


/**
 * 工程渣土全过程
 */
// 工程渣土
import projectMuck from '@/views/process/projectMuck';
// 装饰装修垃圾
import embellishRubbish from '@/views/process/embellishRubbish';
// 拆除垃圾
import dismantleRubbish from '@/views/process/dismantleRubbish';
// 企业基本信息
import companyInfo from '@/views/process/companyInfo';
// 车辆GPS监控
import carGPSMonitoring from '@/views/process/carGPSMonitoring';
// 企业考核管理
import companyCheckManage from '@/views/process/companyCheckManage';
// 企业日常考核
import companyEverydayCheck from '@/views/process/companyEverydayCheck';
// 企业年度考核
import companyCheckOfYear from '@/views/process/companyCheckOfYear';
// 企业加分管理
import companyAwardedMarksManage from '@/views/process/companyAwardedMarksManage';
// 资源化利用
import resourceUtilize from '@/views/process/resourceUtilize';
// 直接利用
import directUtilize from '@/views/process/directUtilize';
// 违规倾倒
import illegalDump from '@/views/process/illegalDump';
// 网格员信息管理
import griddingInfoManage from '@/views/process/griddingInfoManage';
// 工程渣土详情
import projectMuckDetail from '@/views/process/projectMuckDetail';
// 装修小区详情
import zxxqDetail from '@/views/process/zxxqDetail';
// 装修商铺详情
import zxspDetail from '@/views/process/zxspDetail';
// 拆除垃圾详情
import dismantleRubbishDetail from '@/views/process/dismantleRubbishDetail';
// 企业基本信息详情
import companyInfoDetail from '@/views/process/companyInfoDetail';
// 资源化利用详情
import resourceUtilizeDetail from '@/views/process/resourceUtilizeDetail';
// 违规倾倒详情
import illegalDumpDetail from '@/views/process/illegalDumpDetail';

export default[
{
    path: '/data/statistics',
    name: '数据统计',
    component: dataStatist,
    meta: {
      requireAuth: true
    }
  }, {
    path: '/process/projectMuck',
    name: '工程渣土',
    component: projectMuck,
    meta: {
      requireAuth: true
    }
  }, {
    path: '/process/embellishRubbish',
    name: '装饰装修垃圾',
    component: embellishRubbish,
    meta: {
      requireAuth: true
    }
  },
   
  {
    path: '/process/dismantleRubbish',
    name: '拆除垃圾',
    component: dismantleRubbish,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/companyInfo',
    name: '企业基本信息',
    component: companyInfo,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/projectMuckDetail',
    name: '工程渣土详情',
    component: projectMuckDetail,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/zxxqDetail',
    name: '装修小区详情',
    component: zxxqDetail,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/zxspDetail',
    name: '装修商铺详情',
    component: zxspDetail,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/dismantleRubbishDetail',
    name: '拆除垃圾详情',
    component: dismantleRubbishDetail,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/companyInfoDetail',
    name: '企业基本信息详情',
    component: companyInfoDetail,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/resourceUtilizeDetail',
    name: '资源化利用详情',
    component: resourceUtilizeDetail,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/illegalDumpDetail',
    name: '违规倾倒详情',
    component: illegalDumpDetail,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/carGPSMonitoring',
    name: '车辆GPS监控',
    component: carGPSMonitoring,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/companyCheckManage',
    name: '企业考核管理',
    component: companyCheckManage,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/companyEverydayCheck',
    name: '企业日常考核',
    component: companyEverydayCheck,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/companyCheckOfYear',
    name: '企业年度考核',
    component: companyCheckOfYear,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/companyAwardedMarksManage',
    name: '企业加分管理',
    component: companyAwardedMarksManage,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/resourceUtilize',
    name: '资源化利用',
    component: resourceUtilize,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/directUtilize',
    name: '直接利用',
    component: directUtilize,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/illegalDump',
    name: '违规倾倒',
    component: illegalDump,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/process/griddingInfoManage',
    name: '网格员信息管理',
    component: griddingInfoManage,
    meta: {
      requireAuth: true
    }
  }
]