<template>
  <div>
    <div>
      <van-nav-bar  :title="title" left-arrow border fixed placeholder  @click-left="onClickLeft"/>
    </div>
    <!-- 输入任意文本 -->
    <van-form @submit="onSubmit(data)">
      <van-field v-model="data.cardId" label="核准证编号：" required :rules="[{ required: true, message: '请输入正确内容' }]" />
      
      <van-field v-model="data.projectName" label="工程名称：" required :rules="[{ required: true, message: '请输入正确内容' }]"/>
      <van-field v-model="data.projectAddress" label="工程地址：" required :rules="[{ required: true, message: '请输入正确内容' }]" />
      <van-field v-model="data.construction" label="	施工单位:" required :rules="[{ required: true, message: '请输入正确内容' }]" />
      <van-field v-model="data.property" label="建设单位" required :rules="[{ required: true, message: '请输入正确内容' }]" />
      
      <!-- <van-field v-model="data.property" label="建设单位：" />
    用的工程渣土ID 带出这两个的值
      <van-field v-model="data.construction" label="施工单位：" /> -->
      <van-field is-link label="源头：" @click="show2 =true"  :value="data.sourceName" v-model="data.sourceName" />
      <van-popup class="select_rows_box" v-model="show2" round position="bottom" :style="{ height: '30%' }" >
          <van-row class="select_row" v-for="item in actions" :key="item">
            <van-col span="24" @click="sd(item)">{{item.name}}</van-col>
          </van-row>
      </van-popup>
 <!-- <van-field v-model="data.transportName" label="运输单位：" />  查询企业列表-->
      <van-field required is-link label="运输单位：" @click="show3 =true"  :value="data.transportName" v-model="data.transportName" :rules="[{ required: true, message: '请选择运输单位' }]" />
      <van-popup class="select_rows_box" v-model="show3" round position="bottom" :style="{ height: '30%' }" >
          <van-row class="select_row" v-for="item in actionys" :key="item">
            <van-col span="24" @click="ys(item)">{{item.name}}</van-col>
          </van-row>
      </van-popup>

      <van-field required v-model="data.handleNum" label="处置数量及方式："  :rules="[{ validator: isNum, message: '请输入一个大于0的数字' }]"/>
      <van-field required v-model="data.handlePlace" label="处置场所：" :rules="[{ required: true, message: '请输入正确内容' }]"/>
      <!-- <van-input lable="qqq" v-model="val"></van-input> -->
      <!-- <van-field v-model="text" label="证件有效期：" /> -->
      <van-field required label="证件有效期：" :value="data.cardUseTime" v-model="data.cardUseTime" @click="show1 = true" :rules="[{ required: true, message: '请选择日期' }]"/>
      <van-calendar v-model="show1" type="range" @confirm="onConfirm1"  />

      <van-field required label="办理日期：" :value="data.createTime" v-model="data.createTime" @click="show = true" :rules="[{ required: true, message: '请选择日期' }]"/>
      <van-calendar v-model="show" @confirm="onConfirm"  />

      <van-field required name="uploader" label="照片：">
        <template #input>
          <van-uploader v-model="uploader" :after-read="afterRead" multiple :max-count="1"/>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { edithz,inserthz,gcztList,enterpriseDropList,xqhz } from "@/api/userMG";
import {uploadImages} from "@/api/upload";

export default {
  data() {
    return {
      data:{
        sourceId:null,
        transportId:null,
        transportName:null,
        sourceName:null,
        cardStartTime:null,
        cardEndTime:null
      },
      show3: false,
      show2: false,
      show1: false,
      show: false,
      title:'',
      uploader: [],
      actions:[],
      actionys:[],
    };
  },
 created(){
   this.onLoad();
   this.sjSelect();
   this.ysSelect();
  },
  methods: {
     // 运输公司下拉查询,
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
    /**
     * 车牌号验证
     */
    isVehicleNumber(val) {
        var express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[警京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{0,1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
        return express.test(val);
    },
    // 企业/个人选择触发
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      if(this.Type != item.name){
        this.entity.enterpriseName = null;
        this.entity.enterpriseId = null;
      }
      this.show2 = false;
      this.Type = item.name;
      console.log("选择的项:", this.Type);


    },
    ysSelect(){
      enterpriseDropList().then(res => {
            if (res.code == 200) {
              this.actionys = res.data;
            } else {
              this.$toast.fail(res.msg);
            }
      });
     },
     ys(item){
        this.show3 = false;
        this.data.transportName = item.name
        this.data.transportId = item.id
     },
    // 渣土下拉查询
     sjSelect(){
      gcztList().then(res => {
            if (res.code == 200) {
              this.actions = res.rows;
            } else {
              this.$toast.fail(res.msg);
            }
      });
     },
     sd(item){
        this.show2 = false;
        this.data.sourceName = item.name
        this.data.sourceId = item.id
     },
    onLoad() {
      //let id =,
      if(this.$route.query.id){
          this.title="编辑核准证"
          //this.loadingBat= true
          let id ={
            id:this.$route.query.id
          }
          xqhz(id).then(res => {
            //this.uploader = []
            //this.loadingBat = false;
            if (res.code == 200) {
              this.$toast.success(res.msg);
              this.data = res.data;
              this.uploader.push({url:res.data.fileUrl,isImage: true})
              // this.uploader = res.data
            } else {
              this.$toast.fail(res.msg);
            }
          });
      }else{
        this.title="添加核准证"
      }
    },
     onClickLeft(){
      this.$router.go(-1)
    },
     formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    formatDate1(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 00:00:00`;
    },
    onConfirm(date) {
      this.show = false;
      this.data.createTime = this.formatDate1(date);
    },
    onConfirm1(date1){
      const [start, end] = date1;
      this.show1 = false;
      this.data.cardStartTime=this.formatDate1(start),
      this.data.cardEndTime=this.formatDate1(end),
      this.data.cardUseTime = `${this.formatDate(start)} 至 ${this.formatDate(end)}`;
    },
  
    onSubmit(data){
      
      if(data.id){
         //this.data.fileUrl =this.uploader.url
         this.data.fileUrl = this.uploader[0].url;
        edithz(data).then(res => {
            this.loading = false;
            if (res.code == 200) {
             // this.onLoad();
             this.$toast.success(res.msg);
              this.$router.go(-1)
            }else{
              this.$toast.fail(res.msg);
            }
          });
      }else{
        this.data.fileUrl =this.uploader[0].url
         console.log(this.data)
        inserthz(this.data).then(res => {
            this.loading = false;
            if (res.code == 200) {
              this.$toast.success(res.msg);
              this.$router.go(-1)
            }else{
              this.$toast.fail(res.msg);
            }
          });
      }
    },
    afterRead(file) {
      file.status = 'uploading';
      file.message = '上传中...';
      uploadImages(file).then(res=>{
        if(res.code==200){
          file.url=res.data[0].data.url;
          console.log("url"+res.data[0].data.url)
          file.status = 'done';
          file.message = '上传成功';
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