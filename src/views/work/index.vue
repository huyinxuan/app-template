<template>
    <div class="home">
        <van-nav-bar title="动火作业" left-arrow
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
                    <van-col class="blues" span="18">南山区xxx街道xxx路xxx号</van-col>
                </van-row>
                <van-row class="t8" justify="space-between">
                    <van-col span="6">作业督导：</van-col>
                    <van-col class="blues" span="6">xxx</van-col>
                    <van-col span="6">现场督导：</van-col>
                    <van-col class="blues" span="6">xxx</van-col>
                </van-row>
                <van-row class="t8" justify="space-between">
                    <van-col span="6">现场指挥：</van-col>
                    <van-col class="blues" span="6">xxx</van-col>
                    <van-col span="6">作业队长：</van-col>
                    <van-col class="blues" span="6">xxx</van-col>
                </van-row>
                <van-row class="t8" justify="space-between">
                    <van-col span="6">现场监护：</van-col>
                    <van-col class="blues" span="6">xxx</van-col>
                    <van-col span="6">施工队：</van-col>
                    <van-col class="blues" span="6">xxx</van-col>
                </van-row>
                <van-row class="t8">
                    <van-col span="24">作业内容：</van-col>
                    <div class="blues lh48">是的撒大所大所大所打生打死大多萨达所大所大大所实打实大多实打实大实打实的是的撒大所大所大所打生打死大多萨达所大所大大所实打实大多实打实大实打实的是的撒大所大所大所打生打死大多萨达所大所大大所实打实大多实打实大实打实的是的撒大所大所大所打生打死大多萨达所大所大大所实打实大多实打实大实打实的</div>
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
                    <h3>焊口检查</h3>
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