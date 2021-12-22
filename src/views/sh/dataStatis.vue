<template>
  <div>
    <div class="van-month">
      <van-tabs class="van-top" @click="onClick"  v-model="active"  type="card">
        <van-tab title="今年"></van-tab>
        <van-tab title="去年"></van-tab>
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
import {  baseYear } from "@/api/basisMG.js";
import { statistics } from "@/api/inspectionapi.js";

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
     // chinaTil:{chanqianlaji:'拆迁垃圾',gongchengzhatu:'工程渣土',zhuangxiuzhuangshi:'装修装饰垃圾'},
      active:0,
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
    onClick() {
      this.baseYearInit()
    },

    baseYearInit() {
      statistics({ year: this.active == 0 ? this.$moment().get('year'): this.$moment().get('year')-1 }).then((res) => {
        if (res.code == 200) {
          console.log(res.data)
          this.initChat2(res.data);
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
      let data1 = [];
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        data1.push(element.amount);
      }
      this.option2.series[0].data = data1;
      this.myChart = this.$echarts.init(this.$refs.chart);
      this.myChart.clear()
      this.option2 && this.myChart.setOption(this.option2,true);
    }
  },
  created() {
    this.$nextTick(() => {
      this.baseYearInit()
    });
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