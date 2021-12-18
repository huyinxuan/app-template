const adminMenu = [{
    menuid: 140,
    icon: "el-icon-s-home",
    menuname: "部门管理",
    hasThird: null,
    url: 'manage/bmgl',
    menus: null
}, {
    menuid: 141,
    icon: "el-icon-s-check",
    menuname: "职位管理",
    hasThird: null,
    url: 'manage/zwgl',
    menus: null
}, {
    menuid: 142,
    icon: "el-icon-s-custom",
    menuname: "用户管理",
    hasThird: null,
    url: 'manage/yhgl',
    menus: null
}, {
    menuid: 143,
    icon: "el-icon-data-line",
    menuname: "区域划分",
    hasThird: null,
    url: 'manage/qyhf',
    menus: null
}, {
    menuid: 144,
    icon: "el-icon-s-order",
    menuname: "公开信息管理",
    hasThird: null,
    url: 'publicmanage/index',
    menus: null
}, {
    menuid: 145,
    icon: "el-icon-s-marketing",
    menuname: "操作日志",
    hasThird: null,
    url: 'manage/czrz',
    menus: null
}]
const process = [{
    menuid: 246,
    icon: "el-icon-s-marketing",
    menuname: "数据统计",
    hasThird: null,
    url: 'data/statistics',
    menus: null
}, {
    menuid: 256,
    icon: "el-icon-s-marketing",
    menuname: "源头管理",
    hasThird: null,
    url: null,
    menus: [{
        menuid: 266,
        icon: "el-icon-s-marketing",
        menuname: "工程渣土",
        hasThird: null,
        url: 'process/projectMuck',
        menus: null
    }, {
        menuid: 267,
        icon: "el-icon-s-marketing",
        menuname: "装饰装修垃圾",
        hasThird: null,
        url: 'process/embellishRubbish',
        menus: null
    }, {
        menuid: 268,
        icon: "el-icon-s-marketing",
        menuname: "拆除垃圾",
        hasThird: null,
        url: 'process/dismantleRubbish',
        menus: null
    }]
}, {
    menuid: 368,
    icon: "el-icon-s-marketing",
    menuname: "运输管理",
    hasThird: null,
    url: null,
    menus: [{
            menuid: 369,
            icon: "el-icon-s-marketing",
            menuname: "企业基本信息",
            hasThird: null,
            url: 'process/companyInfo',
            menus: null
        },
        {
            menuid: 370,
            icon: "el-icon-s-marketing",
            menuname: "车辆GPS监控",
            hasThird: null,
            url: 'process/carGPSMonitoring',
            menus: null
        }, {
            menuid: 371,
            icon: "el-icon-s-marketing",
            menuname: "企业考核管理",
            hasThird: null,
            url: 'process/companyCheckManage',
            menus: null
        }, {
            menuid: 372,
            icon: "el-icon-s-marketing",
            menuname: "企业日常考核",
            hasThird: null,
            url: 'process/companyEverydayCheck',
            menus: null
        }, {
            menuid: 373,
            icon: "el-icon-s-marketing",
            menuname: "企业年度考核",
            hasThird: null,
            url: 'process/companyCheckOfYear',
            menus: null
        }, {
            menuid: 374,
            icon: "el-icon-s-marketing",
            menuname: "企业加分管理",
            hasThird: null,
            url: 'process/companyAwardedMarksManage',
            menus: null
        }
    ]
}, {
    menuid: 474,
    icon: "el-icon-s-marketing",
    menuname: "处置管理",
    hasThird: null,
    url: null,
    menus: [{
        menuid: 475,
        icon: "el-icon-s-marketing",
        menuname: "资源化利用",
        hasThird: null,
        url: 'process/resourceUtilize',
        menus: null
    }, {
        menuid: 476,
        icon: "el-icon-s-marketing",
        menuname: "直接利用",
        hasThird: null,
        url: 'process/directUtilize',
        menus: null
    }, {
        menuid: 477,
        icon: "el-icon-s-marketing",
        menuname: "违规倾倒",
        hasThird: null,
        url: 'process/illegalDump',
        menus: null
    }]
}, {
    menuid: 577,
    icon: "el-icon-s-marketing",
    menuname: "网格员信息管理",
    hasThird: null,
    url: 'process/griddingInfoManage',
    menus: null
}]
const apange = [{
    menuid: 246,
    icon: "el-icon-s-marketing",
    menuname: "数据统计",
    hasThird: null,
    url: 'data/statistics',
    menus: null

}, {
    menuid: 256,
    icon: "el-icon-s-marketing",
    menuname: "源头管理",
    hasThird: null,
    url: null,
    menus: [{
        menuid: 266,
        icon: "el-icon-s-marketing",
        menuname: "工程渣土",
        hasThird: null,
        url: 'process/projectMuck',
        menus: null
    }, {
        menuid: 267,
        icon: "el-icon-s-marketing",
        menuname: "装饰装修垃圾",
        hasThird: null,
        url: 'process/embellishRubbish',
        menus: null
    }, {
        menuid: 268,
        icon: "el-icon-s-marketing",
        menuname: "拆除垃圾",
        hasThird: null,
        url: 'process/dismantleRubbish',
        menus: null
    }]
}, {
    menuid: 368,
    icon: "el-icon-s-marketing",
    menuname: "运输管理",
    hasThird: null,
    url: 'data/statistics',
    menus: [{
            menuid: 369,
            icon: "el-icon-s-marketing",
            menuname: "企业基本信息",
            hasThird: null,
            url: 'process/companyInfo',
            menus: null
        },
        {
            menuid: 370,
            icon: "el-icon-s-marketing",
            menuname: "车辆GPS监控",
            hasThird: null,
            url: 'process/carGPSMonitoring',
            menus: null
        }, {
            menuid: 372,
            icon: "el-icon-s-marketing",
            menuname: "企业日常考核",
            hasThird: null,
            url: 'process/companyEverydayCheck',
            menus: null
        }, {
            menuid: 374,
            icon: "el-icon-s-marketing",
            menuname: "企业加分管理",
            hasThird: null,
            url: 'process/companyAwardedMarksManage',
            menus: null
        }
    ]
}, {
    menuid: 474,
    icon: "el-icon-s-marketing",
    menuname: "处置管理",
    hasThird: null,
    url: 'data/statistics',
    menus: [{
        menuid: 475,
        icon: "el-icon-s-marketing",
        menuname: "资源化利用",
        hasThird: null,
        url: 'process/resourceUtilize',
        menus: null
    }, {
        menuid: 476,
        icon: "el-icon-s-marketing",
        menuname: "直接利用",
        hasThird: null,
        url: 'process/directUtilize',
        menus: null
    }, {
        menuid: 477,
        icon: "el-icon-s-marketing",
        menuname: "违规倾倒",
        hasThird: null,
        url: 'process/illegalDump',
        menus: null
    }]
}, {
    menuid: 577,
    icon: "el-icon-s-marketing",
    menuname: "审批信息查询",
    hasThird: null,
    url: 'apanage/auditSelect',
    menus: null
}, {
    menuid: 578,
    icon: "el-icon-s-marketing",
    menuname: "建筑垃圾供需查询",
    hasThird: null,
    url: 'apanage/lajiSelect',
    menus: null
}, {
    menuid: 579,
    icon: "el-icon-s-marketing",
    menuname: "违法处置",
    hasThird: null,
    url: 'ins/violation',
    menus: null
}, {
    menuid: 580,
    icon: "el-icon-s-marketing",
    menuname: "网格员信息管理",
    hasThird: null,
    url: 'process/griddingInfoManage',
    menus: null
}]
const inspetion = [{
    menuid: 246,
    icon: "el-icon-s-marketing",
    menuname: "数据统计",
    hasThird: null,
    url: 'ins/enfStatistics',
    menus: null

}, {
    menuid: 248,
    icon: "el-icon-s-marketing",
    menuname: "严管示范街",
    hasThird: null,
    url: 'ins/enfStreetStatistics',
    menus: [{
        menuid: 349,
        icon: "el-icon-s-marketing",
        menuname: "数据统计",
        hasThird: null,
        url: 'ins/enfStreetStatistics',
        menus: null
    }, {
        menuid: 350,
        icon: "el-icon-s-marketing",
        menuname: "查询表",
        hasThird: null,
        url: 'ins/enfStreetTable',
        menus: null
    }]
}, {
    menuid: 251,
    icon: "el-icon-s-marketing",
    menuname: "违法处置",
    hasThird: null,
    url: 'ins/violation',
    menus: null
}, {
    menuid: 251,
    icon: "el-icon-s-marketing",
    menuname: "审批信息查询",
    hasThird: null,
    url: 'apanage/auditSelect',
    menus: null
}]
const insAudit = [{
    menuid: 246,
    icon: "el-icon-s-marketing",
    menuname: "数据统计",
    hasThird: null,
    url: 'ins/exaStatistics',
    menus: null

}, {
    menuid: 247,
    icon: "el-icon-s-marketing",
    menuname: "核准证管理",
    hasThird: null,
    url: 'ins/exaComparisonCertificate',
    menus: null
}]

