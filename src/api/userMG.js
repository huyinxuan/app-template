import axios from 'axios';
import { loginreq, req, reput, reget,  delt } from './axiosFun';

// 登录接口
export const login = (params) => { return loginreq("post", "/api/login", params) };
// 登录接口
export const loginSms = (params) => { return loginreq("post", "/api/smslogin", params) };
export const sendMsgCode = (params) => { return loginreq("post", "/api/sendMsgCode", params) };

// 获取用户菜单
export const menu = (params) => { return reget('get', "/api/sysMenu/menuTree").then(res => res.data) };
// 退出接口
export const loginout = () => { return axios.delete("/api/login?&token=" + localStorage.getItem('logintoken')).then(res => res.data) };

/**
 * 用户管理
 **/
// 用户管理-获取用户列表
export const userList = (params) => { return req("post", "/api/User/list", params) };
// 用户管理-保存（添加编辑）
export const userSave = (params) => { return req("post", "/api/User/save", params) };
// 用户管理-删除用户
export const userDelete = (params) => { return axios.delete("/api/User/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };
// 用户管理-重置密码
export const userPwd = (params) => { return req("post", "/api/User/pwd", params) };
// 用户管理-修改状态
export const userLock = (params) => { return axios.get("/api/User/lock?userId=" + params.userId + "&lock=" + params.lock + "&token=" + localStorage.getItem('logintoken')) };
// 用户管理-数据权限
export const UserDeptTree = (params) => { return axios.get("/api/UserDept/tree/" + params + "?token=" + localStorage.getItem('logintoken')) };
// 用户管理-数据权限保存
export const UserDeptSave = (params) => { return req("post", "/api/UserDept/save", params) };
// 用户管理-获取部门设置
export const UserDeptdeptTree = (params) => { return axios.get("/api/UserDept/deptTree/" + params + "?token=" + localStorage.getItem('logintoken')) };
// 用户管理-保存部门设置
export const UserChangeDept = (params) => { return req("post", "/api/User/change/dept", params) };
// 用户管理-用户下线
export const userExpireToken = (params) => { return req("get", "/api/User/expireToken/" + params, {}) };
// 用户管理-刷新缓存
export const userFlashCache = (params) => { return req("get", "/api/User/flashCache/" + params, {}) };

/**
 * 菜单管理
 **/
// 菜单管理-获取菜单Module/list
export const ModuleList = () => { return req("post", "/api/Module/list") };
// 菜单管理-根据菜单获取数据
export const ModuleGet = (params) => { return axios.get("/api/Module/get/" + params + "?token=" + localStorage.getItem('logintoken')) };
// 菜单管理-获取父级菜单Module/nodes
export const ModuleNodes = (params) => { return req("post", "/api/Module/nodes", params) };
// 菜单管理-修改菜单
export const ModuleSave = (params) => { return req("post", "/api/Module/save", params) };
// 菜单管理-删除菜单
export const ModuleDelete = (params) => { return axios.delete("/api/Module/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };

/**
 * 角色管理
 **/
// 角色管理-获取角色列表
export const roleList = (params) => { return req("post", "/api/Role/list", params) };
// 角色管理-保存（添加编辑）
export const roleSave = (params) => { return req("post", "/api/Role/save", params) };
// 角色管理-删除角色
export const roleDelete = (params) => { return axios.delete("/api/Role/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };
// 角色管理-菜单权限（获取）
export const RoleRightTree = (params) => { return axios.get("/api/RoleRight/tree/" + params + "?token=" + localStorage.getItem('logintoken')) };
// 角色管理-菜单权限（保存）
export const RoleRightSave = (params) => { return req("post", "/api/RoleRight/save", params) };

/**
 * 公司管理
 **/
// 公司管理-获取公司列表
export const deptList = (params) => { return req("post", "/api/Dept/list", params) };
// 公司管理-保存（添加编辑）
export const deptSave = (params) => { return req("post", "/api/Dept/save", params) };
// 公司管理-删除公司
export const deptDelete = (params) => { return axios.get("/api/Dept/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };

/**
 * 系统环境变量
 **/
// 系统环境变量-获取系统环境变量列表
export const variableList = (params) => { return req("post", "/api/Variable/list", params) };
// 系统环境变量-保存（添加编辑）
export const variableSave = (params) => { return req("post", "/api/Variable/save", params) };
// 系统环境变量-删除系统环境变量
export const variableDelete = (params) => { return axios.delete("/api/Variable/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };

/**
 * 权限管理
 **/
// 权限管理-获取权限列表
export const permissionList = (params) => { return req("post", "/api/Permission/list", params) };
// 权限管理-保存权限
export const ermissionSave = (params) => { return req("post", "/api/Permission/save", params) };
// 权限管理-删除权限
export const ermissionDelete = (params) => { return axios.delete("/api/Permission/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };
// 权限管理-获取权限
export const roleDropDown = () => { return axios.get("/api/Role/dropDown/all?&token=" + localStorage.getItem('logintoken')).then(res => res.data) };
// 权限管理-配置权限
export const RolePermission = (params) => { return req("post", "/api/RolePermission/save", params) };


// 工程渣土
export const gcztList = (params) => { return reget("get", "/api/suree/gczt/gcztList", params) };
// 工程渣土修改
export const editLock = (params) => { return reput("put", "/api/suree/gczt/editGongchengzhatu", params) };
// 工程渣土新增
export const insertZt = (params) => { return reput("post", "/api/suree/gczt/addGongchengzhatu", params) };
// 工程渣土导出
export const importDc = (params) => { return reget("get", "/api/suree/gczt/gcztExport", params) };
// 工程渣土删除
export const deleteZt = (params) => { return delt("DELETE", "/api/suree/gczt/remove1", params) };
// 工程渣土详情违规查询
export const findZt = (params) => { return reget("get", "/api/complaints/selectComplaintsList", params) };
// 工程渣土核准证
export const findhz = (params) => { return reget("get", "/api/suree/gczt/approvalCardlist", params) };
// 工程渣土核视频
export const getVideos = (params) => { return reget("get", "/api/suree/gczt/videos", params) };
// 垃圾产生列表接口
export const findlj = (params) => { return reget("get", "/api/suree/area/muckList", params) };
// 垃圾产生编辑接口
export const editlj = (params) => { return reput("put", "/api/suree/area/editMuck", params) };
// 垃圾产生添加接口
export const addlj = (params) => { return reput("post", "/api/suree/area/addMuck", params) };
// 垃圾产生删除接口
export const dellj = (params) => { return delt("delete", "/api/suree/area/removeMuck", params) };

// 装修小区列表接口
export const findxq = (params) => { return reget("get", "/api/suree/zxxq/zxxqList", params) };
// 装修小区添加接口
export const addxq = (params) => { return reput("post", "/api/suree/zxxq/addZxxq", params) };
// 装修小区编辑接口
export const editxq = (params) => { return reput("put", "/api/suree/zxxq/editZxxq", params) };
// 装修小区删除接口
export const delxq = (params) => { return delt("delete", "/api/suree/zxxq/removeZxxq", params) };
// 装修小区运输详情
export const ysxq = (params) => { return reget("get", "/api/suree/zxxq/transportInfo", params) };
// 装修小区导出
export const importxq = (params) => { return reget("get", "/api/suree/zxxq/zxxqExport", params) };


// 装修店铺列表接口
export const finddp = (params) => { return reget("get", "/api/suree/zxsp/zxspList", params) };
// 装修店铺添加接口
export const adddp = (params) => { return reput("post", "/api/suree/zxsp/addZhuangxiushangpu", params) };
// 装修店铺编辑接口
export const editdp = (params) => { return reput("put", "/api/suree/zxsp/editZhuangxiushangpu", params) };
// 装修店铺删除接口
export const deldp = (params) => { return delt("delete", "/api/suree/zxsp/remove4", params) };
// 装修店铺运输详情
export const ysxqsp = (params) => { return reget("get", "/api/suree/zxsp/transportInfo", params) };
// 装修店铺导出
export const zxspExport = (params) => { return reget("get", "/api/suree/zxsp/zxspExport", params) };


//拆除垃圾列表接口
export const findcclj = (params) => { return reget("get", "/api/suree/cclj/ccljList", params) };
// 拆除垃圾添加接口
export const addcclj = (params) => { return reput("post", "/api/suree/cclj/addChaichulaji", params) };
// 拆除垃圾编辑接口
export const editcclj = (params) => { return reput("put", "/api/suree/cclj/editChaichulaji", params) };
// 拆除垃圾删除接口
export const delcclj = (params) => { return delt("delete", "/api/suree/cclj/remove3", params) };
// 拆除垃圾准证
export const findccljhz = (params) => { return reget("get", "/api/suree/cclj/approvalCardlist", params) };
// 拆除垃圾视频
export const getVideoscclj = (params) => { return reget("get", "/api/suree/cclj/videos", params) };
// 拆除垃圾导出
export const importcclj = (params) => { return reget("get", "/api/suree/cclj/ccljExport", params) };


//企业基本信息列表接口
export const findcompanyInfo = (params) => { return reget("get", "/api/suree/enterprise/list", params) };
// 企业基本信息添加接口
export const addcompanyInfo = (params) => { return reput("post", "/api/suree/enterprise", params) };
// 企业基本信息编辑接口
export const editcompanyInfo = (params) => { return reput("put", "/api/suree/enterprise", params) };
// 企业基本信息删除接口
export const delcompanyInfo = (params) => { return delt("delete", "/api/suree/enterprise", params) };
// 企业基本信息视频
export const getVideosCompanyInfo = (params) => { return reget("get", "/api/suree/cclj/videos", params) };
// 企业基本信息详情违规查询
export const findcompanyInfoWg = (params) => { return reget("get", "/api/suree/epsDetail/complaintOfEpsList", params) };
// 企业基本信息导出
export const importqy = (params) => { return reget("get", "/api/suree/enterprise/export", params) };
//企业基本信息详情接口
export const findcompanyInfoDetail = (params) => { return delt("get", "/api/suree/enterprise", params) };
//企业基本信息详情拥有车辆
export const findcompanyDetailhveCar = (params) => { return delt("get", "/api/suree/epsDetail/carOfEpsList", params) };
//车辆导出
export const exportCar = (params) => { return reget("get", "/api/suree/car/export", params) };
//运输车辆拥有车辆分页
export const hveCarOfpage = (params) => { return reget("get", "/api/suree/car/list", params) };
// 运输车辆编辑接口
export const editCar = (params) => { return reput("put", "/api/suree/car", params) };
// 运输车辆删除接口
export const delCar = (params) => { return delt("delete", "/api/suree/car", params) };
// 运输车辆添加接口
export const addCar = (params) => { return reput("post", "/api/suree/car", params) };


// 企业名称下拉
export const enterpriseDropList = (params) => { return reget("get", "/api/suree/enterprise/enterpriseDropList", params) };
//企业扣分明细
export const okList = (params) => { return reget("get", "/api/suree/punishDaily/okList", params) };
// 企业扣分标准列表
export const punishDailyDropList = (params) => { return reget("get", "/api/suree/punishDaily/punishDailyDropList", params) };
//企业年度评分
export const scoreYearList = (params) => { return reget("get", "/api/suree/punishYear/scoreYearList", params) };
// 企业年度扣分
export const punishYearDropList = (params) => { return reget("get", "/api/suree/punishYear/punishYearDropList", params) };
// 发起考核
export const addOfYear = (params) => { return reget("post", "/api/suree/punishYear/add", params) };

//年度扣分占比
export const monthPercent = (params) => { return reget("get", "/api/suree/assessment/monthPercent", params) };
//季度扣分占比
export const quarterPercent = (params) => { return reget("get", "/api/suree/assessment/quarterPercent", params) };


// 编辑考核
export const updateOfYear = (params) => { return reget("put", "/api/suree/punishYear/update", params) };

//企业加分管理列表接口
export const companylist = (params) => { return reget("get", "/api/suree/reward/list", params) };
// 企业加分管理添加接口
export const companyreward = (params) => { return reput("post", "/api/suree/reward", params) };
// 企业加分管理审核通过
export const  companyagree= (params) => { return reget("put", "/api/suree/reward/agree", params) };
// 企业加分管理审核拒绝
export const companyreject = (params) => { return reget("put", "/api/suree/reward/reject", params) };
//资源化利用列表接口
export const zylylist = (params) => { return reget("get", "/api/suree/dump/list", params) };
// 资源化利用添加接口
export const zylyaddump = (params) => { return reput("post", "/api/suree/dump", params) };
// 资源化利用修改
export const  zylydump= (params) => { return reput("put", "/api/suree/dump", params) };
// 资源化利用删除
export const zylydeldump = (params) => { return delt("delete", "/api/suree/dump", params) };
// 资源化利用详情视频
export const zylyVideo= (params) => { return reget("get", "/api/suree/dump/dumpVideo", params) };
// 资源化利用导出
export const zylyexport = (params) => { return reget("get", "/api/suree/dump/export", params) };

//企业考核管理
export const checklist = (params) => { return reget("get", "/api/suree/assessment/list", params) };
//年度扣分占比
export const checkmonth = (params) => { return reget("get", "/api/suree/assessment/monthPercent", params) };
//.季度扣分占比
export const checkquarter = (params) => { return reget("get", "/api/suree/assessment/quarterPercent", params) };
// 网格员管理
export const wgyglList = (params) => { return reget("get", "/api/gridMember/list", params) };
// 网格员启动、禁用
export const wgyLock = (params) => { return reput("put", "/api/gridMember/editStatus", params) };
// 网格员导出
export const importWgy = (params) => { return reget("get", "/api/gridMember/exportExcel", params) };
// 删除网格员
export const delWgy = (params) => { return reget("delete", "/api/gridMember", params) };
// 新增网格员/编辑
export const insetWgy = (params) => { return reput("post", "/api/gridMember", params) };
export const putWgy = (params) => { return reput("put", "/api/gridMember", params) };


//直接利用列表接口
export const zjlist = (params) => { return reget("get", "/api/suree/directUse/list", params) };
// 直接利用导出
export const zjexport = (params) => { return reget("get", "/api/suree/directUse/export", params) };

// 违规倾倒列表
export const wgList = (params) => { return reget("get", "/api/suree/dumpOut/list", params) };
// 违规倾倒修改
export const wgedit = (params) => { return reput("put", "/api/suree/dumpOut", params) };
// 违规倾倒新增
export const wginsert = (params) => { return reput("post", "/api/suree/dumpOut", params) };
// 违规倾倒导出
export const importwg = (params) => { return reget("get", "/api/suree/dumpOut/export", params) };
// 违规倾倒删除
export const deletewg = (params) => { return delt("DELETE", "/api/suree/dumpOut", params) };
// 违规倾倒详情视频
export const wgVideo= (params) => { return reget("get", "/api/suree/dumpOut/dumpOutVideo", params) };


// 部门管理列表
export const deptList1 = (params) => { return reget("get", "/api/system/dept/list", params) };
// 部门管理修改
export const editdept = (params) => { return reput("put", "/api/system/dept", params) };
// 部门管理新增
export const insertdept = (params) => { return reput("post", "/api/system/dept", params) };
// 部门管理删除
export const deletedept = (params) => { return delt("DELETE", "/api/system/dept", params) };
// 部门管理下拉
export const deptxl = (params) => { return reget("get", "/api/system/dept/deptTree", params) };
// 职位下拉列表
export const userxl = (params) => { return reget("get", "/api/system/role/roleIds", params) };


// 职位管理列表
export const zwList = (params) => { return reget("get", "/api/system/role/list", params) };
// 职位管理修改
export const editzw = (params) => { return reput("put", "/api/system/role", params) };
// 职位管理新增
export const insertzw = (params) => { return reput("post", "/api/system/role", params) };
// 职位管理删除
export const deletezw = (params) => { return delt("DELETE", "/api/system/role", params) };

// 用户管理列表
export const yhList = (params) => { return reget("get", "/api/system/user/list", params) };
// 用户管理列表
export const yhListAll = (params) => { return reget("get", "/api/system/user/listAll", params) };
// 用户管理修改
export const edityh = (params) => { return reput("put", "/api/system/user", params) };
// 用户管理新增
export const insertyh = (params) => { return reput("post", "/api/system/user", params) };
// 用户管理删除
export const deleteyh = (params) => { return delt("DELETE", "/api/system/user", params) };

// 操作日志列表
export const czList = (params) => { return reget("get", "/api/monitor/operlog/list", params) };
// // 职位管理修改
// export const editcz = (params) => { return reput("put", "/api/system/role", params) };
// // 职位管理新增
// export const insertcz = (params) => { return reput("post", "/api/system/role", params) };
// // 职位管理删除
// export const deletecz = (params) => { return delt("DELETE", "/api/system/role", params) };

//小程序核准查询
export const hzList = (params) => { return reget("get", "/api/approvalCard/selectApprovalCardList", params) };
// 小程序核准删除
export const deletehz = (params) => { return reget("DELETE", "/api/approvalCard/deleteApprovalCard", params) };
