<template>
<!-- 违法处置页面 -->
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
        @input="changeTxt"
      />
      <van-tabs v-model="active" animated>
        <van-tab title="待处理">
          <van-list 
            v-model="searchForm1.loading"
            :finished="searchForm1.finished"
            finished-text="没有更多了"
            @load="LoadPage"
            style="height:100vh;overflow-y: auto;">
            <div class="van-box" v-for="(item, index) in tableData1" v-if="item.status!=4" :key="index"
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
          </van-list>
        </van-tab>
        <van-tab title="已处理">
           <van-list 
            v-model="searchForm4.loading"
            :finished="searchForm4.finished"
            finished-text="没有更多了"
            @load="LoadPage"
            style="height:100vh;overflow-y: auto;">
            <div
              class="van-box"
              v-for="(item, index) in tableData4"
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
                <van-col span="12">
                  <div class="van-ellipsis">
                    处理结果：{{ item.handleResult }}
                  </div>
                </van-col>
              </van-row>
            </div>
           </van-list>
        </van-tab>
      </van-tabs>
    </template>
  </div>
</template>

<script>
import { ComplaintsList } from "@/api/inspectionapi";
import _ from "lodash";
import dataStatis from "@/components/dataStatis";
export default {
  data() {
    return {
      enterprise: "",
      active: 0,
      condition: true,
      tableData1:new Array(),
      tableData4:new Array(),
      //查询变量
      searchForm1: {
        status:"", //1待处理，2已超期，3待审核，4已处理
        pageNum: 0,
        pageSize: 10,
        enterpriseName: "",
        loading: false,
        finished: false,
      },
      //查询变量
      searchForm4: {
        status: 4, //1待处理，2已超期，3待审核，4已处理
        pageNum: 0,
        pageSize: 10,
        enterpriseName: "",
        loading: false,
        finished: false,
      },
      active:0,
      timeNum:0
    };
  },
  watch: {
    active(e) {
      //0.待处理  1.已处理
      this.active=e;
      if (e == 0) {
        this.searchForm1.status="";
        this.DataList(this.searchForm1,this.tableData1);
      } else {
        this.DataList(this.searchForm4,this.tableData4);
      }

    
    }
  },

  methods: {
   changeTxt: _.debounce(function (e, item) {
        console.log(e);
        if (this.active == 0) {
          this.tableData1=[];
          this.searchForm1.pageNum=0;
          this.searchForm1.enterpriseName=e;
        } else {
          this.tableData4=[];
          this.searchForm4.pageNum=0;
          this.searchForm4.enterpriseName=e;
        }
        
        this.LoadPage();
     }, 100),
    onClickLeft() {
      this.$router.go(-1);
    },

    //详情跳转
    DetailFn(Id) {
      this.$router.push({ path: "/violationDetails",query:{id:Id,type:1} });
    },

    //查询
    search() {
      if (this.active == 0) {
        this.tableData4=[];
        this.searchForm1.pageNum=0;
        this.DataList(this.searchForm1,this.tableData1);
      } else {
        this.tableData1=[];
        this.searchForm4.pageNum=0;
        this.DataList(this.searchForm4,this.tableData4);
      }
    },

    LoadPage() {
      console.log("底部");
      clearTimeout(this.timeNum);
      this.timeNum=setTimeout(()=>{
        if (this.active == 0) {
          this.DataList(this.searchForm1,this.tableData1);
        } else {
          this.DataList(this.searchForm4,this.tableData4);
        }
      },200)
    
    },
    //获取数据
    DataList(searchForm,tableData) {
      console.log("searchForm",searchForm);
      searchForm.pageNum+=1;
      if(!!!searchForm)return;
      ComplaintsList(searchForm).then((res) => {
        this.loadingBat = false;
        if (res.code !== 200) {
           this.$dialog.alert({ message:res.msg, });
        } else {
          if(res.data.lastPage<searchForm.pageNum){
            searchForm.pageNum=res.data.lastPage;
            searchForm.finished = true;
            return;
          }
          this.condition = false;
          searchForm.loading=false;
          console.log("LIST:", tableData);
          if(res.data.list.length>0)tableData.push(...res.data.list);
          else  searchForm.finished = true;
        }
      });
    },
  },
  mounted() {
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