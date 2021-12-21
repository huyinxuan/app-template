<template>
  <div  class="home">
        <van-nav-bar
            title="数据统计"
            left-arrow
            border
            fixed
            placeholder 
            @click-left="onClickLeft"
          />
      <van-loading v-if="condition" size="24px">加载中...</van-loading>
      <template v-else>
        <van-tabs v-model="active" animated>
          <van-tab title="月">
            <dataStatis :tabindex="active"></dataStatis>
          </van-tab>
          <van-tab title="季">
            <dataStatis :tabindex="active"></dataStatis>
          </van-tab>
          <van-tab title="年">
            <dataStatis :tabindex="active"></dataStatis>
          </van-tab>
        </van-tabs>
      </template>
  </div>
</template>

<script>
import dataStatis from '@/views/sh/dataStatis'
export default {
  data() {
    return {
      active: 0,
      condition:true
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    }
  },
  created(){
    setTimeout(() => {
      this.condition = false
    }, 650);
  },
  components:{
    dataStatis
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #f7f7f7;
}
.van-loading{
  text-align: center;
  margin-top: 220px;
}
</style>