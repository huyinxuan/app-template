<template>
    <div>
        <van-tabs class="van-top" @click="onClick" type="card">
            <van-tab title="本月"></van-tab>
            <van-tab title="上月"></van-tab>
        </van-tabs>
        <div class="van-box"></div>
    </div>
</template>

<script>
import App from '../App.vue'
export default {
  components: { App },
    data() {
        return {
            
        }
    },
    methods:{
        onClick(name,title){}
    },

}
</script>

<style lang='scss' scoped>
.van-top{
    margin-top: 20px;
}
</style>