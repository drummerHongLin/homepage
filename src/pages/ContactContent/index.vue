<template>
    <div class="contact">
    <div class="comment">
        <Barrage ref="barrageRef"></Barrage>
    </div>
    <div class="comment-input">
        <div class="img-wrapper">
            <img class='avatar' :src="baseStore.isLogin?baseStore.userInfo.data.imgUrl:baseUrl"/>
        </div>
        <div class="input-wrapper">
            <input class="input-tool" type="text" :placeholder="msg" :disabled="!baseStore.isLogin" v-model="msg"/>
        </div>
        <div class="icon-wrapepr">
            <el-button type="warning" :icon="Avatar" style="height: 100%; width: 4rem;" @click="login" v-if="!baseStore.isLogin">请登录</el-button>
            <el-button :icon="Position" style="height: 100%; width: 4rem;" color="#b7b2a9" v-else @click="send">发送</el-button>
        </div>
    </div>
    </div>

</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {useBaseStore} from '@/store/index.ts';
import {Avatar, Position} from '@element-plus/icons-vue';
import Barrage from './barrage/index.vue';

// 弹幕相关的信息
let msg = ref<string>("你好，大帅哥！")
const baseUrl = "https://udo-tang.oss-cn-beijing.aliyuncs.com/logo.png"
let barrageRef = ref<any>();
// 输入框相关的信息
const baseStore = useBaseStore();

const login = ()=>{
    // 设置弹窗
  baseStore.loginShow = true
}
// 发送弹幕
const send = ()=>{
  barrageRef.value.addComments(msg.value);
}


</script>

<style scoped lang="scss">
    .contact{
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-between;
        $time-width : calc(100vh - 6rem);
            height: $time-width;
        .comment{
            width: 100%;
            flex: 1;
        }
        .comment-input{
            animation: slideTop 1s ease forwards;

            width:80%;

            margin: 0.25rem 0;
            display: flex;
            box-sizing: border-box;

            .img-wrapper{
                height: 2rem;

                .avatar{
                    box-shadow:0 0 0.25rem #b7b2a9;
                    border-radius: 0.25rem;
                    height: 100%;
                };
            }
            .input-wrapper{
                width: 100%;

                .input-tool{
                    border-radius: 0.25rem;
                    width: 100%;
                    outline-style: none ;
                    border:1px solid #b7b2a9;
                    padding: 0.5rem 0;
                    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 0.25rem #b7b2a9;;
                }
            }
        }
    }
</style>
