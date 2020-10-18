<template>
    <div class="van_time">
        <van-nav-bar
                :title="this.$store.state.liveBroadcast.details.arr[0].name"
                left-text="返回"
                :right-text="this.$store.state.FilmDetails.type"
                left-arrow
                @click-left="onClickLeft"


        />
        <select v-model="live_line" class="select_line">
            <option>选择线路</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
    <van-grid :column-num="3" style="margin-bottom: 80px">
        <van-grid-item v-for="(value,i) in this.$store.state.liveBroadcast.details.arr[0].data" :key="i" icon="photo-o"
                       :text="value.name" @click="livebraddeta_bth(value)"/>
    </van-grid>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "Live broadcast details",
        data(){
            return{
                live_line:"2"
            }
        },
        methods:{
            livebraddeta_bth(val){
                if (this.live_line!="选择线路"){
                    let url=`https://tool.bitefu.net/video/?url=${val.url}&type=2`
                    window.open(url)
                }else{
                    Toast.fail('请选择播放线路');
                }

            },
            onClickLeft(){
                this.$router.push("/home/livebroadcast")
            },
        }
    }
</script>

<style scoped lang="scss">
    .van_time{
        position: relative;
        .select_line{
            position: absolute;
            right: 10px;
            top: 10px;
            z-index: 50;
            height: 30px;
            border: none;
        }
    }

</style>
