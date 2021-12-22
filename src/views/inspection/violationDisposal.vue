
<template>
<!-- 违法处置详情(修改执法处置)页面-->
  <div>
    <div>
      <van-nav-bar
        :title="title"
        left-arrow
        border
        fixed
        placeholder
        @click-left="onClickLeft"
      />
    </div>
    <!-- 输入任意文本 -->
    <van-form @submit="onSubmit">
      <van-field v-model="entity.handleResult" label="处理结果：" />

      <van-cell is-link title="处理企业/个人" @click="show2 = true" />
      <van-action-sheet v-model="show2" :actions="actions" @select="onSelect" />

      <van-cell
        is-link
        v-show="Type == '企业'"
        title="被处理对象："
        @click="show = true"
      />

      <van-action-sheet
        v-model="show"
        :actions="enterpriseDropList_ar"
        @select="enterpriseChange"
      />

      <van-field
        v-model="entity.enterpriseName"
        v-show="Type == '个人'"
        label="被处理对象："
      />

      <van-field v-model="entity.platePhone" label="被处理对象联系人：" />

      <van-field v-model="entity.plateNumber" label="涉事车牌号：" />

      <van-field name="uploader" label="上传照片：">
        <template #input>
          <van-uploader v-model="fileList" multiple :max-count="1" />
        </template>
      </van-field>

      <van-field
        v-model="entity.contents"
        rows="3"
        autosize
        label="问题说明"
        type="textarea"
        placeholder="请输入问题说明"
        show-word-limit
      />

      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          @click="submitForm"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import {
  enterpriseDropList,
  updateComplaintsStatus,
} from "@/api/inspectionapi";
export default {
  data() {
    return {
      show2: false, //企业或个人下拉状态
      show:false,
      Type: "企业", //企业 个人
      title: "执法处置",
      fileList: [],
      actions: [
        { name: "个人", values: "个人" },
        { name: "企业", values: "企业" },
      ],

      detailsForm: {},

      //企业下拉列表
      enterpriseDropList_ar: [],

      //详情实体
      entity: {
        id: 0, //id
        plateNumber: "", //涉事车牌
        contents: "",
        operateType: 2, //1申诉 2执法处置 3审核拒绝 4审核通过
        enterpriseId: 0, //企业Id
        enterpriseName: "", //企业/个人名称
        handleResult: "", //处理结果
        platePhone: "", //被处理对象联系人
      },
    };
  },
  created() {
    this.entity.id = this.$route.query.id;

    this.enterpriseDropListFn(); //获取企业列表
  },
  watch: {
    show2(e) {
      console.log(e);
    },
  },
  methods: {
    // 企业/个人选择触发
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show2 = false;
      this.Type = item.name;
      console.log("选择的项:", this.Type);
    },

    //触发企业下拉列表
    enterpriseChange(item) {
      this.entity.enterpriseName = item.name;
      this.entity.enterpriseId = item.id;

      console.log("enterpriseName:", item);
      console.log("enterpriseName:", this.entity.enterpriseName);
      console.log("enterpriseId:", this.entity.enterpriseId);
      this.show = false;
    },

    //提交
    submitForm() {
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

    //企业下拉列表
    enterpriseDropListFn: function () {
      enterpriseDropList(this.detailsForm).then((res) => {
        if (res.code !== 200) {
          this.$message({
            type: "info",
            message: res.msg,
          });
        } else {
          console.log("enterpriseDropList_ar:", res);
          res.data.forEach((val) => {
            var json = { name: val.name, values: val.id };
            this.enterpriseDropList_ar.push(json);
          });
          console.log("  this.enterpriseDropList_ar完成：");
        }
      });
    },

    // 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },

    // 提交
    // onSubmit(values) {
    //          console.log("提交的数据：",this.entity);
    //   console.log("submit", values);
    // },
  },
  components: {},
};
</script>

<style scoped>
.van-col {
  font-size: 26px;
}
.van-col--24 {
  font-size: 36px;
  font-weight: 500;
}
</style>