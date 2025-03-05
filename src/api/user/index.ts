import request from "@/utils/request";
import {loginData, loginResponse, userResponse} from "@/api/user/type.ts";

enum api  {
    refresh_url="/user/refresh",
    login_url="/user/login"
}

// 刷新用户信息
export const reqUserInfo = ()=>request.get<any,userResponse>(api.refresh_url);

export const reqLogin = (data:loginData) => request.post<any,loginResponse>(api.login_url,data)
