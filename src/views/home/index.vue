<template>
  <div class="home">
    <van-sticky>
      <van-nav-bar
          title="首页"
        />
    </van-sticky>
    <div class="home-box">
      <div class="home-cont" :style="{background:item.bgColor}" v-for="(item, index) in menuTree" :key="index" @click="goTo(item)">
        <div class="home-icon">
          <img :src="require('../../assets/images/'+ item.icon)" />
        </div>
        <div :style="{background: item.titColor}" class="home-title">{{item.name}}</div>
      </div>
    </div>
    <!-- <van-tabbar v-model="active" @change="onChange" placeholder fixed>
      <van-tabbar-item icon="home-o">标签1</van-tabbar-item>
      <van-tabbar-item icon="search">标签2</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>

<script >
export default {
  name: "home",
  data() {
    return {
      menuTree: [
        {
          name: "数据统计",
          bgColor: "#aad562",
          titColor:'#9cc45a',
          icon:'u14.png',
          link:'/dataStatis'
        },
        {
          name: "违规事件",
          bgColor: "#5bbcdb",
          titColor:'#39b3d7',
          icon:'u14.png',
          link:'/weigui'
        },
        {
          name: "审核管理",
          bgColor: "#f0a175",
          icon: 'u35.png',
          titColor: '#f28e56',
          link:''
        },
      
        {
          name: "企业加分",
          bgColor: "#5bc0de",
          icon:'u23.png',
          titColor: '#39b3d7',
          link:'/zfsc'
        },
        {
          name: "核准证管理",
          bgColor: "#5bbcdb",
          icon:'u21.png',
          titColor: '#39b3d7',
          link:'/hezhun'
        },
        {
          name: "巡查上报",
          bgColor: "#f7c65f",
          icon:'u15.png',
          titColor: '#f6bb42',
          link:'/xcsb'
        },
        { 
          name: "违法处置", 
          bgColor: "#ec6f5a",
          icon:'u27.png',
          titColor: '#e9573f' 
        },{
          name: "账号管理", 
          bgColor: "#649ae1",
          icon:'u30.png',
          titColor: '#4a89dc' 
        }
      ],
    };
  },
  methods: {
    onClickLeft(){},
    goTo(item){
      item.link&&this.$router.push(item.link)
    }
  },
};
</script>
<style lang="scss" scoped>
*{
  box-sizing: border-box;
}
.home {
  line-height: 80px;
  text-align: center;
  background-color: #fff;
  .title {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    // position: fixed;
    width: 100%;
    // top: 0;
    background: #fff;
  }
}
.home-box{
  width: 100%;
  background-color: #f5f5f5;
  padding: 60px 5px 20px 5px;
  // margin-top: 100px;
.home-cont {
  width: 690px;
  height: 438px;
  background: #aad562;
  border-radius: 20px;
  margin: 0 auto 60px auto;
  .home-icon {
    height: 288px;
    width: 100%;
    > img {
      height: 220px;
      width: 220px;
      margin-top: 40px;
    }
  }
  .home-title {
    height: 150px;
    width: 100%;
    line-height: 150px;
    color: #fff;
    font-size: 44px;
    font-weight: 700;
    border-radius: 0 0 10px 10px ;
  }
}
}
</style>
