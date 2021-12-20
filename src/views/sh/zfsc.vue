<template>
  <div>
    <div>
      <van-nav-bar  :title="title" left-arrow border fixed placeholder  @click-left="onClickLeft"/>
    </div>
    <!-- 输入任意文本 -->
    <van-form @submit="onSubmit">
      <van-field v-model="text" label="上传人员：" />
      <!-- <van-field v-model="text" label="加分企业：" /> -->
      <van-cell is-link title="加分企业：" @click="show2 = true" />
      <van-action-sheet v-model="show2" :actions="actions" @select="onSelect" />       
      <van-field v-model="text" label="加分内容：" />
      <van-field v-model="text" label="加分分数：" />
      <van-field name="uploader" label="上传照片：">
        <template #input>
          <van-uploader v-model="fileList"  multiple :max-count="1" />
        </template>
      </van-field>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      date: '',
      date1:'',
      show2:false,
      show1: false,
      show: false,
     title:"执法上传",
     fileList:[],
     actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }],
    };
  },

  methods: {
    // 企业下拉
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
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