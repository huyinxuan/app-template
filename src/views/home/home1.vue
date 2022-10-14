<template>
    <div class="home">
        <van-nav-bar title="作业列表" fixed/>

        <div class="home-box">
            <van-search v-model="value" placeholder="请输入搜索关键词"   @search="onSearch" shape="round"/>
            <van-list
            ref="list"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                >
                <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
                <van-cell center v-for="item in list" :key="item" :title="'2022年9月26日18：00-2022年9月27日6：00'" @click="getWork(item)">
                    <template #label>深圳市老旧中压钢质燃气管道更新改造工程标段30</template>
                    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                    <template #right-icon>
                        <van-tag :type="item>3?'danger':'success'">{{item>3?'作业中':'已开票'}} </van-tag>
                    </template>
                </van-cell>
            </van-list>
        </div>
    </div>
    
    
</template>

<script>
export default {
    data(){
        return {
            value:'',
            list: [],
            loading: false,
            finished: false,
        }
    },
    created(){
        this.onLoad()
    },
    methods:{
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
        getWork(item){
            this.$router.push({ path: "/work" });
        },
        onSearch(){},
    }
}
</script>

<style  lang="scss" scoped>
.home{
    .home-box{
        height: calc(100vh  - 12.26667vw);
        padding: 12.26667vw 0 0 0;
    }
}
</style>