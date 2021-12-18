import axios from 'axios';
import { loginreq, req, reput, reget,  delt } from './axiosFun';

/**
 * 支付配置信息
 **/
// 支付配置信息-获取支付配置信息列表
export const MachineConfigList = (params) => { return req("post", "/api/MachineConfig/list", params) };
// 支付配置信息-保存支付配置信息
export const MachineConfigSave = (params) => { return req("post", "/api/MachineConfig/save", params) };
// 支付配置信息-删除支付配置信息
export const MachineConfigDelete = (params) => { return axios.delete("/api/MachineConfig/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };

/**
 * 支付配置 
 **/
// 支付配置-获取支付配置列表
export const ConfigList = (params) => { return req("post", "/api/Config/list", params) };
// 支付配置-保存支付配置
export const ConfigSave = (params) => { return req("post", "/api/Config/save", params) };
// 支付配置-删除支付配置
export const ConfigDelete = (params) => { return axios.delete("/api/Config/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };

/**
 * 订单管理-交易订单 
 **/
// 交易订单-获取交易订单列表
export const OrderList = (params) => { return req("post", "/api/Order/list", params) };
// 交易订单-s删除交易订单
export const OrderDelete = (params) => { return axios.delete("/api/Order/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };
// 交易订单-交易订单退款
export const OrderRefund = (params) => { return req("post", "/api/Order/refund", params) };


//获取网格员信息

export const wgyls = (params) => { return reget("get", "/api/gridMember/listAll", params) };
//获取头部实时数据
export const tiemData = (params) => { return reget("get", "/api/suree/view/areaNum", params) };
//监控点情况 
export const areaAlllist = (params) => { return reget("get", "/api/suree/view/areaAlllist", params) };
//事件实时上报
export const ssfenxi = (params) => { return reget("get", "/api/suree/view/fenxi", params) };
// 实时上报滚动列表
export const ssRoll = (params) => { return reget("get", "/api/suree/view/shangbao", params) };
// 抓拍图片
export const snapList = (params) => { return reget("get", "/api/suree/view/snapList", params) };

//属地管理
export const shudi = (params) => { return reget("get", "/api/region/selectRegionListAll", params) };
//供需信息查询
export const gxSelect = (params) => { return reget("get", "/api/supplyInfo/selectSupplyInfoListPage", params) };
// 核准证列表
export const hzzSelect = (params) => { return reget("get", "/api/approvalCard/selectApprovalCardListPage", params) };
// 核准证列表导出
export const importAd = (params) => { return reget("get", "/api/approvalCard/exportExcel", params) };

// 区域划分列表
export const regionListAll = (params) => { return reget("get", "/api/region/selectRegionListAll", params) };
// 区域划删除
export const deleteRegion = (params) => { return reget("DELETE", "/api/region/deleteRegion", params) };
// 编辑区域划分信息
export const putRegion = (params) => { return reput("put", "/api/region/updateRegion", params) };
// 新增区域划分信息
export const addRegion = (params) => { return reput("post", "/api/region/insertRegion", params) };