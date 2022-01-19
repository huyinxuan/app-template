<template>
  <!-- 账号管理页面 -->
  <div class="home">
    <van-nav-bar
      title="账号管理"
      left-arrow
      border
      fixed
      placeholder
      @click-left="onClickLeft"
    />
    <van-loading v-if="condition" size="24px">加载中...</van-loading>
    <template v-else>
      <van-search
        v-model="Name"
        shape="round"
        background="#f2f2f2"
        placeholder="请输入姓名搜索"
        @input="changeTxt"
      />
      <van-row class="table-title">
        <van-col span="8">添加日期</van-col>
        <van-col span="4">姓名</van-col>
        <van-col span="8">手机号</van-col>
        <van-col span="4">操作</van-col>
      </van-row>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="next"
        immediate-check
         style="height:100vh;overflow-y: auto;" 
      >
        <!-- <div></div> -->
        <van-row
          class="table-box"
          v-for="(item, index) in tableData"
          :key="index"
        >
          <van-col span="8">{{ $moment(item.createTime).format('yyyy-MM-DD') }}</van-col>
          <van-col span="4"><div class="van-ellipsis">{{ item.nickName }}</div></van-col>
          <van-col span="8">{{ item.phonenumber }}</van-col>
          <van-col span="4" class="box-icon" @click="deleteUser(item.userId)">
            <van-icon name="close" /> 删除</van-col
          >
        </van-row>
      </van-list>
      <van-tabbar border v-model="active" placeholder fixed>
        <van-tabbar-item @click="ManageAddFn()">
          <span class="addPhone">添加手机号</span>
        </van-tabbar-item>
      </van-tabbar>
      <van-dialog
        v-model="show"
        title="添加手机号"
        @confirm="sureSubmit"
        show-cancel-button
        get-container="body"
      >
        <van-form>
          <van-field v-model="username" error required label="用户名" />
          <van-field v-model="tel" required type="tel" label="手机号" />
        </van-form>
      </van-dialog>
    </template>
  </div>
</template>

<script>
import { wgyglList, delWgy } from "@/api/userMG";
export default {
  data() {
    return {
      username:'',
      tel:'',
      active: 0,
      Name: "", //名称
      condition: true,
      show: false,
      tableData: [], //
      //条件查询
      searchForm: {
        nickName: "",
        pageNum: 1,
        pageSize: 10,
      },
      loading:false,
      finished:false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }, 
    changeTxt: _.debounce(function (e, item) {
        this.searchForm.pageNum=1;
        this.searchForm.nickName = e;
        this.getData(this.searchForm);
     }, 100),
     sureSubmit(){
       
     },
    
    //删除账号
    deleteUser(id) {
      console.log("点击删除",id);
      var Data={userId:id}
      delWgy(Data).then((res) => {
        if (res.code == 200) {
          this.$toast.success("删除成功");
          this.getData(this.searchForm);
        } else {
          this.$toast.fail(res.msg);
        }
      });
    },

    //新增跳转
    ManageAddFn() {
      this.$router.push({ path: "/countManageAdd" });
    },
    next(){
      console.log("翻页")
      clearTimeout(this.timeNum);
      this.timeNum=setTimeout(()=>{
        this.searchForm.pageNum++;
        this.getData(this.searchForm,true);
      },200)
     
    },
    // 获取用户列表
    getData(searchForm,page=false) {
      this.loading = true;
      /***
       * 调用接口，注释上面模拟数据 取消下面注释
       */
      wgyglList(searchForm).then((res) => {
        this.loading = false;
        if (res.code == 200) {
          console.log("拉取的值", res);
          if(page){
            if(res.total<=this.tableData.length){
              searchForm.pageNum=searchForm.pageNum-1;
              this.finished = true;
              return;
            }
            this.tableData.push(...res.rows);
          }else{
            this.tableData = res.rows;
          }
          // this.pageparm.total = res.total;
        } else {
          this.$toast.fail(res.msg);
          // 分页赋值
          // this.pageparm.currentPage = this.searchForm.page
          // this.pageparm.pageSize = this.searchForm.pageSize
        }
      });
    },
  },

  created() {
    this.getData(this.searchForm);

    setTimeout(() => {
      this.condition = false;
    }, 650);
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
.van-row {
  text-align: center;
}
.table-title {
  height: 90px;
  line-height: 90px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}
.table-box {
  background-color: #fff;
  height: 90px;
  line-height: 90px;
  border-bottom: 1px solid #e9e9e9;
}
.box-icon {
  color: #1989fa;
  align-items: center;
  display: flex;
  justify-content: center;
  > i {
    margin-right: 6px;
  }
}
.van-list {
  height: calc(100% - 288px);
  overflow: auto;
  width: 100%;
}
.addPhone {
  display: inline-block;
  height: 80px;
  width: 670px;
  border-radius: 10px;
  background-color: #0079fe;
  text-align: center;
  line-height: 80px;
  font-size: 32px;
  color: #fff;
}
</style>