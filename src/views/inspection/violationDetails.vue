<template>
  <!-- 违法处置详情页面 -->
  <div class="main">
    <van-nav-bar
      :title="entity.address"
      left-arrow
      border
      fixed
      placeholder
      @click-left="onClickLeft"
    />
    <div class="home">
      <van-loading v-if="condition" size="24px">加载中...</van-loading>
      <template v-else>
        <div class="van-box infoBox">
          <van-grid :column-num="3">
            <van-grid-item>
              <div class="title">违规日期</div>
              <div class="cl_type van-ellipsis text">
                {{ entity.createTime.split(" ")[0] }}
              </div>
            </van-grid-item>
            <van-grid-item>
              <div class="title">处理状态</div>
              <div class="text">
                <span v-show="entity.status == 1">待处理</span>
                <span v-show="entity.status == 2">已超期</span>
                <span v-show="entity.status == 3 && type == 3">待处理</span>
                <span v-show="entity.status == 3 && type != 3">待审核</span>
                <span v-show="entity.status == 4">已处理</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div class="title">违规类别</div>
              <div class="cl_type van-ellipsis text">
                {{ entity.punishName }}
              </div>
            </van-grid-item>
          </van-grid>
        </div>
        <div class="cl_Map">
          <baidu-map id="map" @ready="readyMap">
            <bm-marker
              :position="{ lng: this.point.lng, lat: this.point.lat }"
              :dragging="true"
              animation="BMAP_ANIMATION_BOUNCE"
            />
          </baidu-map>
        </div>
        <van-tabs v-model="active" animated>
          <van-tab title="处理记录" style="min-height: 40vh">
            <div
              v-for="(item, index) in entity.complaintRecordVos"
              :key="index"
            >
              <van-row class="card_time_line" v-show="false">
                <van-col offset="1" span="1">
                  <svg
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="10px"
                    height="10px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="matrix(1 0 0 1 -29 -20 )">
                      <path
                        d="M 34 21  C 36.24 21  38 22.759999999999998  38 25  C 38 27.240000000000002  36.24 29  34 29  C 31.759999999999998 29  30 27.240000000000002  30 25  C 30 22.759999999999998  31.759999999999998 21  34 21  Z "
                        fill-rule="nonzero"
                        fill="#f9f9f9"
                        stroke="none"
                      />
                      <path
                        d="M 34 21  C 36.24 21  38 22.759999999999998  38 25  C 38 27.240000000000002  36.24 29  34 29  C 31.759999999999998 29  30 27.240000000000002  30 25  C 30 22.759999999999998  31.759999999999998 21  34 21  Z "
                        stroke-width="2"
                        stroke="#0079fe"
                        fill="none"
                      />
                    </g>
                  </svg>
                </van-col>
                <van-col span="21"> {{ item.createTime }} </van-col>
              </van-row>
              <div class="card_box">
                <van-row>
                  <van-col span="3" style="text-align: center">
                    <img
                      v-if="entity.sourceType == 3"
                      height="28"
                      src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAuCAQAAAAITmgMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflDB4QISa9395SAAACtUlEQVRIx6WWXZWrMBRGd1ljAAtUwkFCK6EjgUqgEqYSBglFQiMhR8LEQiT0PkDDCRSms+73BCHslfOf3YNcO/PsSyS9hDoAzPcP+ni5ihdOnKiytUiPo3+1f7c8jRe+OLCmwEX6XzH6Rctv6jlLXMVoyd14Y0uBT9GXmD9AACLHCZQwLyARhzJsrRAOucstaMLcOGVbrnR1Zj/4hjZDKcfBRyNGW75yF84RCZWH4CqXhNEKT5k+dfUZwJc0CEJFRHH0dYAH2vBtQEdxT8w3zQLS0hr0oEt9fczPrlLD7oFW/Fhr6wjegq0cnxJnnjyKKyD74bwJgQP3YR+T7xoowHA7UfCNNZEzR5wBiX6BRK5p5aTlzgs+LewlaMnP6JPAZ60A/nmG1/vgXJgiVAlAM36MHOtnls5zuwWJptarwqRT/7R09FIAL/7mH1lOATRaAlNNyYfBBNBqfA91D5nBuQRnMYXJjQgJ2gFwg1UMpsLLYrJbnPFCBF/NSnFDxcq6PdlbmJRGWo2/A7T+9EYXNJjJwmpw82j7baMfbxpVYYO4LQdqMq4wiS6zpFpXEMUmZSiSGc/acm9gOrN/cZpSG6i7X0GBDrQyp3FFZsZQCBfiJmaYUVMcg2iRmSHaQq2cNyGDe20zGZvoT0q1sa79gduihQ6QDrTEmz/2EoeATy2o5O5LqB370ZGTevZ1N060KcOvEqcB4234Ursq04iLuOFi4vOxGNlbjHDPav1aX3khf+A7q7XP4XYxTc18+oDS0duh5080swIZh11+FXh1JdEU/GWFdZIiml9M2kW7XJeBLK5JswvBugK1vSiZCtfybQhU3FVeYPTEz9sQAMFr8uUz4OvjdltOjgmj64Pkd52lexr1h3a5UJn55v80YMJ/UkaMe7uVzzU2vWekykW9vCOHG0bwP6GiIoIjYBWPAAAAAElFTkSuQmCC"
                    />
                    <img
                      v-else
                      height="28"
                      src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAsCAQAAABMbWl9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflDB4QIC0zFjabAAACZ0lEQVRIx6WX25niMAxGT/JNA5kSTAlyCaEEpoRMCUkJUAIpYSghKcEqYVPCugT2IVxMsE2Y1ROfLyeykH7LxZmYFQC4CkGAGvAooHYEiO+CIoVzDTW7yJTnxEnGN3C6Y48hZyOd6AqcVhyjXj1bJ4cXOBV+Xvj16OOX+CROhYFqNQxA2YbA8r9gIAxaRXBa/QI2A39i3uVgysiUnK11v8Bpi0SXejo+rbVbu2FDnwC2Ws8/ijOgBhf1zbO1D9nlGo5x/8XevWsTB13AwPZ08Qhqc/FODX+iSzp7iA27gToyPMlm9i5VA/1b40brGddEp0fr4zR7SnxmB6WaRFElNCMzV0MZjcPvzKgp3yj41yZlIn3Jep2ay3hXu0TRubQaZg/bvDkOpiRtexcJhGtzYcjhYFgCXcM+tyGPqxhce42hM+6YEICbFe7vCtFUPGZFSp0+0BWJLC9XXD5bZlT2ffN5nDISCsGUFXnQj0Q5Txw4zZriagTw6CymzrCLCq4XLc7o85/R06XkaTZn+HmK6Em+SmCpX71852EgE1uWPco4i7vgwvOLvTZkaYtcWF4+oQTRh/h1rDSZCO+SA1yrIhx+R//ua/18g5QAMgbXyV5XJq02gbZ0c+Nzrdnulk8Vg64QfG2D+h3l4s4FJ56v22TF4NocylV6DJRluu+9KYoo38GOvRtcwkfX4IJj+rBlfGwXlx3IxImRyU4ATjDU7B6S3rMNe+RlM9u8UrQHW8Ce5FN6tqs1ZmSz7N4jDwGtaGlfoDwHiTREiWeKGtpFlMKI9vQSreoi+4jaYai5P6I8ymg1/Yj6B0Ze3TR+qii2AAAAAElFTkSuQmCC"
                    />
                  </van-col>
                  <van-col span="21" class="card_type">
                    {{
                      entity.sourceType == 1
                        ? "巡查发现"
                        : entity.sourceType == 2
                        ? "群众举报"
                        : entity.sourceType == 3
                        ? "智能抓拍"
                        : "未知"
                    }}<span class="card_address">{{
                      entity.regionName
                    }}</span></van-col
                  >
                </van-row>
                <van-row class="card_content">
                  <van-col span="3"> </van-col>
                  <van-col span="21" class="card_text">
                    {{ item.contents }}<br />
                    <div class="picList">
                      <span v-for="(Im, index) in item.pic" :key="index">
                        <img class="img-cls"  :src="Im" />
                      </span>
                    </div>
                  </van-col>
                </van-row>
                <van-row>
                  <van-col span="3"></van-col>
                  <van-col span="1">
                    <van-icon class="time_ico" name="underway-o" />
                  </van-col>
                  <van-col span="19" class="card_time">
                    <span>{{ item.createTime }}</span>
                  </van-col>
                </van-row>
              </div>
            </div>
            <van-empty
              v-if="
                entity.complaintRecordVos == null ||
                entity.complaintRecordVos.length <= 0
              "
              description="暂无数据"
            />
          </van-tab>
          <van-tab title="信息详情">
            <van-row class="cl_conTitle" type="flex" justify="space-between">
              <van-col span="6" offset="2">基本信息</van-col>
            </van-row>
            <van-row class="cl_conDrow" type="flex" justify="space-between">
              <van-col class="cl_conName" span="5" offset="2">违规地点</van-col>
              <van-col class="cl_conValue" span="14" offset="">{{
                entity.address
              }}</van-col>
            </van-row>

            <van-row class="cl_conDrow" type="flex" justify="space-between">
              <van-col class="cl_conName" span="5" offset="2">归属管辖</van-col>
              <van-col class="cl_conValue" span="14" offset="">{{
                entity.regionName
              }}</van-col>
            </van-row>

            <van-row class="cl_conDrow" type="flex" justify="space-between">
              <van-col class="cl_conName" span="5" offset="2">违规时间</van-col>
              <van-col class="cl_conValue" span="14" offset="">{{
                entity.createTime
              }}</van-col>
            </van-row>

            <van-row class="cl_conDrow" type="flex" justify="space-between">
              <van-col class="cl_conName" span="5" offset="2">违规来源</van-col>
              <van-col class="cl_conValue" span="14" offset="">
                <span v-show="entity.sourceType == 1">巡查</span>
                <span v-show="entity.sourceType == 2">群众举报</span>
                <span v-show="entity.sourceType == 3">智能抓拍</span>
              </van-col>
            </van-row>

            <van-row class="cl_conDrow" type="flex" justify="space-between">
              <van-col class="cl_conName" span="6" offset="2">违规类别</van-col>
              <van-col class="cl_conValue" span="16" offset="">{{
                entity.punishName
              }}</van-col>
            </van-row>

            <van-row v-show="blockState" class="cl_conDrow" type="flex" justify="space-between">
              <van-col class="cl_conName" span="6" offset="2">处理状态</van-col>
              <van-col class="cl_conValue" span="16" offset="">
                <span v-show="entity.status == 1">待处理</span>
                <span v-show="entity.status == 2">已超期</span>
                <span v-show="entity.status == 3">待审核</span>
                <span v-show="entity.status == 4">已处理</span>
              </van-col>
            </van-row>

            <van-row v-show="blockState" class="cl_conDrow" type="flex" justify="space-between">
              <van-col class="cl_conName" span="6" offset="2">处理结果</van-col>
              <van-col class="cl_conValue" span="16" offset="">{{
                entity.handleResult
              }}</van-col>
            </van-row>

            <span v-show="blockState">
              <van-row class="cl_conTitle" type="flex" justify="space-between">
                <van-col span="6" offset="2">涉事企业\个人</van-col>
              </van-row>
              <van-row class="cl_conDrow" type="flex" justify="space-between">
                <van-col class="cl_conName" span="5" offset="2"
                  >企业/个人</van-col
                >
                <van-col class="cl_conValue" span="14" offset="">{{
                  entity.enterpriseName
                }}</van-col>
              </van-row>
              <van-row class="cl_conDrow" type="flex" justify="space-between">
                <van-col class="cl_conName" span="5" offset="2"
                  >所属区域</van-col
                >
                <van-col class="cl_conValue" span="14" offset="">{{
                  entity.regionName
                }}</van-col>
              </van-row>

              <van-row class="cl_conDrow" type="flex" justify="space-between">
                <van-col class="cl_conName" span="5" offset="2"
                  >企业法人</van-col
                >
                <van-col class="cl_conValue" span="14" offset=""></van-col>
              </van-row>

              <van-row class="cl_conDrow" type="flex" justify="space-between">
                <van-col class="cl_conName" span="5" offset="2"
                  >联系方式</van-col
                >
                <van-col class="cl_conValue" span="14" offset="">{{
                  entity.platePhone
                }}</van-col>
              </van-row>

              <van-row class="cl_conDrow" type="flex" justify="space-between">
                <van-col class="cl_conName" span="5" offset="2"
                  >涉事车牌号</van-col
                >
                <van-col class="cl_conValue" span="14" offset="">{{
                  entity.plateNumber
                }}</van-col>
              </van-row>

              <van-row class="cl_conTitle" type="flex" justify="space-between">
                <van-col span="6" offset="2">处理信息</van-col>
              </van-row>
        
              <van-row class="cl_conDrow" type="flex" justify="space-between">
                <van-col class="cl_conName" span="5" offset="2"
                  >处理人员</van-col
                >
                <van-col class="cl_conValue" span="14" offset="">{{
                  entity.reportUserName
                }}</van-col>
              </van-row>
              <van-row class="cl_conDrow" type="flex" justify="space-between">
                <van-col class="cl_conName" span="5" offset="2"
                  >所属中队</van-col
                >
                <van-col class="cl_conValue" span="14" offset="">{{
                  entity.regionName
                }}</van-col>
              </van-row>
              <van-row class="cl_conDrow" type="flex" justify="space-between">
                <van-col class="cl_conName" span="5" offset="2"
                  >职务名称</van-col
                >
                <van-col class="cl_conValue" span="14" offset=""></van-col>
              </van-row>
              <van-row class="cl_conDrow" type="flex" justify="space-between">
                <van-col class="cl_conName" span="5" offset="2"
                  >联系方式</van-col
                >
                <van-col class="cl_conValue" span="14" offset="">{{
                  entity.platePhone
                }}</van-col>
              </van-row>
              <van-row class="cl_conDrow" type="flex" justify="space-between">
                <van-col class="cl_conName" span="5" offset="2"
                  >处理时间</van-col
                >
                <van-col class="cl_conValue" span="14" offset="">{{
                  entity.complaintRecordVos[
                    entity.complaintRecordVos.length - 1
                  ].createTime
                }}</van-col>
              </van-row>
            </span>
          </van-tab>
        </van-tabs>
      </template>
    </div>

    <!-- 违法处置显示块 -->
    <van-tabbar
      v-show="(entity.status == 1 || entity.status == 2) && type == 1"
      class="cl_MapCk"
      placeholder
      fixed
    >
      <van-tabbar-item icon="chat-o" @click="ContentsUpdateFn()"
        >事件申诉</van-tabbar-item
      >
      <van-tabbar-item icon="edit" @click="UpdateFn()"
        ><span> 违规处置</span></van-tabbar-item
      >
    </van-tabbar>

    <!-- 待审核显示块 -->
    <van-tabbar
      v-show="entity.status == 3 && type == 2"
      class="cl_MapCk"
      placeholder
      fixed
    >
      <van-tabbar-item icon="chat-o" @click="approveFn(4)"
        >审核通过</van-tabbar-item
      >
      <van-tabbar-item icon="edit" @click="approveFn(3)"
        ><span> 审核否决</span></van-tabbar-item
      >
    </van-tabbar>

    <!-- 待申诉显示块 -->
    <van-tabbar
      v-show="entity.status == 3 && type == 1"
      class="cl_MapCk"
      placeholder
      fixed
    >
      <van-tabbar-item icon="chat-o" @click="approveFn(4)"
        >通过</van-tabbar-item
      >
      <van-tabbar-item icon="edit" @click="show = true"
        ><span> 转交</span></van-tabbar-item
      >

      <van-tabbar-item icon="edit" @click="approveFn(6)"
        ><span> 驳回</span></van-tabbar-item
      >
    </van-tabbar>

    <!-- 转交区域选择 -->
    <van-popup
      class="select_rows_box"
      v-model="show"
      round
      position="bottom"
      :style="{ height: '30%' }"
    >
      <van-row class="select_row" v-for="(item, index) in actions" :key="index">
        <van-col span="24" @click="clickFn(item)">{{ item.name }}</van-col>
      </van-row>
    </van-popup>
  </div>
