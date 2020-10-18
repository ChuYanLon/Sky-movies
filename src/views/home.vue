<template>
    <div>
<!--        展示区-->
         <div class="main">
             <keep-alive>
         <router-view :key="$route.path + $route.query.t"></router-view>
             </keep-alive>
         </div>
<!--    底部tab导航栏    -->
        <tab></tab>
    </div>
</template>

<script>
    import tab from "../components/tab";
    export default {
        name: "home",
        components:{
            tab
        },
        mounted() {
            this.$router.push("/home/homepage")
        }
    }
</script>

<style scoped>

</style>
