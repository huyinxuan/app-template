//建筑垃圾供需查询
import weigui from '@/views/other/weigui';
// 账号管理
import countManage from '@/views/other/countManage';
// 历史数据
import history from '@/views/other/history';
export default [
  {
    path: '/weigui',
    name: '建筑垃圾供需查询',
    component: weigui,
    meta: {
      requireAuth: true,
      index: 44
    }
  }, {
    path: '/accoutManage',
    name: '账号管理',
    component: countManage,
    meta: {
      requireAuth: true,
      index: 45
    }
  }, {
    path: '/history',
    name: '历史记录',
    component: history,
    meta: {
      requireAuth: true,
      index: 46
    }
  }
]