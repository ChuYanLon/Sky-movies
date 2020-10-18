
import axios from "axios"

export default function http(config) {
    let http=axios.create({
        timeout:10000,
        baseURL:"https://api.eyunzhu.com/"
    })
    // http.interceptors.request.use(res=>{
    //     return res.data
    // })
    return http(config)
}
