<template>
  <div>
    <div>
        <!-- <van-list >
            <van-cell v-for="item in list" :key="item"  >
                <van-cell-group inset>
                  <van-cell  value="东区审批建准字[2021]第12号" size="large" />
                  <van-cell title="工程名称：" :value="item.name"  />
                  <van-cell title="工程地址：" :value="item.name" />
                  <van-cell title="建设单位：" :value="item.name" />
                  <van-cell title="施工单位：" :value="item.name" />
                  <van-cell title="运输单位：" :value="item.name" />
                  <van-cell title="处置数量及方式：" :value="item.name" />
                  <van-cell title="处置场所：" :value="item.name" />
                  <van-cell title="证件有效期：" :value="item.name" />
                  <van-cell title="办理日期：" :value="item.name" />
                </van-cell-group>
              <div>
                <van-button plain type="info" icon="delete">删除</van-button>
                <van-button plain type="info" icon="edit">编辑</van-button>
                <van-button plain type="info" icon="photo-o">照片</van-button>
              </div>
            </van-cell>
          </van-list> -->
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
    </div>
    <div>
      <van-button plain type="primary" size="large" @click="add()" icon="records">添加</van-button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [
        {name:"内容"},{name:"内容"},{name:"内容"}
      ],
      loading: false,
      finished: false,
    };
  },

  methods: {
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