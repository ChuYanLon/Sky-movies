<template>
   <div class="live_cont">
       <div @click="live_film_bth()">
           <img src="../assets/image/Livelogo/CCTV.jpg" alt="CCTV">
       </div>
       <div @click="live_cctv_bth()">
           <img src="../assets/image/Livelogo/film.jpg" alt="电影直通车">
       </div>
       <div @click="live_SatelliteTV_bth()">
           <img src="../assets/image/Livelogo/SatelliteTV.jpg" alt="卫视">
       </div>
   </div>
</template>

<script>
    import http from "../api";

    export default {
        name: "live broadcast",
        mounted() {
            http({
                url:"plugin/eyunzhu_vatfs_api/api/getLiveSource"
            }).then(res=>{
                this.$store.state.liveBroadcast.arr=[]
                this.$store.state.liveBroadcast.arr.push(res.data.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        methods:{
            live_cctv_bth(){
                this.$store.state.liveBroadcast.details.arr=[]
                this.$store.state.liveBroadcast.details.arr.push(this.$store.state.liveBroadcast.arr[0][0])
                this.$router.push("/home/Live broadcast details")
            },
            live_film_bth(){
                this.$store.state.liveBroadcast.details.arr=[]
                this.$store.state.liveBroadcast.details.arr.push(this.$store.state.liveBroadcast.arr[0][1])
                this.$router.push("/home/Live broadcast details")
            },
            live_SatelliteTV_bth(){
                this.$store.state.liveBroadcast.details.arr=[]
                this.$store.state.liveBroadcast.details.arr.push(this.$store.state.liveBroadcast.arr[0][2])
                this.$router.push("/home/Live broadcast details")
            },
            onClickLeft() {
                this.$router.push("/home/homepage")
            },
        }
    }
</script>

<style scoped lang="scss">
.live_cont{
    div{
        width: 95%;
        height: 200px;
        position: relative;
        margin: 0 auto;
        margin-top: 50px;
        border-radius: 15px;
        box-shadow: 0px 0px 15px silver;

        i{
           position: absolute;
            right: 0;
            top: 28px;
        }
        img{
            width: 100%;
            border-radius: 15px;
            height: 100%;
        }
    }
    &:nth-last-child(1){
        margin-bottom:80px;
    }
}
</style>
