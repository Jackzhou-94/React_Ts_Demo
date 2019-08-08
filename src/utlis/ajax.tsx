import Axios from 'axios'

/***
 * 
 * 配置请求
 * 
 */
let ajax=Axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

ajax.interceptors.request.use=(config:any)=>{
    return  config
}

export default ajax