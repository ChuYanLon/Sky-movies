<template>
    <div>

        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <swipe></swipe>
            <notice-bar></notice-bar>
            <recommend></recommend>
        </van-pull-refresh>
    </div>
</template>

<script>
    import swipe from "../components/swipe";
    import noticeBar from "../components/noticeBar";
    import recommend from "../components/recommend";
    import {Toast} from "vant";
    import http from "../api";
    export default {
        name: "home page",
        components:{
            swipe,
            noticeBar,
            recommend
        },
        data(){
            return{
                line:"1",
                num:20,
                nums:10,
                isLoading: false
            }
        },
        methods: {
            onRefresh() {
                this.num+=5;
                this.nums+=5;
                if (this.nums>20){
                    this.nums=10
                }
                if (this.num>300){
                    this.num=100
                }
                setTimeout(() => {
                    http({
                        url:`api/vatfs/resource_site_collect/search?per_page=${this.num}&page=10`
                    }).then(res=>{
                        this.$store.state.recommend=[]
                        for (let i=0;i<res.data.data.data.length;i++){
                            this.$store.state.recommend.push(res.data.data.data[i])
                        }
                    }).catch(err=>{
                        console.log(err)
                    })
                    http({
                        url:`api/vatfs/resource_site_collect/search?per_page=${this.nums}&page=10`
                    }).then(res=>{
                        this.$store.state.swipearr=[]
                        for (let i=0;i<res.data.data.data.length;i++){
                            this.$store.state.swipearr.push(res.data.data.data[i])
                        }
                    }).catch(err=>{
                        console.log(err)
                    })
                    Toast('刷新成功');
                    this.isLoading = false;
                }, 1000);

                },
            }
    }
</script>

<style scoped>

</style>
