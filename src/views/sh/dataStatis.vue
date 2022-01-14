<template>
  <div>
    <div class="van-month">
      <van-tabs class="van-top" @click="onClick"  v-model="active"  type="card">
        <van-tab title="今年"></van-tab>
        <van-tab title="去年"></van-tab>
      </van-tabs>
    </div>
   
    <div class="van-box">
        <van-row>
          <van-col span="21" class="line">
          </van-col>
        </van-row>
        <van-row class="box-tipr">
          <van-col offset="2" span="6">
              <svg t="1602486026361" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40639" width="64" height="64"><path d="M525.47584 957.44H217.088A99.328 99.328 0 0 1 117.76 858.33728V170.76736a99.328 99.328 0 0 1 99.328-99.11808h594.944A99.328 99.328 0 0 1 911.36 170.76736v446.592a29.696 29.696 0 0 1-59.392 0V170.76736a39.936 39.936 0 0 0-39.936-39.83872H217.088a39.936 39.936 0 0 0-39.936 39.83872v687.56992a39.936 39.936 0 0 0 39.936 39.83872h308.39296a29.63968 29.63968 0 1 1-0.00512 59.264zM679.936 303.85664H320.77312a29.63968 29.63968 0 1 1 0-59.27936H679.936a29.63968 29.63968 0 1 1 0 59.27936z m0 179.7376H320.77312a29.63968 29.63968 0 1 1 0-59.27936H679.936a29.63968 29.63968 0 1 1 0 59.28448z m-125.44 177.69472H320.77312a29.63968 29.63968 0 1 1 0-59.27424h233.7536a29.63968 29.63968 0 1 1 0 59.27936z" fill="#ffffff" p-id="40640"></path><path d="M686.592 957.39392a52.5056 52.5056 0 0 1-37.376-15.5392l-90.03008-90.624a29.99296 29.99296 0 0 1 0-42.24 29.52192 29.52192 0 0 1 41.984 0l85.47328 86.016 171.24864-170.5472a29.5424 29.5424 0 0 1 41.984 0.22528 30.02368 30.02368 0 0 1-0.22528 42.25024L723.79392 942.08a52.53632 52.53632 0 0 1-37.20192 15.31392z" fill="#ffffff" p-id="40641"></path></svg>
          </van-col>
          <van-col span="15">
            <div class="title">审核证办理数</div>
            <div class="num">{{total}}</div>
          </van-col>
        </van-row>
      <div class="box-bar" ref="chart"></div>
    </div>
  </div>
</template>
<script>
import {  baseYear } from "@/api/basisMG.js";
import { statistics } from "@/api/inspectionapi.js";

export default {
  props: {
    baseList: [],
    barList: [],
    
    tabindex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
    myChart: "",
     // chinaTil:{chanqianlaji:'拆迁垃圾',gongchengzhatu:'工程渣土',zhuangxiuzhuangshi:'装修装饰垃圾'},
      active:0,
      total:'',
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
//localStorage.getItem("userdata")
    baseYearInit() {
      //console.log("123 "+JSON.parse(localStorage.getItem("userdata")).nickName)
      statistics({ year: this.active == 0 ? this.$moment().get('year'): this.$moment().get('year')-1 }).then((res) => {
        if (res.code == 200) {
         // console.log(res.data)
          this.total =res.data.total
          this.initChat2(res.data.list);
        } else {
            this.$toast.fail(res.msg);
        }
      });
    },
    initChat2(data) {
      let newData = []; // 横坐标
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        newData.push(element.month + '月');
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

<style lang="scss" scoped>
.box-tipr{
  min-height: 27vw;
  background-color: #58a3f7;
  width: 85%;
  margin: 0 auto;
  border-radius: 1.33333vw;
  .van-tab{
    color: #fff;
  }
  .van-col{
    color:#FFF;
  }
  .icon{
    font-size: 55px;
    color: #c9e3ff;
    text-align: center;
    margin-top: 5.5vw;
    opacity: 0.6;
  }
  .title{
    font-size: 30px;
    margin-top: 8vw;
  } 
  .num{
    font-size:56px;
    margin-top: 12px;
  }
}
.line{
  padding-top: 3vw;
  border-top: 1px solid #e6e6e6;
  width: 100%;
  margin-top: 2vw;
}
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