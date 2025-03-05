import {user} from "@/api/user/type.ts";
import {ResponseData} from "@/api/type.ts";

export interface comment {
    id:string,
    user:user,
    comment:string,
    createdTime:string
}


export type comments = comment[]

export interface commentResponse extends ResponseData {
    data:comments
}

export interface createResponse extends ResponseData{
    data: number
}