</template>

<script>
import {
  ComplaintsById,
  updateComplaintsStatus,
  updateDeliverStatus,
} from "@/api/inspectionapi";

import { regionListAll } from "@/api/payMG";
import dataStatis from "@/components/dataStatis";
export default {
  data() {
    return {
      pic: require("../../icons/svg/u20.svg"),
      active: 0,
      userId: 0, //用户Id
      nickName: "", //操作用户Id
      condition: true,
      type: 0, //1.违法处置 2.审核管理  5.违规事件  6.历史记录
      show: false,
      createTime: "", //违规日期
      punishName: "", //违规类型
      blockState: true,
      point: {
        lng: -1,
        lat: -1,
      },
      actions: [], //街道列表
      searchForm: {
        id: 1,
      },

      //审核实体
      entity1: {
        id: 0,
        operateType: 0, //操作类型：1申诉 2执法处置 3审核拒绝 4审核通过
        reportUserId: 0, //	执法/举报人员ID
        reportUserName: "", //执法/举报人名称
      },

      //详情实体
      entity: {
        address: "",
        complaintRecordVos: [], //处理记录列表
        contents: "",
        createTime: "2021-12-08 01:08:23",
        disposeType: null,
        enterpriseDeduct: null,
        enterpriseId: 37,
        enterpriseName: "东营纳通土石方工程有限公司",
        handleResult: "b1112233",
        id: 20,
        longitudeLatitude: null,
        pic: null,
        plateNumber: "a123",
        platePhone: null,
        punishId: 4,
        punishName: "未按指定地点倾倒建筑垃圾",
        regionId: 1,
        regionName: "辛店街道",
        reportUserId: null,
        reportUserName: null,
        sourceType: null,
        status: 1,
        violationId: null,
        violationName: null,
        violationTypes: 0,
      },

      RdExamineEntity: {
        id: 0, //id
        operateType: 0, //操作类型：5 转交 6 驳回
        regionId: 0, //管辖归属id
        regionName: "", //	管辖归属
      },
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },

    // 属地街道下拉查询
    sdSelect() {
      regionListAll().then((res) => {
        if (res.code == 200) {
          this.actions = res.data;
        } else {
          this.$toast.fail(res.msg);
        }
      });
    },

    //点击
    clickFn(e) {
      this.RdExamineEntity.regionId = e.id;
      this.RdExamineEntity.regionName = e.name;
      this.approveFn(5);
    },

    //跳转违法处置申诉
    ContentsUpdateFn() {
      console.log("点击违法处置");
      this.$router.push({ path: "/wfczss", query: { id: this.searchForm.id } });
    },

    //跳转违法处置修改
    UpdateFn() {
      console.log("点击违法处置");
      this.$router.push({ path: "/wfczcl", query: { id: this.searchForm.id } });
    },

    //审批方法
    approveFn(type) {
      this.entity1.operateType = type;
      if (type == 5 || type == 6) {
        this.DeliverStatusFn(this.entity1);
      } else {
        updateComplaintsStatus(this.entity1).then((res) => {
          if (res.code !== 200) {
            this.$toast.fail(res.msg);
          } else {
            this.$toast.success("成功");
            this.DataList(this.searchForm);
            //this.onClickLeft();
          }
        });
      }
    },

    //审批方法(6.驳回  5.转交)
    DeliverStatusFn(entity1) {
      // if (type == 6) {
      //   this.RdExamineEntity.regionId = this.dataTalbe.regionId;
      //   this.RdExamineEntity.regionName = this.dataTalbe.regionName;
      // } else {
      //   if (this.RdExamineEntity.regionName == "") {
      //     this.$message({
      //       type: "info",
      //       message: "请选择转交区域",
      //     });
      //     return;
      //   }
      // }
      console.log("提交的值：",entity1);

      this.RdExamineEntity.id = entity1.id;
      this.RdExamineEntity.operateType = entity1.operateType;
      if (this.RdExamineEntity.operateType == 5) {
        this.RdExamineEntity.regionId = this.entity.regionId;
        this.RdExamineEntity.regionName = this.entity.regionName;
      }

      console.log("RdExamineEntity:", this.RdExamineEntity);

      updateDeliverStatus(this.RdExamineEntity).then((res) => {
        if (res.code !== 200) {
          this.$toast.fail(res.msg);
        } else {
          this.$toast.success("成功");
          this.show = false;
          this.DataList(this.searchForm);
          // this.onClickLeft();
        }
      });
    },

    //读取地图
    readyMap({ map, BMap }) {
      window.map = map;
      window.BMap = BMap;
      var point = new BMap.Point(118.467156, 37.410146); // 创建点坐标  112.987402, 28.201509
      if (point.lng != -1) {
        point = new BMap.Point(this.point.lng, this.point.lat); // 创建点坐标  112.987402, 28.201509
      }
      map.centerAndZoom(point, 12);
      map.enableScrollWheelZoom();
    },

    //获取数据
    DataList(searchForm) {
      var than = this;
      console.log("searchForm:", searchForm);
      ComplaintsById(searchForm).then((res) => {
        if (res.code !== 200) {
          this.$dialog.alert({ message: res.msg });
        } else {
          res.data.complaintRecordVos.forEach((element) => {
            if (element.pic != null) {
              element.pic = element.pic.split(",");
              console.log("图片:", element.pic);
            }
          });
          var pointStr = res.data.longitudeLatitude;
          if (pointStr != null && pointStr.indexOf(",") != -1) {
            this.point.lng = pointStr.split(",")[0];
            this.point.lat = pointStr.split(",")[1];
            console.log("map", window.map);
            if (!!window.map)
              window.map.centerAndZoom(
                { lng: this.point.lng, lat: this.point.lat },
                15
              );
          }
          than.condition = false;
          console.log("返回参数res:", res.data);
          
          //违法处置页面进入 并且是未处置则隐藏
          if (res.data.status != 4) {
            this.blockState = false;
          }
        
          than.entity = res.data;
        }
      });
    },
  },

  created() {
    var UserInfo = localStorage.getItem("userdata");
    this.entity1.reportUserId = UserInfo.userId; //用户Id
    this.entity1.reportUserName = UserInfo.nickName; //操作用户Id
    this.entity1.id = this.$route.query.id;

    this.searchForm.id = this.$route.query.id;
    this.type = this.$route.query.type;
    this.DataList(this.searchForm);
    this.sdSelect();
    setTimeout(() => {
      this.condition = false;
    }, 650);
  },

  components: {
    dataStatis,
  },
};
</script>

