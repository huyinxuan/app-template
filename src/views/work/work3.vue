<!-- 能源隔离 -->
<template>
    <div class="home">
        <van-nav-bar title="动火作业-能源隔离" left-arrow 
        @click-left="onClickLeft" fixed/>
        <div class="home-box">
            <div class="content">
                <p class="pd26 blues">阀门关闭</p>
                <van-uploader :after-read="afterRead" />
            </div>
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
        afterRead(){}
    }
}
</script>

<style  lang="scss" scoped>

.home{
    .home-box{
        height: calc(100vh  - 12.26667vw);
        padding: 12.26667vw 0 0 0;
        background: #fff;
        .content{
            padding: 20px 16px;
            .pd26{
                padding: 26px;
            }
            .field-input{
                margin: 120px 0px;
            }
        }
        .t8{
            padding: 8px;
     
            .lh48{
                line-height: 48px;
                margin-top: 6.6vw;
            }
        }
    }
    .blues{
                color: blue;
            }
}
</style>