<!-- 作业交底 -->
<template>
    <div class="home">
        <van-nav-bar title="动火作业-作业交底" left-arrow 
        @click-left="onClickLeft" fixed/>
        <div class="home-box">
            <div class="content">
                <van-divider class="pd26 blues">人员签到</van-divider>
                <van-uploader  v-model="fileList1" :after-read="afterRead1" />
                <van-divider class="pd26 blues">作业交底</van-divider>
                <van-uploader  v-model="fileList" :after-read="afterRead" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fileList:[],
            fileList1:[]
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        afterRead(){},
        afterRead1(){},
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