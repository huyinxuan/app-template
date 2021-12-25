<template>
  <div class="home">
    <van-nav-bar safe-area-inset-top 
  right-text="退出"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"  placeholder fixed title="首页" />
    <van-loading class="login"  v-if="loading" size="24px" vertical>加载中...</van-loading>
    <div v-else class="home-box">
      <div
        class="home-cont"
        :style="{ background: item.bgColor }"
        v-for="(item, index) in idTree"
        :key="index"
        @click="goTo(item)"
      >
        <div class="home-icon">
          <img :src="require('../../assets/images/' + item.icon)" />
        </div>
        <div :style="{ background: item.titColor }" class="home-title">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "home",
  data() {
    return {
      idTree:[],
      loading: true,
      menuTree: [
        {
          id:51,
          name: "数据统计",
          bgColor: "#aad562",
          titColor: "#9cc45a",
          icon: "u14.png",
          link: "/dataStatis",
        },
        {
          name: "巡查上报",
          id:52,
          bgColor: "#f7c65f",
          icon: "u15.png",
          titColor: "#f6bb42",
          link: "/xcsb",
        },
        {
          id:53,
          name: "群众举报",
          bgColor: "#f7c65f",
          icon: "u16.png",
          titColor: "#f6bb42",
          link: "/qzjb",
        },  
        {
          id:54,
          name: "违规事件",
          bgColor: "#5bbcdb",
          titColor: "#39b3d7",
          icon: "u14.png",
          link: "/weigui",
        },
        {
          id:56,
          name: "审核管理",
          bgColor: "#f0a175",
          icon: "u35.png",
          titColor: "#f28e56",
          link: "/examine",
        },
        {
          id:57,
          name: "企业加分",
          bgColor: "#5bc0de",
          icon: "u23.png",
          titColor: "#39b3d7",
          link: "/zfsc",
        },
        {
          id:60,
          name: "核准证管理",
          bgColor: "#5bbcdb",
          icon: "u21.png",
          titColor: "#39b3d7",
          link: "/hezhun",
        },
        {
          id:58,
          name: "违法处置",
          bgColor: "#ec6f5a",
          icon: "u27.png",
          titColor: "#e9573f",
          link: "/violation",
        },
        {
          id:59,
          name: "账号管理",
          bgColor: "#649ae1",
          icon: "u30.png",
          titColor: "#4a89dc",
          link: "/accoutManage"
        },
        {
          id:55,
          name: "历史数据",
          bgColor: "#5bc0de",
          icon: "u22.png",
          titColor: "#39b3d7",
          link: "/history"
        },
      ],
      ids:[],
    };
  },
  mounted(){
    this.loading = true
    setTimeout(() => {
        try {
        this.ids = JSON.parse(localStorage.getItem('menuId'))
        this.idTree =  this.menuTree.filter(this.checkAdult)
        console.log(this.idTree)
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
        this.$toast('暂无权限')
        this.$router.replace('/login')
      }
    }, 600);
    
  },
  methods: {
     checkAdult(age) {
        for(let i=0;i<JSON.parse(localStorage.getItem('menuId')).length;i++){
          if(age.id==JSON.parse(localStorage.getItem('menuId'))[i])
            return true
            }
    },
    onClickLeft() {
      this.$router.replace('/login')
    },
    onClickRight(){
      this.$router.replace('/login')
    },
    goTo(item) {
      item.link && this.$router.push(item.link);
    },
  },
};
</script>
<style lang="scss" scoped>
* {
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
.home-box {
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
      border-radius: 0 0 10px 10px;
    }
  }
}
.login{
  width: 200px;
  margin:200px  auto;
}
::v-deep .van-nav-bar__right{
   .van-nav-bar__text{
    color: rgb(0, 121, 254) !important;
  }
}
</style>
