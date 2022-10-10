<template>
  <div class="page">
    <van-row type="flex" justify="center">
      <van-image
        round
        width="30vw"
        height="30vw"
        :src="require('../assets/images/login.png')"
        style="margin: 10px 0px"
      />
      
    </van-row>
     <van-row type="flex" justify="center">
        <p class="font-til">特种作业流程管理</p>
     </van-row>
      <van-row type="flex" justify="center"><p class="font-til">深燃南山平台</p></van-row>
    <van-tabs v-model="active">
      <van-tab title="账号登录"> 
        <van-cell-group>
          <van-field
            v-model="loginForm.username"
            required
            clearable
            label="账号"
            placeholder="请输入账号"
             :rules="[{ required: true, message: '请填写账号' }]"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="loginForm.password"
            center
            clearable
            label="密码"
            type="password"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请输入验证码' }]"
          >
          </van-field>
        </van-cell-group>
        <van-button
          color="linear-gradient(to right, #4bb0ff, #6149f6)"
          size="large"
          @click="loginOn"
          :loading="loading"
          >登录</van-button
        >
      </van-tab>
      <van-tab title="手机登录">
        <van-cell-group>
          <van-field
            v-model="ruleFormPhone.phonenumber"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入手机号码"
            :rules="[{ validator: isPhone, message: '请输入正确的手机号码' }]"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="ruleFormPhone.msgCode"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
            :rules="[{ required: true, message: '请输入验证码' }]"
          >
            <template #button>
              <van-button size="small" @click="getMsg" type="primary"
                >发送验证码</van-button
              >
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
      </van-tab>
    </van-tabs>
    <!-- <van-button
          class="vnt-qz"
          color="linear-gradient(to right, #4bb0ff, #6149f6)"
          size="large"
          @click="loginOhter"
          :loading="loading"
          >群众登录</van-button
        > -->
  </div>
</template>

<script>
import _ from "lodash";
import { login, loginSms, touristLogin, sendMsgCode ,roleId} from "@/api/userMG";
export default {
  data() {
    return {
      active: '0',
      loginForm: {
        username: "",
        password: "",
      },
      ruleFormPhone: {
        //username和password默认为空
        phonenumber: "",
        msgCode: "",
      },
      loading: false,
    };
  },
  created(){
    localStorage.clear()
  },
  mounted() {
    console.log(this.$store.state);
  },
  methods: {
     async loginOhter(){
       let tour =  await touristLogin()
       if(tour.code == 200){
        this.$router.push({ path: "/home" });
        this.$store.commit("login", "true");
        localStorage.setItem("logintoken", tour.data.token);
        localStorage.setItem("menuId", JSON.stringify([53, 55]));
        localStorage.setItem("userdata", JSON.stringify(tour.data));
      }else{
        this.$toast.fail(tour.msg);
      }
      
      
    },
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
    getMsg: _.throttle(function () {
      let _this = this;
      console.log(this);
      if (!/^1[3456789]\d{9}$/.test(_this.ruleFormPhone.phonenumber)) {
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
              _this.ruleFormPhone.phonenumber = "";
            }
          }
        );
      }
    }, 2000),
    loginOn() {

      this.$store.commit("login", "true");
      this.$router.push({ path: "/home1" });
      // login(this.loginForm).then((res) => {
      //   if (res.code == 200) {
      //     localStorage.setItem("logintoken", res.data.token);
      //     // sessionStorage.setItem("logintoken", res.data.token)
      //       // 缓存用户个人信息
      //       console.log(res)
      //       localStorage.setItem("userdata", JSON.stringify(res.data));
      //       this.$store.commit("login", "true");
      //       this.getRole(res.data.roleId,res.data.token);
      //   } else {
      //     this.$toast.fail(res.msg);
      //     this.logining = false;
      //     // this.isSlider = false;
      //     // this.$refs.slider.init();
      //     return false;
      //   }
      // });
    },
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
            this.getRole(res.data.roleId,res.data.token);
            this.$router.push({ path: "/allLogin" });
          }, 1000);
        } else {
          this.$toast.fail(res.msg);
          this.loginingPhone = false;
          return false;
        }
      });
    },
    getRole(id,token) {
      roleId({roleId: id}).then((res) => {
        if (res.code == 200) {
          localStorage.setItem("menuId", JSON.stringify(res.data.menuIds));
            this.$router.push({ path: "/home" });
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 10px;
  .font-til{
    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 36px;
    color: #333333;
    &:last-child{
      margin:10px 0 20px 0;
    }
  }
  .vnt-qz{
    margin-top: 40px;
  }
}
</style>
