<template>
    <div class="home">
        <van-nav-bar title="建南路管网维修动火作业" left-arrow
  @click-left="onClickLeft" fixed/>
        <div class="home-box">
            <div class="content">
                <van-row class="t8">
                    <van-col span="6">作业时间：</van-col>
                    <van-col class="blues" span="18">2022.09.16 09:00~18:00</van-col>
                </van-row>
                <van-row class="t8">
                    <van-col span="6">作业等级：</van-col>
                    <van-col class="blues" span="18">3级</van-col>
                </van-row>
                <van-row class="t8">
                    <van-col span="6">作业地点：</van-col>
                    <van-col class="blues" span="18">南山区华明路</van-col>
                </van-row>
                <van-row class="t8" justify="space-between">
                    <van-col span="6">作业督导：</van-col>
                    <van-col class="blues" span="6">赖曙光</van-col>
                    <van-col span="6">现场督导：</van-col>
                    <van-col class="blues" span="6">廖昱森</van-col>
                </van-row>
                <van-row class="t8" justify="space-between">
                    <van-col span="6">现场指挥：</van-col>
                    <van-col class="blues" span="6">杨  帆</van-col>
                    <van-col span="6">作业队长：</van-col>
                    <van-col class="blues" span="6">唐  洪</van-col>
                </van-row>
                <van-row class="t8" justify="space-between">
                    <van-col span="6">现场监护：</van-col>
                    <van-col class="blues" span="6">杨宝玲</van-col>
                    <van-col span="6">项目工程师</van-col>
                    <van-col class="blues" span="6">黄依强</van-col>
                </van-row>
                <van-row class="t8">
                    <van-col span="24">作业内容：</van-col>
                    <div class="blues lh48">根据瓶改管工作部作业任务书，现组织综合施工队进行 深圳市老旧中压钢质燃气管道更新改造工程标段30--建南路（华明路-雅仕荔景苑）、华明路（建南路-蔚蓝三路） 更新改造作业，该工程位于南山区华明路。施工管道内介质为天然气,作业含新建PED110管段约16米及接驳点8处,1处PED160接D325,3处PED160接D108,1处PED160接PED63,2处PED63接PED63,1处PED110接D89,封堵点7处,断开封堵1处,1处D108,作业完成后,封堵点之间原管段取消废除、纳入废弃图层；本次作业采用关闭阀门停气的方式进行能源隔离,有影响用户；（详见图纸）</div>
                </van-row>
                <van-row class="t8" align="center" justify="center">
                    <van-col span="24"  style="text-align:center"><van-button size="small" round type="info">查看文档</van-button></van-col>
                </van-row>
            </div>
            <van-steps direction="vertical" :active="0" @click-step="steps">
                <van-step>
                    <h3>作业准备</h3>
                </van-step>
                <van-step>
                    <h3>作业交底</h3>
                </van-step>
                <van-step>
                    <h3>能源隔离</h3>
                </van-step>
                <van-step>
                    <h3>燃气放散</h3>
                </van-step>
                <van-step>
                    <h3>燃气置换</h3>
                </van-step>
                <van-step>
                    <h3>动火作业</h3>
                </van-step>
                <van-step>
                    <h3>质量检查</h3>
                </van-step>
                <van-step>
                    <h3>恢复供气</h3>
                </van-step>
            </van-steps>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        steps(num){
            switch(num) {
                case 0:
                    this.$router.push('/work1')
                    break;
                case 1:
                    this.$router.push('/work2')
                    break;
                case 2:
                    this.$router.push('/work3')
                    break;
                case 3:
                    this.$router.push('/work4')
                    break; 
                case 4:
                    this.$router.push('/work5')
                    break;
                case 5:
                    this.$router.push('/work6')
                    break;
                case 6:
                    this.$router.push('/work7')
                    break;
                case 7:
                    this.$router.push('/work8')
                    break;     
                default: 
                    this.$router.push('/work1')
            } 
        }
    }
}
</script>

<style  lang="scss" scoped>
.home{
    .home-box{
        height: calc(100vh  - 12.26667vw);
        padding: 12.26667vw 0 0 0;
        .content{
            padding: 20px 16px;
        }
        .t8{
            padding: 8px;
            .blues{
                color: blue;
            }
            .lh48{
                line-height: 48px;
                margin-top: 6.6vw;
            }
        }
    }
}
</style>