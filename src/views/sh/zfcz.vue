<template>
  <div>
    <div>
      <van-nav-bar  :title="title" left-arrow border fixed placeholder  @click-left="onClickLeft"/>
    </div>
    <!-- 输入任意文本 -->
    <van-form @submit="onSubmit">
      <van-field v-model="text" label="处理结果：" />
      <!-- <van-field v-model="text" label="处理企业/个人：" /> -->
      <van-cell is-link title="处理企业/个人" @click="show2 = true" />
      <van-action-sheet v-model="show2" :actions="actions" @select="onSelect" />       
      <van-field v-model="text" label="被处理对象：" />

      <van-field v-model="text" label="被处理对象联系人：" />
      <van-field v-model="text" label="涉事车牌号：" />
      <van-field name="uploader" label="上传照片：">
        <template #input>
          <van-uploader v-model="fileList"  multiple :max-count="1" />
        </template>
      </van-field>
      <van-field
          v-model="message"
          rows="3"
          autosize
          label="问题说明"
          type="textarea"
          placeholder="请输入问题说明"
          show-word-limit
        />
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
     title:"执法处置",
     fileList:[],
     actions: [{ name: '选项一',values:'1' }, { name: '选项二',values:'1' }, { name: '选项三',values:'1' }],
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