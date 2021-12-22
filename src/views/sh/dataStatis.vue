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
          <div>
          <p class="font-fz">图</p>
          </div>
          <div>
              <p class="font-tl">审核证办理数</p>
            <p class="font-fz">25</p>
          </div>
        </div>
        
      <div class="box-bar" ref="chart"></div>
    </div>
  </div>
</template>

<script>
import { baseInfo, baseYear, baseJiDu, baseMonth } from "@/api/basisMG.js";
export default {
  props: {
    myChart: "",
    baseList: [],
    barList: [],
    tabindex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      chinaTil:{chanqianlaji:'拆迁垃圾',gongchengzhatu:'工程渣土',zhuangxiuzhuangshi:'装修装饰垃圾'},
      active:0,
      titleOne:
        this.tabindex == 0 ? "本月" : this.tabindex == 1 ? "本季" : "今年",
      titleTwo:
        this.tabindex == 0 ? "上月" : this.tabindex == 1 ? "上季" : "去年",
      option2: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          icon: "circle",
           data: ['核准证办理数']
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "核准证办理数",
            type: "bar",
             barWidth: 20,
            itemStyle: {
              //柱样式
              normal: {
                barBorderRadius: [50, 50, 0, 0],
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [],
          },
        ],
      },
    };
  },
  methods: {
    onClick(name, title) {
      this.tabindex == 0 ? this.baseMonthInit() :( this.tabindex == 1 ? this.baseJiDuInit() : this.baseYearInit())
    },
    baseInit() {
      baseInfo().then((res) => {
        if (res.code == 200) {
          this.baseList = res.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    baseYearInit() {
      baseYear({ year: this.active == 0 ? this.$moment().get('year'): this.$moment().get('year')-1 }).then((res) => {
        if (res.code == 200) {
          this.initChat2(res.data.zhuzhuangtu);
          let blist = []
          for (let index = 0; index < Object.keys(res.data.bingzhuangtu).length; index++) {
            const element = Object.keys(res.data.bingzhuangtu)[index];
            blist.push({name:element,value: res.data.bingzhuangtu[element]})
          }
          this.barList = blist;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    baseMonthInit() {
      let jidu = {
        year: this.$moment().year(),
        month: this.active == 0 ?  this.$moment().format('MM') : this.$moment().format('MM') -1
      }
      baseMonth(jidu).then(
        (res) => {
          if (res.code == 200) {
            // this.baseList = res.data
            this.initChat2(res.data.zhuzhuangtu);
            let blist = []
            for (let index = 0; index < Object.keys(res.data.bingzhuangtu).length; index++) {
              const element = Object.keys(res.data.bingzhuangtu)[index];
              blist.push({name:element,value: res.data.bingzhuangtu[element]})
            }
            this.barList = blist;
          } else {
            this.$message.error(res.msg);
          }
        }
      );
    },
    baseJiDuInit() {
      let jidu = {
        year: this.$moment().year(),
        jidu: this.active == 0 ?  this.$moment().quarter() : this.$moment().quarter() -1
      }
      baseJiDu(jidu).then((res) => {
        if (res.code == 200) {
          // this.baseList = res.data
          this.initChat2(res.data.zhuzhuangtu);
          let blist = []
          for (let index = 0; index < Object.keys(res.data.bingzhuangtu).length; index++) {
            const element = Object.keys(res.data.bingzhuangtu)[index];
            blist.push({name:element,value: res.data.bingzhuangtu[element]})
          }
          this.barList = blist;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    initChat2(data) {
      let newData = []; // 横坐标
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        newData.push(element.month);
      }
      this.option2.xAxis[0].data = newData;
      // let initData = ['chanqianlaji','gongchengzhatu','zhuangxiuzhuangshi']
      let data1 = [];
      //let data2 = [];
      //let data3 = [];
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        data1.push(element.chanqianlaji);
        //data2.push(element.gongchengzhatu);
        //data3.push(element.zhuangxiuzhuangshi);
      }
      this.option2.series[0].data = data1;
      //this.option2.series[1].data = data2;
      //this.option2.series[2].data = data3;
      this.myChart = this.$echarts.init(this.$refs.chart);
      this.myChart.clear()
      this.option2 && this.myChart.setOption(this.option2,true);
    }
  },
  created() {
    this.$nextTick(() => {
      // this.initChar(this.tabindex);
      this.tabindex == 0 ? this.baseMonthInit() :( this.tabindex == 1 ? this.baseJiDuInit() : this.baseYearInit())
    });
  },
  mounted(){
      this.baseInit();
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
        this.baseInit();

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
  .box-tip2 {
    display: flex;
    > div {
      flex: 1;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      text-align: center;
      > .font-fz {
        font-size: 36px;
        color: #000;
        font-weight: bold;
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
</style>