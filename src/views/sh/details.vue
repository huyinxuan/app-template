<template>
  <div class="home">
    <van-nav-bar
      :title="title"
      left-arrow
      border
      fixed
      placeholder
      @click-left="onClickLeft"
    />
    <van-loading v-if="condition" size="24px">加载中...</van-loading>
    <template v-else>
      <div class="van-box infoBox">
        <van-grid :column-num="3">
          <van-grid-item>
            <p class="title">违规日期</p>
            <p class="text">2010-10-10</p>
          </van-grid-item>
          <van-grid-item>
            <p class="title">违规日期</p>
            <p class="text">2010-10-10</p>
          </van-grid-item>
          <van-grid-item>
            <p class="title">违规日期</p>
            <p class="text">2010-10-10</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="cl_Map">地图模块</div>
      <div class="cl_MapCk">
        <!-- <van-row>
          <van-col class="cl_mapFont" span="12"> 处理记录 </van-col>
          <van-col class="cl_mapFont" span="12"> 信息详情 </van-col>
        </van-row> -->
          <van-tabs v-model="active1">
              <van-tab title="处理记录">
                  <div class="cl_Content" v-for="item in list" :key="item" >
                        <van-row class="card_time_line" v-if="false">
                            <van-col offset="1" span="1" icon="">
                              <svg version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="10px" xmlns="http://www.w3.org/2000/svg">
                                <g transform="matrix(1 0 0 1 -29 -20 )">
                                  <path d="M 34 21  C 36.24 21  38 22.759999999999998  38 25  C 38 27.240000000000002  36.24 29  34 29  C 31.759999999999998 29  30 27.240000000000002  30 25  C 30 22.759999999999998  31.759999999999998 21  34 21  Z " fill-rule="nonzero" fill="#f9f9f9" stroke="none" />
                                  <path d="M 34 21  C 36.24 21  38 22.759999999999998  38 25  C 38 27.240000000000002  36.24 29  34 29  C 31.759999999999998 29  30 27.240000000000002  30 25  C 30 22.759999999999998  31.759999999999998 21  34 21  Z " stroke-width="2" stroke="#0079fe" fill="none" />
                                </g>
                              </svg>
                            </van-col>
                            <van-col span="21" icon="">
                                03-02
                            </van-col>
                        </van-row>
                        <div class="card_box">
                          <van-row>
                            <van-col span="3" icon="">
                              <van-icon class="card_icon" name="eye-o" size="26" />
                            </van-col>
                            <van-col span="21" class="card_type">摄像机<span class="card_address">北二路路口</span></van-col>
                          </van-row>
                          <van-row>
                            <van-col span="3">
                            </van-col>
                            <van-col span="21" class="card_text">
                              智能抓拍违规事件<br>
                              <div class="picList">
                                <img width="80px" src="https://files1.xuruidea.com/0/20211221/11640057427435.png">
                                <img width="80px"  src="https://files1.xuruidea.com/0/20211221/11640057427435.png">
                              </div>
                            </van-col>
                          </van-row>
                          <van-row>
                            <van-col span="3"></van-col>
                            <van-col span="1">  
                              <van-icon class="time_ico" name="underway-o" />
                            </van-col>
                            <van-col span="19" class="card_time">
                              <span>2020-03-20 23:31</span>
                            </van-col>
                          </van-row>
                        </div>
                    </div>
              </van-tab>
              <van-tab title="信息详情">
                  <van-cell-group inset>
                        <van-cell title="基本信息"/>
                        <van-cell title="违规地点：" value="内容" />
                        <van-cell title="管辖归属：" value="内容"  />
                        <van-cell title="违规日期：" value="内容"  />
                        <van-cell title="违规来源：" value="内容"  />
                        <van-cell title="违规类型：" value="内容"  />
                </van-cell-group>
              </van-tab>
          </van-tabs>  
      </div>
    
        <van-tabbar v-model="active" placeholder fixed>
          <van-tabbar-item icon="info-o"  @click="sjss()">事件申诉</van-tabbar-item>
          <van-tabbar-item icon="records"  @click="zfcz()">执法处置</van-tabbar-item>
        </van-tabbar>
    </template>
  </div>
</template>

<script>
import dataStatis from "@/components/dataStatis";
export default {
  data() {
    return {
      title:"违法处置详情",
      list:[{name:"1"},{name:"1"}],
      pic:require("../../icons/svg/u20.svg"),
      active: 0,
      condition: true,
    };
  },
  methods: {
     sjss(){
      this.$router.push({ path: "/sjss" });
    },
    zfcz(){
      this.$router.push({ path: "/zfcz" });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created() {
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

.cl_conTitle{

  margin-top: 30px;
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

.cl_Content {
  margin-top: 30px;
  height: 400px;
  width: 100%;
  padding: 20px;
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
  margin-top: 50px;
  height: 400px;
  width: 100%;
  background-color: #ffff;
}

.cl_MapCk {
  margin-top: 30px;
  height: 100px;
  width: 100%;
  background-color: #ffff;
  line-height: 100px;
}

.cl_mapFont {
  font-family: 微软雅黑, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  text-align: center;
}

.cl_mapFontTable {
  font-family: 微软雅黑, sans-serif;
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
}
.card_time {
  margin-top:6px;
  margin-left: 5px;
  color: #999999;
}
.time_ico {
  margin-top: 7px;
}
.card_text {
  color: #1d1d1d;
}
.card_content{
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
  font-size:24px;
}
.text {
  color: #999999;
  font-size:24px;
  word-break: break-all;
}
.text .cl_type{
  color: #999999;
  font-size:24px;
}
.infoBox {
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  line-height: 24px;
  line-height: 45px;
  font-family: "微软雅黑", sans-serif;
  text-align: center;
}
</style>