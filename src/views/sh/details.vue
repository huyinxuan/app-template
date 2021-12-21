<template>
  <div class="home">
    <van-nav-bar
      title="违法处置详情"
      left-arrow
      border
      fixed
      placeholder
      @click-left="onClickLeft"
    />
    <van-loading v-if="condition" size="24px">加载中...</van-loading>
    <template v-else>
      <div class="van-box">
        <van-grid :column-num="3">
          <van-grid-item>
            <p>违规日期</p>
            <p>2010-10-10</p>
          </van-grid-item>
          <van-grid-item>
            <p>处理状态</p>
            <p>0</p>
          </van-grid-item>
          <van-grid-item>
            <p>违规类别</p>
            <p>2</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="cl_Map">地图模块</div>
      <div class="cl_MapCk">
        <van-tabs v-model="active1">
          <van-tab title="处理记录">
                <div class="cl_Content">
                  <div class="cl_tiDate">03-02</div>
                  <div class="cl_ContentD">
                    <van-col class="cl_mapFont" span="2">图标</van-col>
                    <van-col class="cl_mapFontTable" span="22">
                      <div class="cl_contDt">摄像机北二路口</div>
                      <div class="cl_contDt">智能抓拍违法事件</div>
                      <div class="cl_contDtImg">
                        <span>图片1</span>
                        <span>图片2</span>
                      </div>
                      <div class="cl_contDt">2020-03-20</div>
                    </van-col>
                  </div>
                </div>
                <div class="cl_Content">
                  <div class="cl_tiDate">03-02</div>
                  <div class="cl_ContentD">
                    <van-col class="cl_mapFont" span="2">图标</van-col>
                    <van-col class="cl_mapFontTable" span="22">
                      <div class="cl_contDt">摄像机北二路口</div>
                      <div class="cl_contDt">智能抓拍违法事件</div>
                      <div class="cl_contDtImg">
                        <span>图片1</span>
                        <span>图片2</span>
                      </div>
                      <div class="cl_contDt">2020-03-20</div>
                    </van-col>
                  </div>
                </div>
          </van-tab>
          <van-tab title="信息详情">
              <!-- <div class="cl_xxDate">基本信息</div> -->
              <!-- <div>
                <!-- <van-row >
                    <van-col span="8"><span>违规地点：</span></van-col>
                    <van-col span="16"><span>{{1}}</span></van-col>
                </van-row>
                <van-row >
                    <van-col span="8"><span>管辖归属：</span></van-col>
                    <van-col span="16"><span>{{1}}</span></van-col>
                </van-row>
                <van-row >
                    <van-col span="8"><span>违规日期：</span></van-col>
                    <van-col span="16"><span>{{1}}</span></van-col>
                </van-row>
                <van-row >
                    <van-col span="8"><span>违规来源：</span></van-col>
                    <van-col span="16"><span>{{1}}</span></van-col>
                </van-row>
                <van-row >
                    <van-col span="8"><span>违规类型：</span></van-col>
                    <van-col span="16"><span>{{1}}</span></van-col>
                </van-row> 
              </div> -->
               <van-cell-group inset>
                  <van-cell title="违规地点：" value="内容" />
                  <van-cell title="管辖归属：" value="内容"  />
                  <van-cell title="违规日期：" value="内容"  />
                  <van-cell title="违规来源：" value="内容"  />
                  <van-cell title="违规类型：" value="内容"  />
                </van-cell-group>
          </van-tab>
        </van-tabs>
      </div>
      <!-- <div class="cl_MapCk"> -->
          <van-tabbar v-model="active" placeholder fixed>
            <van-tabbar-item icon="info-o"  @click="sjss()">事件申诉</van-tabbar-item>
            <van-tabbar-item icon="records"  @click="zfcz()">执法处置</van-tabbar-item>
          </van-tabbar>
      <!-- </div> -->
    </template>
  </div>
</template>

<script>
import dataStatis from "@/components/dataStatis";
export default {
  data() {
    return {
      active1:0,
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
.cl_head {
  height: 150px;
  width: 100%;
  line-height: 180px;
  background-color: #ffff;
}

.cl_contDt{
  line-height: 70px;
}

.cl_contDtImg{
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
.cl_xxDate{
  margin-top: 30px;
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
</style>