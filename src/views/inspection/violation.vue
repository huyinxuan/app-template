<template>
  <div class="home">
    <van-nav-bar
      title="违法处置"
      left-arrow
      border
      fixed
      placeholder
      @click-left="onClickLeft"
    />
    <van-loading v-if="condition" size="24px">加载中...</van-loading>
    <template v-else>
      <van-search
        v-model="enterprise"
        shape="round"
        background="#f2f2f2"
        placeholder="受理企业/个人"
      />
      <van-tabs v-model="active" animated>
        <van-tab title="待处理">
          <div class="van-box" v-for="(item, index) in tableData" :key="index"
            @click="DetailFn(item.id)">
            <van-row class="card_title">
              <van-col span="8"
                ><div class="van-ellipsis">{{ item.regionName }}</div></van-col
              >
              <van-col
                offset="13"
                class="card_status_0"
                v-show="item.status == 1"
                >待处理</van-col
              >
              <van-col
                offset="13"
                class="card_status_0"
                v-show="item.status == 2"
                >已超期</van-col
              >
              <van-col
                offset="13"
                class="card_status_0"
                v-show="item.status == 3"
                >待审核</van-col
              >
              <van-col
                offset="13"
                class="card_status_1"
                v-show="item.status == 4"
                >已处理</van-col
              >
            </van-row>
            <van-row>
              <van-col span="12"
                ><div class="van-ellipsis">
                  违规日期：{{ item.createTime }}
                </div></van-col
              >
              <van-col span="12"
                ><div class="van-ellipsis">
                  违规类型：{{ item.punishName }}
                </div></van-col
              >
            </van-row>
            <van-row>
              <van-col span="12">
                违规来源：
                <span v-show="item.sourceType == 1">巡查</span>
                <span v-show="item.sourceType == 2">群众举报</span>
                <span v-show="item.sourceType == 3">智能抓拍</span>
              </van-col>
              <van-col span="12"
                ><div class="van-ellipsis">
                  处理结果：{{ item.handleResult }}
                </div></van-col
              >
            </van-row>
          </div>
        </van-tab>
        <van-tab title="已处理">
          <div
            class="van-box"
            v-for="(item, index) in tableData"
            :key="index"
            @click="DetailFn(item.id)"
          >
            <van-row class="card_title">
              <van-col span="8"
                ><div class="van-ellipsis">{{ item.regionName }}</div></van-col
              >
              <van-col
                offset="13"
                class="card_status_0"
                v-show="item.status == 1"
                >待处理</van-col
              >
              <van-col
                offset="13"
                class="card_status_0"
                v-show="item.status == 2"
                >已超期</van-col
              >
              <van-col
                offset="13"
                class="card_status_0"
                v-show="item.status == 3"
                >待审核</van-col
              >
              <van-col
                offset="13"
                class="card_status_1"
                v-show="item.status == 4"
                >已处理</van-col
              >
            </van-row>
            <van-row>
              <van-col span="12"
                ><div class="van-ellipsis">
                  违规日期：{{ item.createTime }}
                </div></van-col
              >
              <van-col span="12"
                ><div class="van-ellipsis">
                  违规类型：{{ item.punishName }}
                </div></van-col
              >
            </van-row>
            <van-row>
              <van-col span="12">
                违规来源：
                <span v-show="item.sourceType == 1">巡查</span>
                <span v-show="item.sourceType == 2">群众举报</span>
                <span v-show="item.sourceType == 3">智能抓拍</span>
              </van-col>
              <van-col span="12"
                ><div class="van-ellipsis">
                  处理结果：{{ item.handleResult }}
                </div></van-col
              >
            </van-row>
          </div>
        </van-tab>
      </van-tabs>
    </template>
  </div>
</template>

<script>
import { ComplaintsList } from "@/api/inspectionapi";

import dataStatis from "@/components/dataStatis";
export default {
  data() {
    return {
      enterprise: "",
      active: 0,
      condition: true,
      tableData: [],
      //查询变量
      searchForm: {
        status: 1, //1待处理，2已超期，3待审核，4已处理
        pageNum: 1,
        pageSize: 10,
        enterpriseName: "",
      },
    };
  },
  watch: {
    active(e) {
      //0.待处理  1.已处理
      if (e == 0) {
        this.searchForm.status = 1;
      } else {
        this.searchForm.status = 4;
      }

      this.DataList(this.searchForm);
    },

    enterprise(e) {
      this.searchForm.enterpriseName = e;
      this.DataList(this.searchForm);
    },
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },

    //详情跳转
    DetailFn(Id) {
      this.$router.push({ path: "/violationDetails",query:{id:Id} });
    },

    //查询
    search() {
      this.DataList(this.searchForm);
    },

    //获取数据
    DataList(searchForm) {
      var than = this;
      console.log("searchForm:", searchForm);
      than.loadingBat = true;
      ComplaintsList(searchForm).then((res) => {
        than.loadingBat = false;
        if (res.code !== 200) {
          this.$message({
            type: "info",
            message: res.msg,
          });
        } else {
          than.condition = false;
          console.log("返回参数res:", res.data);
          than.tableData = res.data.list;
        }
      });
    },
  },
  created() {
    this.search();
  },
  components: {
    dataStatis,
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
.van-box {
  color: #999999;
  background-color: #fff;
  width: 710px;
  margin: 36px auto 40px auto;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 5%);
  line-height: 50px;
}
.van-search__content {
  background-color: #fff !important;
}
.van-box .card_title .van-col:nth-child(1) {
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 32px;
}
.card_status_0 {
  color: #f59a23;
  font-size: 20px;
}
.card_status_1 {
  color: #70b603;
  font-size: 20px;
}
</style>