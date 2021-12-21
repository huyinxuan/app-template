<template>
  <div>
    <div>
      <van-nav-bar :title="title" left-arrow border fixed placeholder   @click-left="onClickLeft"/>
      
    </div>
    <!-- 输入任意文本 -->
    <van-form @submit="onSubmit">
      <van-field v-model="text" label="上传人员：" />
      <van-cell is-link title="事件类型"  @click="show2 = true" />
      <van-action-sheet v-model="punishId" :actions="actionsj" @select="sjSelect" />     

      <van-cell is-link @click="openMap" :value="point.address" title="违规地点：" />

       <van-cell is-link title="属地街道："  @click="show1 = true" />
      <van-action-sheet v-model="regionId" :actions="actions" @select="onSelect" /> 
      
      <van-field v-model="text" label="运输单位：" />

      <van-field name="uploader" label="照片：">
        <template #input>
          <van-uploader v-model="uploader" multiple :max-count="1" />
        </template>
      </van-field>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

    <selectMap :center="'东营市'" v-model="point" v-if="point.showMap">
    </selectMap>

      <!-- <van-button plain type="primary" size="large" @click="add()" icon="">保存</van-button> -->
  </div>
</template>

<script>
import { regionListAll } from "@/api/payMG";
import { punishDailyDropList } from "@/api/userMG";
import selectMap from '@/components/map'
export default {
  data() {
    return {
     // val:'123',
      // date: '',
      // date1:'',
      show2: false,
      show1: false,
      title:"巡查上报",
      uploader: [],
      actionsj: [],
      actions: [],
      showMap:false,
      point:{
        lat:-1,
        lng:-1,
        address:'',
        showMap:false
      }
    };
  },
  components:{
    selectMap
  },
  created(){
    this.sjSelect(),
     this.sdSelect()
  },
  methods: {
     // 事件类型下拉查询
     sjSelect(){
      punishDailyDropList().then(res => {
            if (res.code == 200) {
              this.actionsj = res.data;
            } else {
              this.$message.error(res.msg);
            }
      });
     },
    // 事件类型下拉
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show2 = false;
      Toast(item.reason);
    },
    // 属地街道下拉查询
     sdSelect(){
      regionListAll().then(res => {
            if (res.code == 200) {
              this.actions = res.data;
            } else {
              this.$message.error(res.msg);
            }
      });
     },
    // 属地街道下拉
    onSelect(item) {
      this.show1 = false;
      Toast(item.name);
    },
    //打开地图选择窗口
    openMap(){
      this.point.showMap=true;
      console.log(this.point);
    },
    onClickLeft(){
      this.$router.go(-1)
    },
    onSubmit(values){
      console.log('submit', values);
    }
  }
};

</script>

<style>
.van-col{
  font-size: 26px;
}
.van-col--24{
  font-size: 36px;
  font-weight: 500;
}

</style>