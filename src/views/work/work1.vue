<!-- 作业准备 -->
<template>
    <div class="home">
        <van-nav-bar title="动火作业-作业准备" left-arrow 
        @click-left="onClickLeft" fixed/>
        <div class="home-box">
            <van-tabs v-model="active" animated swipeable>
                <van-tab title="作业坑1">         
                    <div class="content">
                        <p class="pd26 blues">作业坑图片</p>
                        <van-row gutter="20">
                            <van-col align="center" span="8">
                                <van-uploader  v-model="fileList1" :after-read="afterRead1" :max-count="1" />
                                <p style="text-align:center;color: #999;">全景</p>
                            </van-col>
                            <van-col align="center" span="8">
                                <van-uploader  v-model="fileList2" :after-read="afterRead2" :max-count="1" />
                                <p style="text-align:center;color: #999;">坑底</p>
                            </van-col>
                            <van-col align="center"  span="8">
                                <van-uploader  v-model="fileList3" :after-read="afterRead3"  :max-count="1"/>
                                <p style="text-align:center;color: #999;">坑边</p>
                            </van-col>
                        </van-row>
                        <van-field
                            class="field-input"
                            v-model="deep1"
                            center
                            clearable
                            border
                            label="作业坑深度"
                            placeholder="请输入深度"
                            >
                            <template #extra >
                                米
                            </template>
                        </van-field>
                        <van-row class="t8" align="center" justify="center">
                            <van-col span="24"  style="text-align:center"><van-button size="large" type="info">保存</van-button></van-col>
                        </van-row>
                    </div>
                </van-tab>
                <van-tab title="作业坑2">
                    <div class="content">
                        22
                    </div>
                </van-tab>
                <van-tab title="作业坑3">
                    <div class="content">
                        33
                    </div>
                </van-tab>
                <van-tab title="作业坑4">
                    <div class="content">
                        44
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active:0,
            fileList1:[],
            fileList2:[],
            fileList3:[],
            deep1:'',
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        afterRead1(){},
        afterRead2(){},
        afterRead3(){},
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
