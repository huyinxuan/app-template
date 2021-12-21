<template>
  <div  class="home">
        <van-nav-bar
            title="审核证管理"
            left-arrow
            border
            fixed
            placeholder 
            @click-left="onClickLeft"
          />
      <van-loading v-if="condition" size="24px">加载中...</van-loading>
      <template v-else>
        <van-search
            v-model="search"
            shape="round"
            background="#f2f2f2"
            placeholder="请输入搜索关键词"
          />
          <div class="home-canvan">
          <div v-for="item in list" :key="item" class="hezhun-cont">
            <van-row>
               <van-col span="24" ><span>东区审批建准字[2021]第12号</span></van-col>
            </van-row>
            <van-row >
                <van-col span="23"><span>工程名称：{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="23"><span>工程地址：{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="23"><span>建设单位：{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="23"><span>施工单位：{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="23"><span>运输单位：{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="23"><span>处置数量及方式：{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="23"><span>处置场所：{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="23"><span>证件有效期：{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="23"><span>办理日期：{{item.name}}</span></van-col>
            </van-row>
            <van-row class="btns">
                <van-col span="8">
                  <van-button plain type="info" icon="delete">删除</van-button>
                </van-col>
                <van-col span="8">
                  <van-button plain type="info" icon="edit">编辑</van-button>
                </van-col>
                <van-col span="8">
                  <van-button plain type="info" icon="photo-o">照片</van-button>
                </van-col>
            </van-row>
          </div>
          </div>
          <van-tabbar v-model="active" placeholder fixed>
            <van-tabbar-item icon="home-o"  @click="add">添加</van-tabbar-item>
          </van-tabbar>
      </template>
  </div>
</template>

<script>

export default {
  data() {
    return {
      condition:true,
      search:'',
      list: [
        {name:"内容"},{name:"内容"},{name:"内容"}
      ],
      loading: false,
      finished: false,
    };
  },
  created(){
    setTimeout(() => {
      this.condition = false
    }, 650);
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
    onLoad() {
      // 异步更新数据
      
    },
    add(){
      this.$router.push({ path: "/hzbj" });
    }
  },
  components:{
    
  }
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