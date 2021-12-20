<template>
  <div>
    <van-sticky>
      <div class="cl_head">
        <van-row>
          <van-col span="5" offset="1" class="cl_icon">
            <van-icon name="arrow-left" color="#d8d8d8" size="20"
          /></van-col>
          <van-col span="10" offset="3" class="cl_title">{{ title }}</van-col>
        </van-row>
      </div>
    </van-sticky>
    <div class="cl_menu">
      <!-- <van-row>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row> -->

      <div class="cl_line">
        <span class="cl_row">1</span>
        <span class="cl_row">2</span>
        <span class="cl_row">3</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      title: "北二路路口",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.cl_head {
  height: 150px;
  width: 100%;
  line-height: 180px;
  background-color: #ffff;
}

.cl_menu {
  border-top: 1px #f2f2f2 solid;
  height: 150px;
  width: 100%;
  background-color: #ffff;
}

.cl_line {
  height: 70px;
  line-height: 70px;
  width: 100%;
  border: 1px red solid;
  padding: 0px;
}

.cl_row {
  display: -webkit-box;
  width: 10px;
  height: 68px;
  background-color: blue;
}

.cl_icon {
  margin-top: 10px;
}

.cl_title {
  font-size: 40px;
}
</style>