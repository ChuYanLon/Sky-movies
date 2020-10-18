<template>
    <div class="details_cont clearfixs">
        <van-nav-bar
                :title="this.$store.state.searchs.src"
                left-text="返回"

                left-arrow
                @click-left="onClickLeft"
        />
        <div v-for="(value,i) in this.$store.state.searchs.search_arr[0]" :key="i" class="details_main">
            <img :src="value.pic" alt="" @click="details_bth(value)">
            <p>{{value.name}}</p>
            <span>{{value.label}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "details",
        data(){
            return{
                isLoading: false
            }
        },
        methods:{
            onClickLeft() {
                this.$router.push("/home/search")
            },
            details_bth(val){
                this.$store.state.FilmDetails.label=val.label
                this.$store.state.FilmDetails.name=val.name
                this.$store.state.FilmDetails.pic=val.pic
                this.$store.state.FilmDetails.type=val.type
                this.$store.state.FilmDetails.vid=val.vid
                this.$store.state.LastPlay.img=val.pic
                this.$store.state.LastPlay.label=val.label
                this.$store.state.LastPlay.name=val.name
                this.$router.push("/home/FilmDetails")
            }
        }
    }
</script>

<style scoped lang="scss">
.details_cont{
    /*animation: backgcolor 10s linear infinite alternate running;*/
    .details_main{
        width: 170px;
        height: 300px;
        background: cornflowerblue;
        position: relative;
        overflow: hidden;
        float: left;
        margin-top: 10px;
        margin-left: 20px;
        background: url("../assets/image/02.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        &:nth-last-child(1){
            margin-bottom: 70px;
        }
       img{
           width: 100%;
           height: 100%;
       }
        p,span{
            position: absolute;
        }
        p{
            color: aliceblue;
            left: 0;
            bottom: 0;
            height: 20px;
            width: 100%;
            background: darkgray;
            text-align: center;
            line-height: 20px;
            padding: 5px;
        }
        span{
            top: 10px;
            color: aliceblue;
            width:80px;
            height: 25px;
            background: red;
            transform: rotate(50deg);
            right: -20px;
            text-align: center;
            font-size: 12px;
            line-height: 25px;
        }
    }
}
    @keyframes backgcolor {
        0%{background: red}
        14%{background: orange}
        28%{background: yellow}
        42%{background: green}
        56%{background: cyan}
        70%{background: blue}
        84%{background: purple}
        100%{background: red}
    }
@media screen and (max-width:500px) and (min-width: 375px){
        .details_main {
           width: 300px;
        }
}
@media screen and (max-width:450px) and (min-width:400px){
    .details_main {
        width: 300px;
    }
}
    .clearfixs:after{
        content: "";
        display: block;
        clear: both;
    }














</style>
