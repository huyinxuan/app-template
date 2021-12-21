<template>
  <div>
    <div class="van-month">
      <van-tabs class="van-top" @click="onClick" type="card">
        <van-tab title="本月"></van-tab>
        <van-tab title="上月"></van-tab>
      </van-tabs>
    </div>
    <div class="van-box">
      <div class="box-tip2">
        <div>
          <p>图</p>
          <!-- <img src="" /> -->
          <p class="font-fz">核准证办理数</p>
          <p class="font-tl">25</p>
        </div>
      </div>
      <div class="box-bar" ref="chart"></div>
    </div>
  </div>
</template>

<script>
export default {
      props:{
          myChart: '',
          tabindex:{
              default: 0
          }
    },
    data() {
        console.log(this.tabindex)
        return {
            option :{
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'shadow'
                    }
                },
                legend: {
                    icon: "circle",
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                    type: 'category',
                        data: ['01', '02', '03', '04', '05', '06', '07', '08' ,'09' , '10' ,'11' ,'12']
                    }
                ],
                yAxis: [
                    {
                    type: 'value'
                    }
                ],
                series: [
                    {
                    name: '核准证办理数',
                    type: 'bar',
                    // barWidth: 20,
                    itemStyle: {//柱样式
                            normal: {
                                barBorderRadius: [50,50,0,0]
                            }
                    },
                    data: [862, 1018, 964, 1026, 1679, 1600, 1570,862, 1018, 964, 1026, 1679, 1600],
                    emphasis: {
                        focus: 'series'
                    }
                  }
                ]
                }
        }
    },
    methods:{
        onClick(name,title){},
        initChar(id){
            this.$nextTick(()=>{
                this.myChart = this.$echarts.init(this.$refs.chart);
                this.option && this.myChart.setOption(this.option);
            })
        }
    },
    created(){
        this.$nextTick(()=>{
            this.initChar(this.tabindex)
        })
    }
}
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
    margin:  40px auto 0px auto;
  }
}
</style>