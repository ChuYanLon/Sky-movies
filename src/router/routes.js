import home from "../views/home";
import homepage from "../views/home page"
const routes = [
    {
        path: "/",
        component: home,
        meta: {
            title:"首页"
        }
    },
    {
        path:"/home",
        component:home,
        children:[
            {
                path:"homepage",
                component:homepage,
                meta:{
                    title:"首页推荐"
                }
            },
            {
                path:"search",
                component:()=>import("../views/search"),
                meta:{
                    title:"搜索"
                }
            },
            {
                path:"livebroadcast",
                component:()=>import("../views/live broadcast"),
                meta:{
                    title:"直播"
                }
            },
            {
                path:"my",
                component:()=>import("../views/my"),
                meta:{
                    title:"个人主页"
                }
            },
            {
                path:"FilmDetails",
                component: ()=>import("../views/Film details"),
                meta: {
                    title: "影片详情"
                }
            },
            {
                path:"details",
                component: ()=>import("../views/details"),
                meta: {
                    title: "搜索详情"
                }
            },
            {
                path:"Live broadcast details",
                component:()=>import("../views/Live broadcast details"),
                meta: {
                    title: "直播详情"
                }
            }
        ]
    }

]

export default routes
