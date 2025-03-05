import request from "@/utils/request.ts";
import {commentResponse, createResponse} from "@/api/comment/type.ts";

enum api {
    comments_url = '/comment/getAll',
    create_url = '/comment/create'
}

// 获取所有评论数据
export const reqComments = () => request.get<any,commentResponse>(api.comments_url);

// 创建新评论，因为必须登陆才能发送，所有还用传评论内容就行了

export const reqCreateComment = (data:string) => request.post<any,createResponse>(api.create_url,data);
