<template>
  <div  class="home">
        <van-nav-bar
            title="历史记录"
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
              <div class="van-box" v-for="(item, index) in 10" :key="index">
                  <van-row class="card_title">
                        <van-col span="8">某某小区</van-col>
                        <van-col offset="13" class="card_status_0">待处理</van-col>
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
                <div class="van-box" v-for="(item, index) in 10" :key="index">
                  <van-row class="card_title">
                        <van-col span="8">某某小区</van-col>
                        <van-col offset="13" class="card_status_1">已处理</van-col>
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
        </van-tabs>
      </template>
  </div>
</template>

<script>
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
  color:#999999;
  background-color: #FFf;
  width: 710px;
  margin:36px auto 40px auto;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 5%);
  line-height: 50px;
}
.van-search__content{
    background-color: #fff !important;
}
.van-box .card_title .van-col:nth-child(1){
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 32px;
}
.card_status_0{ 
  color: #F59A23;
  font-size:20px
}
.card_status_1{
  color: #70B603;
  font-size:20px
}
.van-tab__pane-wrapper{
    height: 1000px;
    overflow: auto;
}
</style>