<style lang="scss" scoped>
.cl_type {
  display: inline-block;
  color: #999999;
}

.select_rows_box {
  padding-bottom: 25px;
}

.select_row {
  text-align: center;
  padding: 3.33333vw;
  border-bottom: 1px solid #f3f2f2;
  width: 95%;
  margin: 0 auto;
}
.select_row:last-child {
  border: 0;
}
.select_row .van-col {
  font-size: 30px;
  color: #666666;
}

.cl_conTitle {
  margin-top: 50px;
  margin-bottom: 20px;
  font-family: "微软雅黑 Bold", "微软雅黑", sans-serif;
  font-weight: 700;
  color: #666666;
}

.cl_conDLine {
  width: 100%;
  margin-top: 20px;
  line-height: 50px;
}

.cl_conDrow {
  margin-top: 5px;
  width: 100%;
  line-height: 100px;
  height: 100px;
  background-color: #ffff;
}

.cl_conName {
  color: rgb(153, 153, 153);
}

.cl_head {
  height: 150px;
  width: 100%;
  line-height: 180px;
  background-color: #ffff;
}

.cl_contDt {
  line-height: 70px;
}

.cl_contDtImg {
  height: 60px;
  line-height: 30px;
}

.cl_tiDate {
  margin-left: 40px;
}

