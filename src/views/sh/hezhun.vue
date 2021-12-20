<template>
  <div  class="home">
        <van-nav-bar
            title="审核证管理"
            left-arrow
            border
            fixed
            placeholder 
            @click-left="onClickLeft"
          />
      <van-loading v-if="condition" size="24px">加载中...</van-loading>
      <template v-else>
        <van-search v-model="search" placeholder="请输入搜索关键词" />
        <div v-for="item in list" :key="item" style="margin-top: 20px;">
            <van-row>
               <van-col span="24" ><span>东区审批建准字[2021]第12号</span></van-col>
            </van-row>
            <van-row >
                <van-col span="8"><span>工程名称：</span></van-col>
                <van-col span="16"><span>{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="8"><span>工程地址：</span></van-col>
                <van-col span="16"><span>{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="8"><span>建设单位：</span></van-col>
                <van-col span="16"><span>{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="8"><span>施工单位：</span></van-col>
                <van-col span="16"><span>{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="8"><span>运输单位：</span></van-col>
                <van-col span="16"><span>{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="8"><span>处置数量及方式：</span></van-col>
                <van-col span="16"><span>{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="8"><span>处置场所：</span></van-col>
                <van-col span="16"><span>{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="8"><span>证件有效期：</span></van-col>
                <van-col span="16"><span>{{item.name}}</span></van-col>
            </van-row>
            <van-row >
                <van-col span="8"><span>办理日期：</span></van-col>
                <van-col span="16"><span>{{item.name}}</span></van-col>
            </van-row>
             <div>
                <van-button plain type="info" icon="delete">删除</van-button>
                <van-button plain type="info" icon="edit">编辑</van-button>
                <van-button plain type="info" icon="photo-o">照片</van-button>
              </div>
          </div>
          <van-tabbar v-model="active" @click="add" placeholder fixed>
            <van-tabbar-item icon="home-o">添加</van-tabbar-item>
          </van-tabbar>
      </template>
  </div>
</template>

<script>

export default {
  data() {
    return {
      search:'',
      list: [
        {name:"内容"},{name:"内容"},{name:"内容"}
      ],
      loading: false,
      finished: false,
    };
  },

  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
    onLoad() {
      // 异步更新数据
      
    },
    add(){
      this.$router.push({ path: "/hzbj" });
    }
  },
  components:{
    
  }
};

</script>

<style>
.van-col{
  font-size: 26px;
}
.van-col--24{
  font-size: 36px;
  font-weight: 500;
}

</style>