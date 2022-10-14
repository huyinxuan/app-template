<!-- 告警信息 -->
<template>
  <div class="home" ref="container">
    <van-nav-bar title="告警信息" left-arrow @click-left="onClickLeft" fixed />
    <div class="home-box">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell-group v-for="item in list" :key="item">
          <van-cell>
            <van-row>
              <van-col span="10">2022.09.16 09:00:56</van-col>
              <van-col span="8">大量气体喷出</van-col>
              <van-col span="4" style="color: red">一级</van-col>
              <van-col span="2">
                <van-image src="https://img01.yzcdn.cn/vant/cat.jpeg" />
              </van-col>
            </van-row>
          </van-cell>
        </van-cell-group>
        <van-sticky
          :container="container"
          :offset-top="20"
          style="text-align: center; margin-top: 40px"
        >
          <!-- <van-uploader> -->
          <van-button icon="plus" type="primary" @click="showPhoto"
            >拍照上传</van-button
          >
          <!-- </van-uploader> -->
        </van-sticky>
      </van-list>
    </div>
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '30%' }"
    >
      <van-form @submit="onSubmit">
        <van-field name="uploader" label="文件上传">
          <template #input>
            <van-uploader v-model="uploader" />
          </template>
        </van-field>
        <van-field
          readonly
          clickable
          name="picker"
          :value="value"
          label="告警类型"
          placeholder="点击选择告警类型"
          @click="showPicker = true"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </van-popup>
    <van-popup v-model="showPicker" round  position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      uploader: [],
      loading: false,
      finished: false,
      container: null,
      show: false,
      value: "",
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      showPicker: false,
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onSubmit() {},
    showPhoto() {
      this.show = true;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  mounted() {
    this.container = this.$refs.container;
  },
};
</script>

<style  lang="scss" scoped>
.home {
  .home-box {
    height: calc(100vh - 12.26667vw);
    padding: 12.26667vw 0 0 0;
    background: #fff;
    .content {
      padding: 20px 16px;
      .pd26 {
        padding: 26px;
      }
      .field-input {
        margin: 120px 0px;
      }
    }
    .t8 {
      padding: 8px;

      .lh48 {
        line-height: 48px;
        margin-top: 6.6vw;
      }
    }
  }
  .blues {
    color: blue;
  }
}
</style>
