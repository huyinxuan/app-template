import axios from 'axios';
import { loginreq, req  ,reput ,reget, delt} from './axiosFun';

//监督检查管理相关界面接口
// 核准证查询
export const CardList = (params) => {debugger; return reget("get", "/api/approvalCard/selectApprovalCardListPage", params) };
//核准证EXCEL导出
export const exportExcel = (params) => { return reget("get", "/api/approvalCard/exportExcel", params) };
//核准证办理情况统计图
export const statistics = (params) => { return reget("get", "/api/approvalCard/ApprovalCard/statistics", params) };

//执法局数据统计-违规多发地
export const generalOverviewVio = (params) => { return reget("get", "/api/complaints/violation/generalOverview", params) };
//执法局数据统计-总体概况
export const generalOverviewSti = (params) => { return reget("get", "/api/complaints/statistics/generalOverview", params) };
//执法局-严管示范街-数据统计-解决率趋势
export const street = (params) => { return reget("get", "/api/complaints/tendency/street", params) };
//执法局数据统计-执法排名
export const generalOevrankview = (params) => { return reget("get", "/api/complaints/rank/generalOverview", params) };

//执法局-严管示范街-数据统计-处理事件占比
export const proportionStreet = (params) => { return reget("get", "/api/complaints/proportion/street", params) };


//执法局_严管示范街 查询表
export const shifanjieList = (params) => { return reget("get", "/api/suree/zxsp/shifanjieList", params) };
//执法局数据统计-解决率趋势
export const generalOverview = (params) => { return reget("get", "/api/complaints/tendency/generalOverview", params) };
//执法局_店铺装修/严管示范街 添加
export const addZhuangxiushangpu = (params) => { return reput("post", "/api/suree/zxsp/addZhuangxiushangpu", params) };
//执法局_店铺装修/严管示范街 编辑
export const editZhuangxiushangpu = (params) => { return reput("put", "/api/suree/zxsp/editZhuangxiushangpu", params) };
//执法局_店铺装修/严管示范街 删除
export const remove4 = (params) => { return delt("delete", "/api/suree/zxsp/remove4", params) };
//执法局_严管示范街 运输信息
export const transportInfo = (params) => { return reget("get", "/api/suree/zxsp/transportInfo", params) };
//执法局_严管示范街 视频
export const videos = (params) => { return reget("get", "/api/suree/zxsp/videos", params) };
//执法局_严管示范街 商铺数据列表
export const zxspList = (params) => { return reget("get", "/api/suree/zxsp/zxspList", params) };
//装修商铺/严管示范街--导出
export const zxspExport = (params) => { return reget("get", "/api/suree/zxsp/zxspExport", params) };

//违法处置
export const ComplaintsList = (params) => { return reget("get", "/api/complaints/selectComplaintsListPage", params) };
//违法处置详情
export const ComplaintsById = (params) => { return reget("get", "/api/complaints/selectComplaintsById", params) };
//修改违法事件信息
export const updateComplaints = (params) => { return reput("put", "/api/complaints/updateComplaints", params) };
//根据id删除违法事件信息
export const deleteComplaints = (params) => { return reget("delete", "/api/complaints/deleteComplaints", params) };
//获取扣分列表(违规类型下拉列表)
export const punishDailyDropList = (params) => { return reget("get", "/api/suree/punishDaily/punishDailyDropList", params) };
//企业下拉列表
export const enterpriseDropList = (params) => { return reget("get", "/api/suree/enterprise/enterpriseDropList", params) };
//区域下拉列表
export const selectRegionList = (params) => { return reget("get", "/api/region/selectRegionList", params) };


//违规处理 详情
export const selectComplaintRecordById = (params) => { return reget("get","/api/complaintRecord/selectComplaintRecordById", params) };
//违规处理 编辑
export const updateComplaintRecord = (params) => { return reput("put", "/api/complaintRecord/updateComplaintRecord", params) };
//违规处理 删除
export const deleteComplaintRecord = (params) => { return delt("delete",  "/api/complaintRecord/deleteComplaintRecord", params) };
//违规处理 新增
export const insertComplaintRecord = (params) => { return reput("post", "/api/complaintRecord/insertComplaintRecord", params) };

//执法局_严管示范街数据统计（查询核准证列表）
//export const selectApprovalCardListPage = (params) => { return reget("get", "/api/approvalCard/selectApprovalCardListPage", params) };


