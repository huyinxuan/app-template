<template>
  <div  class="home">
        <van-nav-bar
            title="事件查询"
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
        <van-tabs v-model="active" animated>
          <van-tab title="待处理">
              <div class="van-box" v-for="(item, index) in 3" :key="index">
                  <van-row>
                        <van-col span="8">北二路路口</van-col>
                        <van-col span="8"></van-col>
                        <van-col span="8">待处理</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="12">违规日期：2019-04-01</van-col>
                        <van-col span="12">违规类型：道路遗撒</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="12">违规来源：智能抓拍</van-col>
                        <van-col span="12">处理结果：暂无</van-col>
                    </van-row>
              </div>
          </van-tab>
          <van-tab title="已处理">
              <div class="van-box"></div>
          </van-tab>
        </van-tabs>
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
.van-box{
    background-color: #FFf;
    width: 710px;
    margin:36px auto 40px auto;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 5%);
    .van-row{
      .van-col{
        height: 48px;
        line-height: 48px;
      }
    }
}
.van-search__content{
    background-color: #fff !important;
}

</style>