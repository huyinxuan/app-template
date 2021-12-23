<template>
<!-- 违法处置详情(申诉)页面 -->
  <div>
    <div>
      <van-nav-bar
        :title="title"
        left-arrow
        border
        fixed
        placeholder
        right-text="提交"
        @click-right="submitForm()"
        @click-left="onClickLeft"
      />
      <!-- <van-nav-bar   border fixed placeholder  @click-left="onClickLeft"/> -->
    </div>
    <!-- 输入任意文本 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="entity.contents"
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
import { updateComplaintsStatus } from "@/api/inspectionapi";
export default {
  data() {
    return {
      date: "",
      title: "事件申诉",

      //详情实体
      entity: {
        id: 0, //id
        contents: "",
        operateType: 1, //1申诉 2执法处置 3审核拒绝 4审核通过
      },
    };
  },
  created() {
    this.entity.id = this.$route.query.id;
  },
  methods: {
    add() {
      console.log(1111111);
    },
    // 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    // 提交
    onSubmit(values) {
      console.log("submit", values);
    },

    //提交
    submitForm() {
      if (this.entity.contents == "") {
         this.$dialog.alert({ message: '申诉理由不能为空！', });
        return;
      }

      console.log("提交的数据：", this.entity);

      updateComplaintsStatus(this.entity).then((res) => {
        if (res.code !== 200) {
          this.$message({
            type: "info",
            message: res.msg,
          });
        } else {
            this.$dialog.alert({ message: '成功', });
        }
      });
    },
  },
  components: {},
};
</script>

<style>
.van-col {
  font-size: 26px;
}
.van-col--24 {
  font-size: 36px;
  font-weight: 500;
}
</style>