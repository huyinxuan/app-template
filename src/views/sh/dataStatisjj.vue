<template>
  <div>
    <div class="van-month">
      <van-tabs class="van-top" @click="onClick"  v-model="active"  type="card">
        <van-tab :title="titleOne"></van-tab>
        <van-tab :title="titleTwo"></van-tab>
      </van-tabs>
    </div>
    <div class="van-box">
      <div class="box-tip">
        <div style="margin-top:30px;margin-left:40px">
          <!-- <van-circle v-model="currentRate" :rate="70" color="#58a3f7"  layer-color="#3fecff" size="120px" :clockwise="false" :text="text"/> -->
          <van-circle ref="ci" v-model="currentRate" :rate="toRate" :speed="100"  color="#58a3f7"  size="120px" :clockwise="false"
          :stroke-width="120" layer-color="#e9e9e9" :text="text()" />
        </div>
        <div style="margin-top:30px;text-align:left;margin-left:20px;">
          <p class="font-fz">违规事件</p>
          <p class="font-tl">{{data.total}}</p>
          <p class="font-fz">已处理</p>
          <p class="font-tl">{{data.processedNum}}</p>
        </div>
      </div>
      <div class="tit">{{this.h}}</div>
      <div class="box-tip2">
        <div class="pm_box" v-for="(info,index) in dataList" :key="index">
          <div class="info"><span class="No">{{(index+1).length==1?(index+1):"0"+(index+1)}}</span><span class="name">{{info.deptName}}</span></div>
          <van-progress :percentage="info.total/data.total*100" :show-pivot="false" color="#4BCED0"  />
        </div>
        <!-- <div v-for="(item, index) in  barList" :key="index">
          <p class="font-fz">{{ item.value}}<span class="font-fz-12">万m³</span></p>
          <p class="font-tl">{{ chinaTil[item.name]}}</p>
        </div> -->
      </div>
      <!-- <div class="box-bar" ref="chart"></div> -->
    </div>
  </div>
</template>

