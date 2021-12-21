<template>
  <div>
    <div>
      <van-nav-bar  :title="title" left-arrow border fixed placeholder  @click-left="onClickLeft"/>
    </div>
    <!-- 输入任意文本 -->
    <van-form @submit="onSubmit">
      <van-field v-model="text" colon label="工程名称" />
      <van-field v-model="text" colon label="工程地址" />
      <van-field v-model="text" colon label="建设单位" />
      <van-field v-model="text" colon label="施工单位" />
      <van-field v-model="text" colon label="运输单位" />
      <van-field v-model="val" colon label="处置数量" />
      <van-field v-model="text" colon label="处置场所" />
      <!-- <van-input lable="qqq" v-model="val"></van-input> -->
      <!-- <van-field v-model="text" label="证件有效期：" /> -->
     <van-cell title="证件有效期：" :value="date1" @click="show1 = true" />
      <van-calendar v-model="show1" type="range" @confirm="onConfirm1"  />

      <van-cell title="办理日期：" :value="date" @click="show = true" />
        <van-calendar v-model="show" @confirm="onConfirm"  />
      <van-field name="uploader" label="照片：">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
      <!-- <van-button plain type="primary" size="large" @click="add()" icon="">保存</van-button> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      val:'123',
      date: '',
      date1:'',
      show1: false,
      show: false,
     title:"添加核准证",
     uploader: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据
      
    },
     onClickLeft(){
      this.$router.go(-1)
    },
     formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    onConfirm1(date1){
      const [start, end] = date1;
      this.show1 = false;
      this.date1 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },
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