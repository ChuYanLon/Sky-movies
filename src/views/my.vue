<template>
    <div class="my_cont">
        <div>
            <div class="my_cont_img">
                <img :src="img" alt="">
            </div>
            <div class="my_cont_user">
                <div>当前用户:{{user[0].ip}}</div>
                <div>使用设备:{{user[0].system}}</div>
                <div>最近播放:     <a href="javascript:;" @click="my_bth()">{{this.$store.state.LastPlay.name}}</a> </div>
                <div>最近登录时间:{{user[0].time}}</div>
            </div>
        </div>
        <div class="my_cont_clear" @click="clear_bth()">清除缓存</div>
    </div>
</template>

<script>
    import http from "../api";
   import {Toast} from "vant"
    export default {
        name: "my",
        data(){
            return{
                img:"",
                user:[]
            }
        },
        mounted() {
            http({
                url:"https://api.uomg.com/api/rand.img2?sort=美女&format=json"
            }).then(res=>{
                this.img=res.data.imgurl

            }).catch(err=>{
                console.log(err)
            })
            http({
                url:"https://api.uomg.com/api/visitor.info?skey=774740085"
            }).then(res=>{

                this.user=[]
                this.user.push(res.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        methods:{
            my_bth(){
                if (this.$store.state.LastPlay.name!="暂无影片播放记录" && this.$store.state.LastPlay.url!=""){
                    let urls=`https://tool.bitefu.net/video/?url=`+this.$store.state.LastPlay.url
                    window.open(urls)
                }else{
                    Toast.fail('暂无影片播放记录');
                }

            }
            ,
            clear_bth(){
                this.$store.state.LastPlay.url=""
                this.$store.state.LastPlay.name=""
                Toast.success('清除成功!');
            }
        }
    }
</script>

<style scoped lang="scss">
.my_cont{
    div{
        .my_cont_img{
            width: 100%;
            height:300px;
            background: black;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .my_cont_user{
            div{
                display: block;
                width:95%;
                height: 50px;
                line-height: 50px;
                background-image: linear-gradient(to right,pink,#0D8FBF);
                border-radius: 10px;
                margin: 0 auto;
                margin-top: 10px;
                color: white;
                font-weight: bold;
                text-indent: 1em;
                overflow: hidden;
                a{
                    color: white;
                }
            }
        }
    }
    ul{
        width: 100%;
        background: purple;
        min-height: 50px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .my_cont_clear{
        width: 100%;
        height: 50px;
        background: #102b6a;
        text-align: center;
        line-height: 50px;
        color: white;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 10px;
    }
}
</style>
