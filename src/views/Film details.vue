<template>
    <div>

    <van-nav-bar
            :title="this.$store.state.FilmDetails.name"
            left-text="返回"
            :right-text="this.$store.state.FilmDetails.type"
            left-arrow
            @click-left="onClickLeft"
    />
     <div class="Filmdetails_img">
         <img :src="this.$store.state.FilmDetails.pic" alt="">
     </div>
     <div class="Filmdetails_collection">
         <span>播放列表</span>
         <SELECT v-model="lines" class="line">
             <option value="通道选择">通道选择</option>
             <option value="0">0</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
         </SELECT>
         <hr class="Filmdetails_hr" size="10px">
         <ul class="clearfix">
            <li v-for="(value,i) in this.$store.state.FilmDetails.arr[0]" :key="i" @click="FilmDetailsbth(value)">
                {{i}}
            </li>
         </ul>

     </div>
    </div>
</template>

<script>
    import http from "../api";
   import {Toast} from "vant"
    export default {
        name: "Film details",
        data(){
            return{
                lines:"2",
                count: 0,
                isLoading: false
            }
        },
        methods: {
            onClickLeft() {
               this.$router.push("/home/homepage")
            },
            FilmDetailsbth(val){
                let url=`https://tool.bitefu.net/video/?url=${val}&type=${this.lines}`
                if (this.lines!="播放通道选择"){
                    window.open(url)
                    this.$store.state.LastPlay.url=url
                }else{
                    Toast.fail('请选择线路！');
                }
            }
        },
      mounted() {
            http({
                url:"api/vatfs/resource_site_collect/getVDetail?vid="+this.$store.state.FilmDetails.vid
            }).then(res=>{
                this.$store.state.FilmDetails.arr=[]
               this.$store.state.FilmDetails.arr.push(res.data.data.playUrl)
            }).catch(err=>{
                console.log(err)
            })
      }
    }
</script>

<style scoped lang="scss">
    .clearfix::after{
        content: "";
        display: block;
        clear: both;
    }
    .Filmdetails_img{
        height: 300px;
        background: black;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .Filmdetails_collection{
        position: relative;
        span{
            display: block;
            width: 100px;
            height: 30px;
            background: black;
            margin-top: 10px;
            margin-left: 10px;
            text-align: center;
            line-height: 30px;
            color: white;
        }
        ul{
            margin-left: 6px;
            margin-top: 10px;
            margin-bottom: 80px;
            li{
                float: left;
                width: 120px;
                height: 30px;
                background: aliceblue;
                text-align: center;
                margin: 0 auto;
                border: 1px solid black;
                box-sizing: border-box;
                line-height: 30px;
            }
        }
     .line{
         width: 100px;
         height: 30px;
         margin-left: 10px;
         margin-top: 10px;
         position: absolute;
         right: 10px;
         top:-11px;
         border: none;
     }
        .Filmdetails_hr{
           background: purple;
            animation: baclcolor_hr 10s linear infinite alternate running;
            margin-top: 3px;
            border-radius: 5px;
        }
    }
    @keyframes baclcolor_hr {
        0%{background: red}
        14%{background: orange}
        28%{background: yellow}
        42%{background: green}
        56%{background: cyan}
        70%{background: blue}
        84%{background: purple}
        100%{background: red}
    }
    @media screen and (max-width:800px) and (min-width: 400px) {
        .Filmdetails_img{
            height: 500px;
            background: black;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .Filmdetails_collection{
            ul{
                li{
                    margin-left: 5.5px;
                }
            }
        }


    }
    @media screen and (max-width:500px) and (min-width: 375px){
        .Filmdetails_img{
            height: 300px;
            background: black;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    @media screen and (max-width:450px) and (min-width:200px){
        .Filmdetails_collection{
            ul{
                li{
                    margin-left: 5.5px;
                }
            }
        }
    }
    @media screen and (max-width:450px) and (min-width:375px){
        .Filmdetails_collection{
            ul{
                margin-left: 15px;
                li{
                    margin-left: 2px;
                }
            }
        }
    }
</style>
