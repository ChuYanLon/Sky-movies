<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">
            <router-link to="/home/homepage">首页</router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="search">
            <router-link to="/home/search">搜索</router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="tv-o">
            <router-link to="/home/livebroadcast">直播</router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="user-o">
            <router-link to="/home/my">个人主页</router-link>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        name: "tab",
        data() {
            return {
                active: 0,
            };
        },
    }
</script>

<style scoped>

</style>
