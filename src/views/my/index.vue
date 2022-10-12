<template>
  <div class="home">
        <div class="header">
            <div style="flex:1">
                <van-image
                round
                width="10rem"
                height="10rem"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
            </div>
            <div  style="flex:1;text-align: center;">某某观察员</div>
        </div>
        <van-cell-group style="margin-top:6rem">
            <van-cell title="施工资料查询" icon="notes-o" is-link />
            <van-cell title="安全监督事项统计" icon="chart-trending-o" is-link />
            <van-cell title="紧急联络人员表" icon="phone-circle-o" is-link />
            <van-cell title="使用帮助" icon="label-o" is-link />
        </van-cell-group>
        <van-button style="margin-top: 10rem;" round  size="large" type="danger">退出登录</van-button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home{
    .header{
        padding: 40px 80px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 10px 0 #303030;
    }
}
</style>