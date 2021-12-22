<template>
  <div  class="home">
        <van-nav-bar
            title="核准证管理"
            left-arrow
            border
            fixed
            placeholder 
            @click-left="onClickLeft"/>
      <van-loading v-if="condition" size="24px">加载中...</van-loading>
      
      <template v-else>
        <van-search
            v-model="search.projectName"
            shape="round"
            background="#f2f2f2"
            placeholder="请输入搜索关键词" />
          <div class="home-canvan">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了"   @load="onLoad">
              <div v-for="(item, index) in tableData" :key="index" class="hezhun-cont" >
                <!-- <div @click='xq(item.sourceId)'> -->
                <van-row>
                  <van-col span="24" ><span>{{item.cardId}}</span></van-col>
                </van-row>
                <van-row >
                    <van-col span="23"><span>工程名称：{{item.projectName}}</span></van-col>
                </van-row>
                <van-row >
                    <van-col span="23"><span>工程地址：{{item.projectAddress}}</span></van-col>
                </van-row>
                <van-row >
                    <van-col span="23"><span>建设单位：{{item.property}}</span></van-col>
                </van-row>
                <van-row >
                    <van-col span="23"><span>施工单位：{{item.construction}}</span></van-col>
                </van-row>
                <van-row >
                    <van-col span="23"><span>运输单位：{{item.transportName}}</span></van-col>
                </van-row>
                <van-row >
                    <van-col span="23"><span>处置数量及方式：{{item.handleNum}}</span></van-col>
                </van-row>
                <van-row >
                    <van-col span="23"><span>处置场所：{{item.handlePlace}}</span></van-col>
                </van-row>
                <van-row >
                    <van-col span="23"><span>证件有效期：{{item.cardUseTime}}</span></van-col>
                </van-row>
                <van-row >
                    <van-col span="23"><span>办理日期：{{item.createTime}}</span></van-col>
                </van-row>
                <!-- </div>  -->
                <van-row class="btns">
                    <van-col span="8">
                      <van-button plain type="info" icon="delete" @click="del(item.id)">删除</van-button>
                    </van-col>
                    <van-col span="8">
                      <van-button plain type="info" icon="edit" @click="add(item.id)">编辑</van-button>
                    </van-col>
                    <van-col span="8">
                      <van-button plain type="info" icon="photo-o" >照片</van-button>
                    </van-col>
                </van-row>
              </div>
             </van-list>
          </div>
          <van-tabbar v-model="active" placeholder fixed>
            <van-tabbar-item icon="records"  @click="add(null)">添加</van-tabbar-item>
          </van-tabbar>
      </template>
      
          
     
  </div>
</template>

<script>
import { hzList, deletehz ,insertZt,deleteZt ,importDc } from "@/api/userMG";
import { Dialog } from 'vant';
// 弹出框
Vue.use(Dialog);

export default {
  data() {
    return {
      condition:true,
      search: {
        pageNum: 0,
        pageSize: 10,
        projectName: "",
      },
      tableData:new Array(),
      loading: false,
      finished: false,
    };
  },
  created(){
    setTimeout(() => {
      this.onLoad();
      this.condition = false
    }, 650);
    
  },
  methods: {
    del(id){
       Dialog.confirm({
          title: '提示',
          message: '删除提醒',
        }).then(() => {
            this.loading = true;
              let ids ={
                id: id
              }
            deletehz(ids).then(res => {
            this.loading = false;
            if (res.code == 200) {
              this.onLoad();
            }else{
              this.$message.error(res.msg);
            }
          });
        }).catch(() => {
        });
    },
    onClickLeft(){
      this.$router.go(-1)
    },
    // 加载数据
    onLoad() {
      clearTimeout(this.timeNum);
      this.timeNum=setTimeout(()=>{
          this.list(this.search,this.tableData);
      },200)
    },

  // 获取数据
    list(search,tableData) {
        this.loadingBat= true
      hzList(search).then(res => {
        this.loadingBat = false;
        if (res.code == 200) {          
          //this.tableData = res.data;
         // console.log(res.data)
           console.log(this.tableData)
          if(res.data.length>0 && this.tableData.length )tableData.push(...res.data);

          else  this.finished = true;

        } else {
           this.$message({
            type: "info",
            message: res.msg
          });
        }
      });
    },
    add(id){
      this.$router.push({ path: "/hzbj",query:{
         id:id}});
    },
    xq(id){
      this.$router.push({ path: "/details",query:{
         id:id}});
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
};

</script>

<style lang='scss' scoped>
.van-loading{
  text-align: center;
  margin-top: 220px;
}
.van-col{
  font-size: 24px;
  color: #999999;
  font-weight: 400;
}
.van-col--24{
  font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #999999;
  text-align: left;
  line-height: 24px;
  font-size: 28px;
  margin-bottom: 25px;
}
.home{
  background-color: #f7f7f7;
}
.home-canvan{
  background-color: #f7f7f7;
  margin: 20px 0;
}
.hezhun-cont{
  background-color: #FFf;
  width: 710px;
  margin: auto;
  margin-bottom: 40px;
  border-radius: 20px;
  padding: 40px;
  padding-bottom: 0px;
  line-height: 47px;
  font-family: '微软雅黑', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 12px;
  color: #999999;
  text-align: left;
}
.van-box{
  .font-sz{
    font-size: 28px;
  }
}
.btns{
  margin-top:20px;
  
  .van-col{
    text-align: center;
  }
  button{
    border: 0;
    position: relative;
    color: #CCC;
  }
}
</style>