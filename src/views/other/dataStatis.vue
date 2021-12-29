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
            <dataStatisD v-if="active==0" :tabindex="active"></dataStatisD>
          </van-tab>
          <van-tab title="季">
            <dataStatisM  v-if="active==1"  :tabindex="active"></dataStatisM>
          </van-tab>
          <van-tab title="年">
            <dataStatisy  v-if="active==2"  :tabindex="active"></dataStatisy>
          </van-tab>
        </van-tabs>
      </template>
  </div>
</template>

<script>
import dataStatisD from '@/components/dataStatis'
import dataStatisM from '@/components/dataStatis'
import dataStatisy from '@/components/dataStatis'
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
    dataStatisD,
    dataStatisy,
    dataStatisM
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