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
        <div class="van-box">
          <van-grid :column-num="3">
            <van-grid-item>
              <p>违规日期</p>
              <p>2010-10-10</p>
            </van-grid-item>
            <van-grid-item>
              <p>违规日期</p>
              <p>2010-10-10</p>
            </van-grid-item>
            <van-grid-item>
              <p>违规日期</p>
              <p>2010-10-10</p>
            </van-grid-item>
          </van-grid>
        </div>
      </template>
  </div>
</template>

<script>
import dataStatis from '@/components/dataStatis'
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