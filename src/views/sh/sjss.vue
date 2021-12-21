<template>
  <div>
    <div>
      <van-nav-bar  :title="title" left-arrow border fixed placeholder right-text="提交" @click-right="add()"  @click-left="onClickLeft"/>
       <!-- <van-nav-bar   border fixed placeholder  @click-left="onClickLeft"/> -->
    </div>
    <!-- 输入任意文本 -->
    <van-form @submit="onSubmit">
      <van-field
          v-model="message"
          rows="3"
          autosize
          label="申诉理由"
          type="textarea"
          placeholder="请输入问题说明"
          show-word-limit
        />
    </van-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
     date: '',
     title:"事件申诉",
    };
  },

  methods: {
    add(){
      console.log(1111111)
    },
    // 返回上一页
    onClickLeft(){
      this.$router.go(-1)
    },
    // 提交
    onSubmit(values){
      console.log('submit', values);
    }
  },
  components:{
    
  }
};

</script>

<style>
.van-col{
  font-size: 26px;
}
.van-col--24{
  font-size: 36px;
  font-weight: 500;
}

</style>