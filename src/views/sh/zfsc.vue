<template>
  <div>
    <div>
      <van-nav-bar  :title="title" left-arrow border fixed placeholder  @click-left="onClickLeft"/>
    </div>
    <!-- 输入任意文本 -->
    <van-form @submit="onSubmit">
      <van-field v-model="name" label="上传人员：" disabled/>
      <!-- <van-cell is-link title="加分企业：" @click="show2 = true" />
      <van-action-sheet v-model="show2" :actions="actions" @select="onSelect" />      -->
      
      <van-field is-link @click="show =true" placeholder="请选择企业"  :rules="[{ required: true, message: ' ' }]" required :value="data1.name" label="加分企业：" ></van-field>
      <van-popup class="select_rows_box" v-model="show" round position="bottom" :style="{ height: '30%' }" >

          <van-row class="select_row" v-for="(item,index) in actionjf" :key="index">
            <van-col span="24" @click="xz(item)">{{item.name}}</van-col>
          </van-row>
      </van-popup>

      <van-field required
        :rules="[{ required: true, message: ' ' }]" placeholder="请输入内容" v-model="data1.rewardDetail" label="加分内容：" />
      <van-field required
        :rules="[{ validator:isNum, message: ' ' }]" placeholder="请输入一个数字"  v-model="data1.rewardScore" label="加分分数：" />
      <van-field name="uploader" label="上传照片：">
        <template #input>
          <van-uploader  :after-read="afterRead" v-model="uploader"  multiple :max-count="1" />
        </template>
      </van-field>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { enterpriseDropList,companyreward,insertComplaints } from "@/api/userMG";
import {uploadImages} from "@/api/upload";
export default {
  data() {
    return {
      name:null,
     data1: {
       enterpriseId:'',
       name:null,
     },
     actionjf:[],
     show: false,
     title:"企业加分",
     uploader:[],
    };
  },
created(){
    this.onSelect()
    this.name =JSON.parse(localStorage.getItem("userdata")).nickName
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
    // 企业下拉
    onSelect() {
      enterpriseDropList().then(res => {
            if (res.code == 200) {
              this.actionjf = res.data;
            } else {
              this.$toast.fail(res.msg);
           }
      });
    },
    xz(item){
        this.show = false;
        this.data1.name = item.name
        this.data1.enterpriseId = item.id
     },
    // 返回上一页
     onClickLeft(){
      this.$router.go(-1)
    },
    // 提交
    onSubmit(){
      if(this.data1.name==null){
        this.$toast.fail("请选择企业！");
        return;
      }
      if(this.uploader.length>0)this.data1.picAfter=this.uploader[0].url;
        companyreward(this.data1).then(res => {
            this.loading = false;
            if (res.code == 200) {
              this.$toast.success(res.msg);
              this.$router.go(-1);
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
  },
  components:{
    
  }
};

</script>

<style  scoped>
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