import { defineStore } from 'pinia';
import {reqLogin, reqUserInfo} from "@/api/user";
import {loginData, loginResponse, userResponse} from "@/api/user/type.ts";
export const useBaseStore = defineStore('base', {
    state: () => {
      return {
            activeTag: localStorage.getItem('activeTag') || 'Home',
            token:localStorage.getItem('token')||'' ,
            isLogin:false,
            userInfo:{} as userResponse,
            loginShow:false //控制登陆组件显示
       }
    },
    // 也可以定义为
    // state: () => ({ count: 0 })
    actions: {
      changeActive(target:string){
        localStorage.setItem('activeTag',target);
        this.activeTag = target;
      },
      clear(){
        // 保留token，token的时效由后端控制
        localStorage.remove('activeTag');
      },
      async login(data:loginData){
        //获取token信息
          let loginInfo:loginResponse = await reqLogin(data);
          this.token = loginInfo.data.token;
        //token存到本地持久化
          localStorage.setItem("token",this.token);
        //刷新获得用户信息
        //token信息会在每次请求前增加
          this.userInfo = await  reqUserInfo();
        //如果用户信息刷新成功，那么登陆状态改变
          if(this.userInfo.code==200){
              this.isLogin = true;
              this.loginShow = false;
          }


      },
        async refresh(){

            this.userInfo = await  reqUserInfo();
            //如果用户信息刷新成功，那么登陆状态改变
            //如果刷新失败，那么清空token
            if(this.userInfo.code==200){
                this.isLogin = true;
                this.loginShow = false;
            }
            else{
                localStorage.remove("token")
            }
        }
    },
  })
