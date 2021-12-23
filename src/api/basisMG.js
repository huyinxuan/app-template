import axios from 'axios';
import { loginreq, req, reput, reget,  delt, reget_n, reput_n } from './axiosFun';



export const DownUrl = (url, params) => { return req("get", url, params) };
export const impFile = (url, params) => { return req("post", url, params) };


/**
 * 商品管理
 **/
// 商品管理-获取商品管理列表
export const GoodsList = (params) => { return req("post", "/api/Goods/list", params) };
// 商品管理-保存商品管理
export const GoodsSave = (params) => { return req("post", "/api/Goods/save", params) };
// 商品管理-删除商品管理
export const GoodsDelete = (params) => { return axios.delete("/api/Goods/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };

/**
 * 机器信息管理 
 **/
// 机器信息管理-获取机器信息管理列表
export const MachineList = (params) => { return req("post", "/api/Machine/list", params) };
// 机器信息管理-保存机器信息管理
export const MachineSave = (params) => { return req("post", "/api/Machine/save", params) };
// 机器信息管理-删除机器信息管理
export const MachineDelete = (params) => { return axios.delete("/api/Machine/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };

/**
 * 货道信息管理
 **/
// 货道信息管理-获取获取货道信息管理列表
export const MachineAisleList = (params) => { return req("post", "/api/MachineAisle/list", params) };
// 货道信息管理-删除货道信息管理
export const MachineAisleDelete = (params) => { return axios.delete("/api/MachineAisle/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };
// 货道信息管理-保存货道信息管理
export const MachineAisleRsave = (params) => { return req("post", "/api/MachineAisle/save", params) };

// 基础数据
export const baseInfo = (params) => { return reget("get", "/api/suree/bigdata/arealist", params) };
export const baseYear = (params) => { return reget("get", "/api/suree/bigdata/searchByYear", params) };
export const baseJiDu = (params) => { return reget("get", "/api/suree/bigdata/searchByJidu", params) };
export const baseMonth = (params) => { return reget("get", "/api/suree/bigdata/searchByMonth", params) };
export const percentage = (params) => { return reget("get", "/api/complaints/statistics/percentage", params) };
export const generalOverview = (params) => { return reget("get", "/api/complaints/statistics/generalOverview", params) };
export const generalOverview_m = (params) => { return reget("get", "/api/complaints/tendency/generalOverview", params) };
export const enforcement = (params) => { return reget("get", "/api/complaints/statistics/enforcement", params) };
/**
 * 添加公共信息
 */
//插入信息
export const insertPublicNews = (params) => { return reput("post", "/api/publicNews/insertPublicNews", params) };
//分页查询公共信息列表
export const selectPublicNewsListPage = (params) => { return reget_n("get", "/api/publicNews/selectPublicNewsListPage", params) };
//根据主键ID查询公共信息
export const selectPublicNewsById = (nid) => { return reget_n("get", "/api/publicNews/selectPublicNewsById", { id: nid }) };
//根据主键ID删除
export const deletePublicNews = (id) => { return axios.delete("/api/publicNews/deletePublicNews?id=" + id + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };


/**
 * 供需信息
 */
export const insertSupplyInfo = (params) => { return reput("post", "/api/supplyInfo/insertSupplyInfo", params) };
export const selectSupplyInfoListPage = (params) => { return reget_n("get", "/api/supplyInfo/selectSupplyInfoListPage", params) };

export const selectRegionById = (id) => { return reget_n("get", "/api/region/selectRegionById", { id: id }) };