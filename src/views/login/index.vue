<template>
  <div class="page">
    <van-row type="flex" justify="center">
      <van-image
        round
        width="30vw"
        height="30vw"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        style="margin: 10px 0px"
      />
    </van-row>
    <van-cell-group>
      <van-field
        v-model="ruleFormPhone.username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入手机号码"
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="ruleFormPhone.msgCode"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" @click="getMsg" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <van-button
      color="linear-gradient(to right, #4bb0ff, #6149f6)"
      size="large"
      @click="loginMsg"
      :loading="loading"
      >登录</van-button
    >
  </div>
</template>

<script>
import _ from "lodash";
import { login, loginSms, sendMsgCode } from "@/api/userMG";
export default {
  data() {
    return {
      loginForm: {
        username: "maybekakui",
        password: "123456",
      },
      ruleFormPhone: {
        //username和password默认为空
        phonenumber: "15989597159",
        msgCode: "",
      },
      loading: false,
    };
  },
  mounted() {
    console.log(this.$store.state);
  },
  methods: {
    getMsg: _.throttle(function(){
      let _this = this
      console.log(this)
      if (!/^1[34578]\d{9}$/.test(_this.ruleFormPhone.phonenumber)) {
        _this.$toast.fail("请输入正确的手机号");
      } else if (
        _this.ruleFormPhone.phonenumber == "" ||
        !_this.ruleFormPhone.phonenumber
      ) {
        _this.$toast.fail("请输入手机号");
      } else {
        sendMsgCode({ phonenumber: _this.ruleFormPhone.phonenumber }).then(
          (res) => {
            if (res.code == 200) {
              _this.$toast.success(res.msg);
            } else {
              _this.$toast.fail(res.msg);
              _this.rulesPhone.phonenumber = "";
            }
          }
        );
      }
    },2000),
    loginMsg() {
      loginSms(this.ruleFormPhone).then((res) => {
        if (res.code == 200) {
          //如果请求成功就让他2秒跳转路由
          setTimeout(() => {
            this.loginingPhone = false;
            // 缓存token
            localStorage.setItem("logintoken", res.data.token);
            // 缓存用户个人信息
            localStorage.setItem("userdata", JSON.stringify(res.data));
            this.$store.commit("login", "true");
            this.$router.push({ path: "/allLogin" });
          }, 1000);
        } else {
          this.$toast.fail(res.msg);
          this.loginingPhone = false;
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 10px;
}
</style>
