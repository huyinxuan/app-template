
<template>
  <!-- 新增账号页面 -->
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
    <van-form @submit="submitForm" @failed="onFailed">
      <van-field
        v-model="entity.nickName"
        label="姓名"
        placeholder="姓名"
        required
        :rules="[{ required: true, message: '请输入正确内容' }]"
      />
      <van-field
        v-model="entity.phonenumber"
        label="联系方式"
        placeholder="联系方式"
        required
        :rules="[{ required: true, message: '请输入正确内容' }]"
      />

      <van-field
        is-link
        label="归属管辖"
        @click="show2 = true"
        :value="entity.manageBelonging"
        :rules="[{ required: true, message: '请选择归属管辖' }]"
        required
        style="3em"
      />
      <van-action-sheet
        v-model="show2"
        :actions="selectRegionList_ar"
        @select="Regionchange"
      />

      <van-field
        v-model="entity.community"
        label="所属社区"
        placeholder="所属社区"
        required
        :rules="[{ required: true, message: '请输入正确内容' }]"
      />
      <van-field
        v-model="entity.responsibleRegion"
        label="负责范围"
        placeholder="负责范围"
        required
        :rules="[{ required: true, message: '请输入正确内容' }]"
      />

      <van-field label="禁用/启用 ">
        <template #input>
          <van-switch v-model="checked" size="24" />
        </template>
      </van-field>

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { insetWgy } from "@/api/userMG";
import { selectRegionList } from "@/api/inspectionapi";
export default {
  data() {
    return {
      show2: false, //企业或个人下拉状态

      title: "新增账号",
      id: 0, //管辖Id
      checked: true, //禁用、启用

      detailsForm: {},

      //区域下拉列表
      selectRegionList_ar: [],

      //详情实体
      entity: {
        nickName: "", //姓名
        phonenumber: "", //联系方式
        manageBelonging: null, //归属管辖
        community: "", //所属社区
        responsibleRegion: "", //负责范围
        status: 0, //0.启用/1.禁用
      },
    };
  },
  created() {
    this.entity.id = this.$route.query.id;
    this.selectRegionListFn();
  },
  watch: {
    //启用、禁用选择
    checked(e) {
      var that = this;
      if (e) {
        that.status = 0;
      } else {
        that.status = 1;
      }
    },

    //下拉框触发
    show2(e) {
      console.log(e);
    },
  },
  methods: {
    isPhone(val) {
      if (val === "") {
        return false;
      } else {
        if (!/^1[3456789]\d{9}$/.test(val)) {
          return false;
        } else {
          return true;
        }
      }
    },
    isNum(val) {
      if (val === "") {
        return false;
      } else {
        if (/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(val) == false) {
          return false;
        } else {
          return true;
        }
      }
    },

    //提交
    submitForm() {
      if (this.entity.manageBelonging == null) {
        this.$toast.fail("请选择管辖归属！");
        return;
      }
      this.entity.manageBelonging = this.id;
      insetWgy(this.entity).then((res) => {
        if (res.code == 200) {
          this.$toast.success("添加完成");
          this.onClickLeft();
        } else {
          this.$toast.fail(res.msg);
        }
      });
    },

    //编辑区域下拉
    Regionchange: function (e) {
      this.entity.manageBelonging = e.name;
      this.id = e.id;
      console.log("选择", e);
      console.log("选择1", this.entity.manageBelonging);
      this.show2 = false;
    },

    //区域下拉列表
    selectRegionListFn: function () {
      var that = this;
      selectRegionList(this.detailsForm).then((res) => {
        if (res.code !== 200) {
          this.$toast.fail(res.msg);
        } else {
          that.selectRegionList_ar = res.data;
        }
      });
    },

    // 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },

    onFailed(err) {
      console.log("err", err);
    },
  },

  components: {},
};
</script>

<style scoped>
.cl_State {
  background-color: #fff;
  height: 80px;
  line-height: 80px;
}

.van-col {
  font-size: 26px;
}
.van-col--24 {
  font-size: 36px;
  font-weight: 500;
}
.van-cell__title {
  width: 5em;
}
</style>