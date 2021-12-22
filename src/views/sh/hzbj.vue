<template>
  <div>
    <div>
      <van-nav-bar  :title="title" left-arrow border fixed placeholder  @click-left="onClickLeft"/>
    </div>
    <!-- 输入任意文本 -->
    <van-form @submit="onSubmit(data)">
      <van-field v-model="data.cardId" label="核准证编号：" />
      <van-field v-model="data.projectName" label="工程名称：" />
      <van-field v-model="data.projectAddress" label="工程地址：" />
      <!-- <van-field v-model="data.property" label="建设单位：" />
    用的工程渣土ID 带出这两个的值
      <van-field v-model="data.construction" label="施工单位：" /> -->
      <van-cell is-link title="源头：" @click="show2 =true"  :value="data.sourceName" />
      <van-popup class="select_rows_box" v-model="show2" round position="bottom" :style="{ height: '30%' }" >
          <van-row class="select_row" v-for="item in actions" :key="item">
            <van-col span="24" @click="sd(item)">{{item.name}}</van-col>
          </van-row>
      </van-popup>
 <!-- <van-field v-model="data.transportName" label="运输单位：" />  查询企业列表-->
      <van-cell is-link title="运输单位：" @click="show3 =true"  :value="data.transportName" />
      <van-popup class="select_rows_box" v-model="show3" round position="bottom" :style="{ height: '30%' }" >
          <van-row class="select_row" v-for="item in actionys" :key="item">
            <van-col span="24" @click="ys(item)">{{item.name}}</van-col>
          </van-row>
      </van-popup>

      <van-field v-model="data.handleNum" label="处置数量及方式：" />
      <van-field v-model="data.handlePlace" label="处置场所：" />
      <!-- <van-input lable="qqq" v-model="val"></van-input> -->
      <!-- <van-field v-model="text" label="证件有效期：" /> -->
     <van-cell title="证件有效期：" :value="data.cardUseTime" @click="show1 = true" />
      <van-calendar v-model="show1" type="range" @confirm="onConfirm1"  />

      <van-cell title="办理日期：" :value="data.createTime" @click="show = true" />
      <van-calendar v-model="show" @confirm="onConfirm"  />

      <van-field name="uploader" label="照片：">
        <template #input>
          <van-uploader v-model="uploader" multiple :max-count="1"/>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { hzList,edithz,inserthz,gcztList,enterpriseDropList,xqhz } from "@/api/userMG";

export default {
  data() {
    return {
      data:{
        sourceId:'',
        transportId:'',
        transportName:'',
        sourceName:'',
        cardStartTime:'',
      cardEndTime:''
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
     // 运输公司下拉查询
     ysSelect(){
      enterpriseDropList().then(res => {
            if (res.code == 200) {
              this.actionys = res.data;
            } else {
              this.$message.error(res.msg);
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
              this.$message.error(res.msg);
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
            this.uploader = []
            //this.loadingBat = false;
            if (res.code == 200) {
              this.data = res.data;
              this.uploader.push({url:res.data.fileUrl,isImage: true})
              // this.uploader = res.data
            } else {
              this.$message.error(res.msg);
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
        //console.log("id"+data.id)
        edithz(data).then(res => {
            this.loading = false;
            if (res.code == 200) {
             // this.onLoad();
              this.$router.go(-1)
            }else{
              this.$message.error(res.msg);
            }
          });
      }else{
        this.data["uploader"] =this.uploader
         console.log(this.data)
        inserthz(this.data).then(res => {
            this.loading = false;
            if (res.code == 200) {
              this.$router.go(-1)
            }else{
              this.$message.error(res.msg);
            }
          });
      }
      //console.log('submit', data.property);
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

</style>