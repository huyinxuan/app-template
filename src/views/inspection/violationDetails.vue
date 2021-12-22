<template>
<!-- 违法处置详情页面 -->
  <div class="main">
    <van-nav-bar
      :title="entity.regionName"
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
              <div class="title" @click="ContentsUpdateFn()">处理状态</div>
              <div class="text">
                <span v-show="entity.status == 1">待处理</span>
                <span v-show="entity.status == 2">已超期</span>
                <span v-show="entity.status == 3">待审核</span>
                <span v-show="entity.status == 4">已处理</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div class="title" @click="UpdateFn()">违规类别</div>
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
          <van-tab title="处理记录" style="min-height: 40vh;">
            <div v-for="item in entity.complaintRecordVos">
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
                    <van-icon class="card_icon" name="eye-o" size="35" />
                  </van-col>
                  <van-col span="21" class="card_type"
                    >摄像机<span class="card_address">{{
                      entity.regionName
                    }}</span></van-col
                  >
                </van-row>
                <van-row class="card_content">
                  <van-col span="3"> </van-col>
                  <van-col span="21" class="card_text">
                    {{ item.contents }}<br />
                    <div class="picList">
                      <span v-for="Im in item.pic">
                        <img height="100px" :src="Im" />
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
              <van-col class="cl_conName" span="5" offset="2">违规日期</van-col>
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
              <van-col class="cl_conName" span="6" offset="2">垃圾类型</van-col>
              <van-col class="cl_conValue" span="16" offset="">{{
                entity.punishName
              }}</van-col>
            </van-row>
          </van-tab>
        </van-tabs>
      </template>
    </div>
    <van-tabbar class="cl_MapCk" placeholder fixed>
      <van-tabbar-item icon="chat-o" @click="ContentsUpdateFn()">事件申诉</van-tabbar-item>
      <van-tabbar-item icon="edit" @click="UpdateFn()"><span> 违规处置</span></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ComplaintsById } from "@/api/inspectionapi";
import dataStatis from "@/components/dataStatis";
export default {
  data() {
    return {
      pic: require("../../icons/svg/u20.svg"),
      active: 0,
      condition: true,
      createTime: "", //违规日期
      punishName: "", //违规类型
      point: {
        lng: -1,
        lat: -1,
      },
      searchForm: {
        id: 1,
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
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
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
          this.$message({
            type: "info",
            message: res.msg,
          });
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
          than.entity = res.data;
        }
      });
    },
  },
  created() {
    this.searchForm.id = this.$route.query.id;
    this.DataList(this.searchForm);
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

.cl_conTitle {
  margin-top: 20px;
  margin-bottom: 20px;
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
.card_box img {
  margin-right: 15px;
  border-radius: 10px;
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
</style>