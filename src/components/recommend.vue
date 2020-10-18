<template>
   <div class="recommend_cont">
      <h3>推荐影片>></h3>
       <div v-for="(value,i) in this.$store.state.recommend" :key="i" class="clearfixd">
           <img :src="value.pic" :alt="value.name"
           @click="recommendimg(value)"
           >
       </div>
   </div>
</template>

<script>
    import http from "../api";
    export default {
        name: "recommend",
        mounted() {
            http({
                url:"api/vatfs/resource_site_collect/search?per_page=30&page=10"
            }).then(res=>{
                this.$store.state.recommend=[]
                for (let i=0;i<res.data.data.data.length;i++){
                    this.$store.state.recommend.push(res.data.data.data[i])
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        methods:{
            recommendimg(val){
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

<style scoped lang="scss">
.recommend_cont{
    div {
        img {
            width: 150px;
            height: 200px;
            float: left;
            margin-left: 10.5%;
            margin-top: 10px;
            border-radius: 12px;
            margin-bottom: 50px;

        }
    }
    h3{
        padding: 5px;
        margin-left: 1%;
        margin-top: 5px;
        margin-bottom: -4px;
        color: red;
    }
}
@media screen and (max-width:300px) and (min-width: 400px){
    .recommend_cont{
        div{
            img{
                width: 150px;
                height: 200px;
                float: left;
                margin-left:7.5%;
                margin-top: 10px;
                border-radius: 12px;
                margin-bottom: 50px;
            }
        }
        h3{
            padding: 5px;
            margin-left: 1%;
            margin-top: 5px;
            margin-bottom: -4px;
            color: red;
        }
    }
}
@media screen and (max-width:400px) and (min-width: 375px){
    .recommend_cont{
        div{
            img{
                width: 160px;
                height: 200px;
                float: left;
                margin-left:6%;
                margin-top: 10px;
                border-radius: 12px;
                margin-bottom: 50px;
            }
        }
        h3{
            padding: 5px;
            margin-left: 1%;
            margin-top: 5px;
            margin-bottom: -4px;
            color: red;
        }
    }
}

</style>