.cl_ContentD {
  border-radius: 5px;
  height: 300px;
  width: 100%;
  line-height: 180px;
  background-color: #ffff;
  margin-top: 10px;
}

.cl_menu {
  border-top: 1px #f2f2f2 solid;
  height: 150px;
  width: 100%;
  background-color: #ffff;
}

.home {
  background-color: #f7f7f7;
  margin-bottom: 150px;
}
.van-loading {
  text-align: center;
  margin-top: 220px;
}

.cl_Map {
  margin-top: 15px;
  height: 400px;
  width: 100%;
  background-color: #ffff;
}

.cl_mapFont {
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  text-align: center;
}

.cl_mapFontTable {
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
}

.cl_line {
  height: 70px;
  line-height: 70px;
  width: 100%;
  border: 1px red solid;
  padding: 0px;
}
.cl_conValue {
  text-align: right;
  margin-right: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #666666;
}
.cl_row {
  display: -webkit-box;
  width: 10px;
  height: 68px;
  background-color: blue;
}

.cl_icon {
  margin-top: 10px;
}

.cl_title {
  font-size: 40px;
}
.card_icon {
  margin-left: 5px;
  margin-top: -5px;
}
.card_box {
  color: #666666;
  width: 95vw;
  padding: 2vw;
  padding-top: 20px;
  background: #fff;
  border-radius: 25px;
  margin: 0 auto;
  margin-top: 25px;
}
.card_type {
  font-size: 30px;
  font-weight: 400;
}
.card_address {
  font-size: 20px;
  color: #999999;
  margin-left: 10px;
}
.card_box .picList {
  margin-top: 1vw;
  font-family: "微软雅黑", sans-serif;
}
.card_time {
  margin-top: 6px;
  margin-left: 5px;
  color: #999999;
}
.time_ico {
  margin-top: 7px;
}
.card_text {
  color: #1d1d1d;
  width: 75.5%;
  // word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
.card_content {
  margin-top: -30px;
}
.card_time_line {
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  color: rgb(153, 153, 153);
  margin-bottom: 8px;
}
.title {
  color: #cccccc;
  font-size: 24px;
}
.text {
  color: #999999;
  font-size: 3.2vw;
  width: 100%;
  text-align: center;
}
.text .cl_type {
  color: #999999;
  font-size: 24px;
}
.infoBox {
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  line-height: 24px;
  line-height: 45px;
  font-family: "微软雅黑", sans-serif;
}
.van-grid-item {
  max-width: 33.3%;
}

#map {
  height: 100%;
}
.cl_MapCk {
  color: #999999;
  bottom: 0px;
  background: #f7f7f7;

  .van-grid-item {
    width: 50%;
  }
  .van-tabbar-item {
    color: #999999;
  }
}
.img-cls{
  width: 200px;
  height: auto;
}
</style>