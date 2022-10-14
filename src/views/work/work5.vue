<!-- 燃气置换 -->
<template>
    <div class="home">
        <van-nav-bar title="动火作业-燃气置换" left-arrow 
        @click-left="onClickLeft" fixed/>
        <div class="home-box">
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
            <van-divider>燃气浓度</van-divider>
            <van-field
                v-model="sms"
                center
                clearable
                label="当前燃气浓度"
                placeholder="请输入短信验证码"
                >
                <template #button>
                    <van-button size="small" type="primary">记录</van-button>
                </template>
            </van-field>
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                >
                <van-cell v-for="item in list" :key="item" title="2022.09.16 09:00:56" :value="item" />
            </van-list>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active:0,
            sms:'',
            list: [],
            loading: false,
            finished: false,
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        afterRead(){},
        afterRead1(){},
        onLoad() {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                this.list.push(this.list.length + 1);
                }

                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                this.finished = true;
                }
            }, 1000);
        },
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