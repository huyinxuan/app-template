<template>
  <div class="container">
    <transition :name="transitionName">
      <router-view>
      </router-view>
    </transition>
    <van-tabbar v-if="$route.path !== '/'" @change="onChange" v-model="active" active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item name="home1" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item name="work" icon="search">指引</van-tabbar-item>
        <van-tabbar-item name="alarm" icon="chat-o">告警</van-tabbar-item>
        <van-tabbar-item name="my" icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script >
export default {
  data() {
    return {
      transitionName: "",
      active:'home1',
    };
  },
  name: "App",
  components: {},
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
      if(to.path.indexOf('work')>-1){
        this.active = 'work'
        this.$forceUpdate()
      }
    },
  },
  created(){
    console.log(this.$route)
  },
  methods: {
    onChange(index) {
      this.$router.push({ path: `/${index}` })
    },
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
}
.container{
    overflow-x: hidden;
  
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all  500ms ;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