<script>
import { percentage,enforcement } from "@/api/basisMG.js";
export default {
  props: {
    h:'',
   
    myChart: "",
    dataList: [],
    tabindex: {
      type: Number,
      default: 0,
    },
    type:1
  },
  data() {
    return {
      chinaTil:{chanqianlaji:'拆迁垃圾',gongchengzhatu:'工程渣土',zhuangxiuzhuangshi:'装修装饰垃圾'},
      active:0,
      titleOne:
        this.type == 1? "本月" : this.type == 2 ? "本季" : "今年",
      titleTwo:
        this.type == 1 ? "上月" : this.type == 2 ? "上季" : "去年",
      
      data:{},
      toRate:100, 
      currentRate: 1,
    };
  },
  methods: {
    onClick() {
      // this.tabindex == 0 ? this.baseMonthInit() :( this.tabindex == 1 ? this.baseJiDuInit() : this.baseYearInit())
      if(this.type==1){
         this.active == 0 ? this.generalOverview(this.type,(new Date().getMonth()+1)) :this.generalOverview(this.type,new Date().getMonth());
    
        //this.active == 0 ? this.generalOverview(this.type,new Date().getFullYear()+"-"+(new Date().getMonth()+1)) :this.generalOverview(this.type,new Date().getFullYear()+"-"+new Date().getMonth());
      }else if(this.type==2){
        this.active == 0 ? this.generalOverview(this.type,this.getQuarter()) :this.generalOverview(this.type,this.getQuarter()-1);
      }else if(this.type==3){
        this.active == 0 ? this.generalOverview(this.type,new Date().getFullYear()) :this.generalOverview(this.type,new Date().getFullYear()-1);
      }
      
    },
    getQuarter(){
      var currMonth= new Date().getMonth()+1;
      var currQuarter = Math.floor( ( currMonth % 3 == 0 ? ( currMonth / 3 ) : ( currMonth / 3 + 1 ) ) );
      return currQuarter;
    },
    text() {
      if(this.data.processedNum==0)return "解决率0%";
      console.log(this.currentRate);
      return '解决率'+Math.round(this.data.processedNum/this.data.total*100,2) + '%';
    },
    baseInit() {
      baseInfo().then((res) => {
        if (res.code == 200) {
          this.baseList = res.data;
        } else {
         this.$toast.fail(res.msg);
        }
      });
    },
    // baseYearInit() {
    //   baseYear({ year: this.active == 0 ? this.$moment().get('year'): this.$moment().get('year')-1 }).then((res) => {
    //     if (res.code == 200) {
    //       // this.baseList = res.data
    //       this.initChat2(res.data.zhuzhuangtu);
    //       let blist = []
    //       for (let index = 0; index < Object.keys(res.data.bingzhuangtu).length; index++) {
    //         const element = Object.keys(res.data.bingzhuangtu)[index];
    //         blist.push({name:element,value: res.data.bingzhuangtu[element]})
    //       }
    //       this.barList = blist;
    //     } else {
    //       this.$message.error(res.msg);
    //     }
    //   });
    // },
    // baseMonthInit() {
    //   let jidu = {
    //     year: this.$moment().year(),
    //     month: this.active == 0 ?  this.$moment().format('MM') : this.$moment().format('MM') -1
    //   }
    //   baseMonth(jidu).then(
    //     (res) => {
    //       if (res.code == 200) {
    //         // this.baseList = res.data
    //         this.initChat2(res.data.zhuzhuangtu);
    //         let blist = []
    //         for (let index = 0; index < Object.keys(res.data.bingzhuangtu).length; index++) {
    //           const element = Object.keys(res.data.bingzhuangtu)[index];
    //           blist.push({name:element,value: res.data.bingzhuangtu[element]})
    //         }
    //         this.barList = blist;
    //       } else {
    //         this.$message.error(res.msg);
    //       }
    //     }
    //   );
    // },
    // baseJiDuInit() {
    //   let jidu = {
    //     year: this.$moment().year(),
    //     jidu: this.active == 0 ?  this.$moment().quarter() : this.$moment().quarter() -1
    //   }
    //   baseJiDu(jidu).then((res) => {
    //     if (res.code == 200) {
    //       // this.baseList = res.data
    //       this.initChat2(res.data.zhuzhuangtu);
    //       let blist = []
    //       for (let index = 0; index < Object.keys(res.data.bingzhuangtu).length; index++) {
    //         const element = Object.keys(res.data.bingzhuangtu)[index];
    //         blist.push({name:element,value: res.data.bingzhuangtu[element]})
    //       }
    //       this.barList = blist;
    //     } else {
    //       this.$message.error(res.msg);
    //     }
    //   });
    // },
    // initChat2(data) {
    //   let newData = []; // 横坐标
    //   for (let index = 0; index < data.length; index++) {
    //     const element = data[index];
    //     newData.push(element.month);
    //   }
    //   this.option2.xAxis[0].data = newData;
    //   // let initData = ['chanqianlaji','gongchengzhatu','zhuangxiuzhuangshi']
    //   let data1 = [];
    //   let data2 = [];
    //   let data3 = [];
    //   for (let index = 0; index < data.length; index++) {
    //     const element = data[index];
    //     data1.push(element.chanqianlaji);
    //     data2.push(element.gongchengzhatu);
    //     data3.push(element.zhuangxiuzhuangshi);
    //   }
    //   this.option2.series[0].data = data1;
    //   this.option2.series[1].data = data2;
    //   this.option2.series[2].data = data3;
    //   this.myChart = this.$echarts.init(this.$refs.chart);
    //   this.myChart.clear()
    //   this.option2 && this.myChart.setOption(this.option2,true);
    // }
  },
  created() {
    this.$nextTick(() => {
      // this.initChar(this.tabindex);
      //this.tabindex == 0 ? this.baseMonthInit() :( this.tabindex == 1 ? this.baseJiDuInit() : this.baseYearInit())
    });
  },
  mounted(){
      // this.baseInit();
  },
  watch: {
    tabindex:{
      handler(nal,onx){
        if(nal == 0){
          this.titleOne = '本月'
          this.titleTwo = '上月'
        }else if(nal == 1){
          this.titleOne = '本季'
          this.titleTwo = '上季'
        }else{
          this.titleOne = '今年'
          this.titleTwo = '去年'
        }
        // this.baseInit();

      }
    }
  },
};
</script>

<style lang='scss' scoped>
.van-month {
  width: 684px;
  height: 100px;
  margin: 0 auto;
  background-color: #fff;
  padding: 11px 0;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 5%);
  margin-top: 40px;
  // line-height: 100px;
}
.van-top {
  margin-top: 20px;
}
.van-box {
  width: 684px;
  margin: 0 auto 40px auto;
  min-height: 400px;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 5%);
  border-radius: 0 0 10px 10px;
  padding: 0 0 10px 0;
  background-color: #fff;
  .box-tip,
   {
    display: flex;
    > div {
      flex: 1;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      text-align: center;
      > .font-fz {
        font-size: 25px;
        color: #666666;
        margin: 20px 0;
      }
      > .font-tl{
         font-size: 38px;
        color: #666666;
        font-weight: 400;
        margin: 20px 0;
      }
    }
  }
  .font-tl {
    font-size: 24px;
    color: #999999;
  }
  h2 {
    font-size: 56px;
    text-indent: 40px;
    padding: 0;
    margin: 60px 0 0 0;
  }
  .box-bar {
    height: 640px;
    width: 684px;
    padding: 12px 10px;
    margin: 40px auto 0px auto;
  }
  .font-fz-12{
    font-size: 24px;
    font-weight: 400;
    color: #999;
  }
}
.box-tip2{
  width: 90%;
  margin: 0 auto;
  .pm_box{
    
    .info{
      text-align: left;
      font-size: 30px;
      font-family: '微软雅黑', sans-serif;
      .No{
        color:#666666;
        font-weight: 700;
      }
      .name{
        color:#666666;
        margin-left: 5px;
        font-weight: 400;
      }
      margin-bottom: 20px;
      margin-top: 35px;
    }
  }
}
.tit{
  font-size: 30px;
  font-weight: bold;
  color: #666;
  text-indent: 35px;
  margin-top: 50px;
}
</style>