<template>
  <div class="home">
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
      <van-search
        v-model="search"
        shape="round"
        background="#f2f2f2"
        placeholder="请输入搜索关键词"
      />
      <van-row class="table-title">
        <van-col span="8">添加日期</van-col>
        <van-col span="4">姓名</van-col>
        <van-col span="8">手机号</van-col>
        <van-col span="4">操作</van-col>
      </van-row>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <div></div> -->
        <van-row class="table-box" v-for="(item, index) in 40" :key="index">
          <van-col span="8">2021-07-12</van-col>
          <van-col span="4">王小明</van-col>
          <van-col span="8">186********</van-col>
          <van-col span="4" class="box-icon"
            ><van-icon name="close" /> 删除</van-col
          >
        </van-row>
      </van-list>
      <van-tabbar border v-model="active" @change="onChange" placeholder fixed>
        <van-tabbar-item >
            <span class="addPhone" @click="addPhone">添加手机号</span>
        </van-tabbar-item>
      </van-tabbar>
       <van-dialog v-model="show" title="添加手机号" @confirm='sureSubmit' show-cancel-button  get-container="body">
            <van-form>
                <van-field
                    v-model="username"
                    error
                    required
                    label="用户名"
                />
                <van-field v-model="tel" required  type="tel" label="手机号" />
                </van-form>
        </van-dialog>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      condition: true,
      show:false
    };
  },
  methods: {
      sureSubmit(){
          
      },
      addPhone(){
          this.show = true
      },
    onClickLeft() {
      this.$router.go(-1);
    },
    finished() {},
    onLoad() {},
  },
  created() {
    setTimeout(() => {
      this.condition = false;
    }, 650);
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #f7f7f7;
}
.van-loading {
  text-align: center;
  margin-top: 220px;
}
.van-row {
  text-align: center;
}
.table-title {
  height: 90px;
  line-height: 90px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}
.table-box {
  background-color: #fff;
  height: 90px;
  line-height: 90px;
  border-bottom: 1px solid #e9e9e9;
}
.box-icon {
  color: #1989fa;
  align-items: center;
  display: flex;
  justify-content: center;
  > i {
    margin-right: 6px;
  }
}
.van-list {
  height: calc(100% - 288px);
  overflow: auto;
  width: 100%;
}
.addPhone{
    display: inline-block;
    height: 80px;
    width: 670px;
    border-radius: 10px;
    background-color: #0079fe;
    text-align: center;
    line-height: 80px;
    font-size: 32px;
    color: #fff;
}
</style>