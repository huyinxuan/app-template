<template>
  <div class="home">
    <div class="title">首页</div>
    <div class="home-box">
    <div class="home-cont" :style="{background:item.bgColor}" v-for="(item, index) in menuTree" :key="index" @click="goTo(item)">
      <div class="home-icon">
        <img :src="require('../../assets/images/'+ item.icon)" />
      </div>
      <div class="home-title">{{item.name}}</div>
    </div>
    </div>
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
          icon:'u14.png',
          link:'/dataStatis'
        },
        {
          name: "审核管理",
          bgColor: "#f0a175",
          icon: 'u35.png'
        },
        {
          name: "企业加分",
          bgColor: "#5bc0de",
          icon:'u23.png'
        },
        {
          name: "巡查上报",
          bgColor: "#f7c65f",
          icon:'u15.png'
        },
        { name: "违法处置", bgColor: "#ec6f5a",icon:'u27.png' },
      ],
    };
  },
  methods: {
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
  }
}
.home-box{
  width: 100%;
  background-color: #F8FAFD;
  padding: 40px 5px;
}
</style>
