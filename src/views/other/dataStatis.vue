<template>
  <div class="home">
      <div class="title">数据统计</div>
      <van-tabs v-model="active" animated>
        <van-tab title="月">
          <dataStatis></dataStatis>
        </van-tab>
        <van-tab title="季">季</van-tab>
        <van-tab title="年">年</van-tab>
      </van-tabs>
  </div>
</template>

<script>
import dataStatis from '@/components/dataStatis'
export default {
  data() {
    return {
      active: 0
    }
  },
  components:{
    dataStatis
  }
}
</script>

<style lang="scss" scoped>
.home {
  line-height: 80px;
  text-align: center;
  padding: 5px 10px;
  .title {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }
}
</style>