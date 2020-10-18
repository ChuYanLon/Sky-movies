import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    swipearr:[],
    recommend:[],
    FilmDetails:{
      is:false,
      label:"",
      name:"",
      pic:"",
      type:"",
      vid:"",
      arr:[],

    },
    MovieSearchList:[],
    searchs:{
      search_arr:[],
      src:""
    },
    liveBroadcast:{
      arr:[],
      details:{
        arr:[]
      }
    },
    LastPlay:{
      url:"",
      img:"",
      name:"暂无影片播放记录",
      label:""
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
