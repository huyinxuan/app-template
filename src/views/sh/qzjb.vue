<template>
  <div>
    <div>
      <van-nav-bar :title="title" left-arrow border fixed placeholder   @click-left="onClickLeft"/>
      
    </div>
    <!-- 输入任意文本 -->
    <van-form @submit="onSubmit">
      <van-field v-model="data1.reportUserName" label="举报人："  disabled/>
      <van-field v-model="data1.num" label="联系电话：" required :rules="[{ validator:isPhone, message: '请正确输入联系电话' }]" />
      <van-field is-link @click="show =true" :value="data1.punishName" label="事件类型：" required :rules="[{ required: true, message: '请选择事件类型' }]"></van-field>
      <van-popup class="select_rows_box" v-model="show" round position="bottom" :style="{ height: '30%' }" >
          <van-row class="select_row" v-for="item in actionsj" :key="item">
            <van-col span="24" @click="xz(item)">{{item.reason}}</van-col>
          </van-row>
      </van-popup>

      <van-field is-link @click="openMap" :value="point.address" label="违规地点：" required :rules="[{ required: true, message: '请填写违规地点' }]" />

      <van-field is-link label="属地街道：" @click="show1 =true"  :value="data1.regionName" required :rules="[{ required: true, message: '请选择属地街道' }]" />
      <van-popup class="select_rows_box" v-model="show1" round position="bottom" :style="{ height: '30%' }" >
          <van-row class="select_row" v-for="item in actions" :key="item">
            <van-col span="24" @click="sd(item)">{{item.name}}</van-col>
          </van-row>
      </van-popup>
      <van-field name="uploader" label="照片：">
        <template #input>
          <van-uploader v-model="uploader" :after-read="afterRead" multiple :max-count="1" />
        </template>
      </van-field>
      <van-field v-model="data1.contents" rows="3" autosize label="问题说明" type="textarea"  placeholder="请输入问题说明" show-word-limit />

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
import { punishDailyDropList,insertComplaints } from "@/api/userMG";
import {uploadImages} from "@/api/upload";
import selectMap from '@/components/map'
export default {
  data() {
    return {
      data1:{
        reportUserName:'',
        punishId:'',
        regionId:'',
      },
      show1: false,
      title:"群众举报",
      show:false,
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
     this.data1.reportUserName=JSON.parse(localStorage.getItem("userdata")).nickName
  },
  methods: {
    isPhone (val) {
      if (val === "") {
          return false;
      } else {
         if (!/^1[3456789]\d{9}$/.test(val)) {
            return false;
        } else {
            return true;
        }
      }
    },
    isNum(val){
        if (val === "") {
            return false;
        } else {
          if ((/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/).test(val) == false) {
              return false;
          } else {
              return true;
          }
        }
    },
     // 事件类型下拉查询
     sjSelect(){
      punishDailyDropList().then(res => {
            if (res.code == 200) {
              this.actionsj = res.data;
            } else {
              this.$toast.fail(res.msg);
            }
      });
     },
     xz(item){
        this.show = false;
        this.data1.punishName = item.reason
        this.data1.punishId = item.id
     },
    // 属地街道下拉查询
     sdSelect(){
      regionListAll().then(res => {
            if (res.code == 200) {
              this.$toast.success(res.msg);
              this.actions = res.data;
            } else {
              this.$toast.fail(res.msg);
            }
      });
     },
    sd(item){
        this.show1 = false;
        this.data1.regionName = item.name
        this.data1.regionId = item.id
     },
    //打开地图选择窗口
    openMap(){
      this.point.showMap=true;
      console.log(this.point);
    },
    onClickLeft(){
      this.$router.go(-1)
    },
    onSubmit(){
      
      this.data1.status=1,  //待处理
      this.data1.sourceType=2, //群众举报
      this.data1.handlePlace = this.point.address;
      this.data1.longitudeLatitude= this.point.lng+','+this.point.lat;
      this.data1.contents= this.data1.contents+"联系人电话："+this.data1.num
      if(this.uploader.length>0)this.data1.pic = this.uploader[0].url;
      console.log(this.data1);
     // console.log(this.data1.contents)
      insertComplaints(this.data1).then(res => {
            if (res.code == 200) {
              this.$toast.success(res.msg);
              this.$router.go(-1)
            }else{
              this.$toast.fail(res.msg);
            }
        });
    },
    afterRead(file) {
      file.status = 'uploading';
      file.message = '上传中...';
      uploadImages(file).then(res=>{
        console.log(res);
        if(res.code==200){
          file.url=res.data[0].data.url;
          file.status = 'done';
          file.message = '上传成功';
          console.log(this.uploader);
        }else{
          file.status = 'failed';
          file.message = '上传失败';
        }
      })
    }
  }
};
</script>

<style scoped>
.van-col{
  font-size: 26px;
}
.van-col--24{
  font-size: 36px;
  font-weight: 500;
}
.select_row{
  text-align: center;
  padding: 3.33333vw;
  border-bottom: 1px solid #f3f2f2;
  width: 95%;
  margin: 0 auto;
}
.select_row:last-child{
  border: 0;
}
.select_row .van-col{
  font-size:30px;
  color:#666666;
}
.select_rows_box{
  padding-bottom: 25px;
}
</style>