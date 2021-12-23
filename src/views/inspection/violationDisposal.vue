
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
    <van-form @submit="submitForm"  @failed="onFailed" >
      <van-field v-model="entity.handleResult" label="处理结果：" placeholder="处理结果" required :rules="[{ required: true, message: '请输入正确内容' }]" />


      <van-cell is-link title="处理企业/个人" @click="show2 = true" :value="Type"/>
      <van-action-sheet v-model="show2" :actions="actions" @select="onSelect" />

      <van-cell
        is-link
        v-show="Type == '企业'"
        title="被处理对象："
        @click="show = true"
        :value="entity.enterpriseName"
        required
        style="3em"
      />
      <van-action-sheet v-model="show" :actions="enterpriseDropList_ar" @select="enterpriseChange" />

      <van-field

        v-model="entity.enterpriseName"
        v-if="Type == '个人'"
        label="被处理对象："
        required :rules="[{ required: true, message: '请输入正确内容' }]"
      />

      <!-- <van-field v-model="entity.platePhone" required :rules="[{  validator:isPhone, message: '请填写正确手机号' }]" label="联系方式：" /> -->
    <van-field v-model="entity.platePhone" required label="联系方式：" />
      <van-field v-model="entity.plateNumber" required :rules="[{ validator:isVehicleNumber, message: '请输入正确的车牌号' }]" label="涉事车牌号：" />

      <van-field name="uploader" label="上传照片：">
        <template #input>
          <van-uploader  :after-read="afterRead" v-model="fileList" multiple :max-count="6" />
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
import {uploadImages} from "@/api/upload";
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
        reportUserId:0,//执法/举报人员ID
        reportUserName:"",//执法/举报人名称
        operateType: 2, //1申诉 2执法处置 3审核拒绝 4审核通过
        enterpriseId: null, //企业Id
        enterpriseName: null, //企业/个人名称
        handleResult: "", //处理结果
        platePhone: "", //被处理对象联系人
      },
    };
  },
  created() {
    var UserInfo=localStorage.getItem("userdata");
    this.entity.reportUserId=UserInfo.userId;//用户Id
    this.entity.reportUserName=UserInfo.nickName;//操作用户Id
    this.entity.id = this.$route.query.id;

    this.enterpriseDropListFn(); //获取企业列表
  },
  watch: {
    show2(e) {
      console.log(e);
    },
  },
  methods: {
    isPhone (val) {
      if (val === "") {
          return false;
      } else {
          return (!/^1[3456789]\d{9}$/).test(val);
      }
    },
    isNum(val){
        if (val === "") {
            return false;
        } else {
            return (/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/).test(val)
        }
    },
    /**
     * 车牌号验证
     */
    isVehicleNumber(val) {
        var express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[警京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{0,1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
        return express.test(val);
    },
    // 企业/个人选择触发
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      if(this.Type != item.name){
        this.entity.enterpriseName = null;
        this.entity.enterpriseId = null;
      }
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
      if(this.entity.enterpriseName==null){
        this.$toast.fail("请选择企业！");
        return;
      }
      console.log("提交的数据：", this.entity);
      let arr = new Array();
      this.fileList.forEach(file => {
        arr.push(file.url);
      });
      this.entity.pic=arr.join(",");
      updateComplaintsStatus(this.entity).then((res) => {
        if (res.code !== 200) {
          this.$toast.fail(res.msg);
        } else {
             this.$toast.success('成功');
        }
      });
    },

    //企业下拉列表
    enterpriseDropListFn: function () {
      enterpriseDropList(this.detailsForm).then((res) => {
        if (res.code !== 200) {
              this.$toast.success(res.msg);
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
    afterRead(file) {
      file.status = 'uploading';
      file.message = '上传中...';
      uploadImages(file).then(res=>{
        console.log(res);
        if(res.code==200){
          file.url=res.data[0].data.url;
          file.status = 'done';
          file.message = '上传成功';
          console.log(this.uploader);
        }else{
          file.status = 'failed';
          file.message = '上传失败';
        }
      })
    },
    onFailed(err){
      console.log("err",err);
    }

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
.van-cell__title{
  width: 5em;
}
</style>