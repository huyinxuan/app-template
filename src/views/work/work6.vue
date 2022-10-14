<!-- 动火作业 -->
<template>
    <div class="home">
        <van-nav-bar title="动火作业-动火作业" left-arrow 
        @click-left="onClickLeft" fixed/>
        <div class="home-box">
            <van-tabs v-model="active" animated swipeable>
                <van-tab title="作业坑1">         
                    <div class="content">
                        <van-steps direction="vertical" :active="0">
                            <van-step>
                                <div style="display:flex">
                                    <div style="flex:2">
                                        <h3>步骤1</h3>
                                        <p>详细信息</p>
                                    </div>
                                    <div style="flex:1;justify-content: center;align-items: center;display: flex;">
                                        <van-uploader>
                                            <van-button size="mini" icon="plus" type="primary">上传文件</van-button>
                                        </van-uploader>
                                    </div>
                                    <div style="flex:1;justify-content: center;align-items: center;display: flex;">
                                        <van-icon name="passed" />
                                    </div>
                                </div>
                            </van-step>
                            <van-step>
                                <div style="display:flex">
                                    <div style="flex:2">
                                        <h3>步骤1</h3>
                                        <p>详细信息</p>
                                    </div>
                                    <div style="flex:1;justify-content: center;align-items: center;display: flex;">
                                        <van-uploader>
                                            <van-button size="mini" icon="plus" type="primary">上传文件</van-button>
                                        </van-uploader>
                                    </div>
                                    <div style="flex:1;justify-content: center;align-items: center;display: flex;">
                                        <van-icon name="passed" />
                                    </div>
                                </div>
                            </van-step>
                            <van-step>
                                <div style="display:flex">
                                    <div style="flex:2">
                                        <h3>步骤1</h3>
                                        <p>详细信息</p>
                                    </div>
                                    <div style="flex:1;justify-content: center;align-items: center;display: flex;">
                                        <van-uploader>
                                            <van-button size="mini" icon="plus" type="primary">上传文件</van-button>
                                        </van-uploader>
                                    </div>
                                    <div style="flex:1;justify-content: center;align-items: center;display: flex;">
                                        <van-icon name="close" />
                                    </div>
                                </div>
                            </van-step>
                        </van-steps>
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