const insJiaotong = [{
        menuid: 246,
        icon: "el-icon-s-marketing",
        menuname: "数据统计",
        hasThird: null,
        url: 'data/statistics',
        menus: null
    },
    {
        menuid: 247,
        icon: "el-icon-s-marketing",
        menuname: "核准证管理",
        hasThird: null,
        url: 'ins/exaComparisonCertificate',
        menus: null
    }
]

const insJiaojing = [{
        menuid: 246,
        icon: "el-icon-s-marketing",
        menuname: "数据统计",
        hasThird: null,
        url: 'data/statistics',
        menus: null
    },
    {
        menuid: 247,
        icon: "el-icon-s-marketing",
        menuname: "违法处置",
        hasThird: null,
        url: 'ins/violation',
        menus: null
    },
    {
        menuid: 577,
        icon: "el-icon-s-marketing",
        menuname: "审批信息查询",
        hasThird: null,
        url: 'apanage/auditSelect',
        menus: null
    }
]

const insZjj = [{
        menuid: 246,
        icon: "el-icon-s-marketing",
        menuname: "数据统计",
        hasThird: null,
        url: 'data/statistics',
        menus: null
    },
    {
        menuid: 247,
        icon: "el-icon-s-marketing",
        menuname: "违法处置",
        hasThird: null,
        url: 'ins/violation',
        menus: null
    },
    {
        menuid: 248,
        icon: "el-icon-s-marketing",
        menuname: "审批信息查询",
        hasThird: null,
        url: 'apanage/auditSelect',
        menus: null
    }
]
export {
    adminMenu,
    process,
    inspetion,
    apange,
    insAudit,
    insJiaotong,
    insJiaojing,
    insZjj
}