<template>
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(val, index) in this.$store.state.swipearr" :key="index">
            <img :src="val.pic" :alt="val.name" @click="swipeimg(val)">
        </van-swipe-item>
    </van-swipe>
</template>

<script>
  import http from "../api";
    export default {
        name: "swipe",
        mounted() {
            http({
                url:"api/vatfs/resource_site_collect/search?per_page=10&page=1"
            }).then(res=>{
                this.$store.state.swipearr=[]
                for (let i=0;i<res.data.data.data.length;i++){
                    this.$store.state.swipearr.push(res.data.data.data[i])
                }

            }).catch(err=>{
                console.log(err)
            })
        },
        methods:{
            swipeimg(val){
                this.$store.state.FilmDetails.label=val.label
                this.$store.state.FilmDetails.name=val.name
                this.$store.state.FilmDetails.pic=val.pic
                this.$store.state.FilmDetails.type=val.type
                this.$store.state.FilmDetails.vid=val.vid
                this.$store.state.LastPlay.img=val.pic
                this.$store.state.LastPlay.label=val.label
                this.$store.state.LastPlay.name=val.name
                this.$router.push({
                    path:"/home/FilmDetails",
                    query:{
                        t:Date.now(),
                    }
                })
            }
        }
    }
</script>

<style scoped>
    img{
        height:560px;
        width: 100%;
    }
    /*ipad*/
    @media screen and (max-width:800px) and (min-width: 400px) {
        img{
            height:560px;
            width: 100%;
        }
    }
    /*苹果6/7/8/x/xr*/
    @media screen and (max-width:500px) and (min-width: 375px){
        img{
            height:260px;
            width: 100%;
        }
    }












</style>
