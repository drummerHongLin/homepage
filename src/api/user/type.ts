import {ResponseData} from "@/api/type.ts";

export interface user {
    id:number,
    userName:string,
    password:string,
    imgUrl:string
}

export interface loginData {
    userName:string,
    password:string
}

export interface userResponse extends ResponseData{
    data:user
}

export interface loginResponse extends ResponseData{
    data:{
        token:string
    }
}
