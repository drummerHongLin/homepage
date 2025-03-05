//对于axios函数库进行二次封装?
//你工作的时候是否axios进行二次封装?二次封装的目的是什么那?
//目的:1,利用axios请求、响应拦截器功能
//目的2:请求拦截器,一般可以在请求头中携带公共的参数:token
//目的3:响应拦截器,可以简化服务器返回的数据,处理http网络错误
import {useBaseStore} from '@/store/index.ts';
import axios from 'axios';

//@ts-ignore
import { ElMessage } from 'element-plus';
//利用axios.create方法创建一个axios实例:可以设置基础路径、超时的时间的设置
const request = axios.create({
    baseURL: '/api',//请求的基础路径的设置
    timeout: 5000//超时的时间的设置,超出五秒请求就是失败的
});

//请求拦截器
request.interceptors.request.use((config) => {
    let $userStore = useBaseStore();
    if($userStore.token){
        // 如果登录了自动携带请求头
        config.headers.token = $userStore.token
    }
    return config;
});
//响应拦截器
request.interceptors.response.use((response) => {
    //响应拦截器成功的回调,一般会进行简化数据
    //如果响应状态码不等于200
    if(response.data.message != 200){
        ElMessage({
            type: 'error',
            message: response.data.message
        });
    }

    return response.data;
}, (error) => {
    //处理http网络错误
    ElMessage({
        type: 'error',
        message: error.message
    });
    return Promise.reject(new Error(error.message))
});
//务必对外暴露axios
export default request;


