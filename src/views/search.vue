<template>
    <div>
        <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                input-align="center"
        @blur="search_bth"/>
        <div class="search_main">
            <span style="margin-left: 100px;font-weight: bold;color: cornflowerblue">{{this.$store.state.MovieSearchList[0].msg}}</span>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[1].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[1].data" :key="i" @click="bth(i)">
                    {{i}}--{{value}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[2].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[2].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[3].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[3].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[4].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[4].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[5].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[5].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[6].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[6].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[7].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[7].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[8].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[8].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[9].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[9].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[10].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[10].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[11].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[11].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[12].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[12].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[13].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[13].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[14].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[14].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[15].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[15].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[16].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[16].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[17].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[17].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[18].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[18].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[19].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[19].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[20].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[20].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[21].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[21].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[22].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[22].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[23].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[23].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[24].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[24].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[25].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[25].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[26].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[26].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[27].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[27].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[28].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[28].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[29].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[29].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>

            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[30].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[30].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[31].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[31].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[32].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[32].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
            <div>
                <span>{{this.$store.state.MovieSearchList[0].data[33].name}}</span>
                <div v-for="(value,i) in this.$store.state.MovieSearchList[0].data[33].data" :key="i" @click="bth(i)">
                    {{i}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import http from "../api";
   import {Toast} from "vant"
    export default {
        name: "search",
        data(){
            return{
                value:""
            }
        },
        mounted() {
            http({
                url:"api/vatfs/baidu_top"
            }).then(res=>{
                this.$store.state.MovieSearchList.push(res.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        methods:{
            bth(val){
                http({
                    url:`api/vatfs/resource_site_collect/search?kw=${val}&per_page=100&page=1`
                }).then(res=>{
                    this.$store.state.searchs.search_arr=[]
                        this.$store.state.searchs.search_arr.push(res.data.data.data)
                     this.$router.push("/home/details")
                    // console.log(this.$store.state.searchs.search_arr[0])
                    this.$store.state.searchs.src=val
                }).catch(err=>{
                    console.log(err)
                })
            },
            search_bth(){
                if (this.value!=""){
                     http({
                         url:`api/vatfs/resource_site_collect/search?kw=${this.value}&per_page=100&page=1`
                     }).then(res=>{
                         if (res.data.data.total!=0){
                             this.$store.state.searchs.search_arr=[]
                             this.$store.state.searchs.search_arr.push(res.data.data.data)
                             this.$store.state.searchs.src=this.value
                             this.$router.push("/home/details")
                         }else{
                             this.value=""
                             Toast.fail('暂无影片资源');
                         }
                     }).catch(err=>{
                         console.log(err)
                     })
                }else{
                    Toast.fail('请输入要观看的影片');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.search_main{
    div{
        span{
            text-align: center;
            font-family: 华文隶书;
            font-size: 30px;
            line-height: 50px;
        }
        div{
            text-align: center;
            font-size: 16px;
            height:40px;
            line-height: 40px;
            &:nth-of-type(2n){
                background: aliceblue;
            }
        }

    }
}
</style>
