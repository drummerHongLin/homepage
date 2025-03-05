<template>

    <vue-danmaku  class="弹幕"
    ref="danmakuRef"
    v-model:danmus="danmus"
    style="height:100%; width:100%; color: aliceblue; "
    useSlot
    randomChannel
    :top="10"
    :right="20"
    :speeds="50"
    isSuspend
    >
    <template v-slot:dm="{ index, danmu }">
      <div style="display: flex; justify-content: center">
      <el-tooltip
          class="box-item"
          effect="dark"
          :content="danmu.name"
          placement="top"
      >
        <img
            :src="danmu.avatar" style="border-radius: 50%;width: 2rem; height: 2rem"/>
      </el-tooltip>
      <div style="line-height: 2rem; margin-left: 0.5rem;"><span >{{danmu.text}}</span></div>
    </div>

   </template>

</vue-danmaku>

</template>

<script setup lang="ts">
import { ref ,onMounted} from 'vue';
import vueDanmaku from 'vue3-danmaku';
import {reqComments, reqCreateComment} from "@/api/comment";
import {useBaseStore} from '@/store/index.ts';
const danmakuRef = ref(null);
const danmus = ref([])
let $baseStore = useBaseStore();
// 包地址 https://github.com/hellodigua/vue-danmaku/tree/vue3

const getComments = async ()=>{
  console.log("运行了获取评论数据")
  // 获取历史评论
  const commentRes = await reqComments();
  // 将评论数据加载进弹幕
  for (const comment of commentRes.data) {
      danmus.value.push({
        avatar:comment.user.imgUrl,
        name:comment.user.userName,
        text:comment.comment
      })
  }

}

const addComments = (comment:string) => {
  danmakuRef.value.add({
  avatar:$baseStore.userInfo.data.imgUrl,
    name:$baseStore.userInfo.data.userName,
    text:comment,
  });
  // 向服务端传入信息存储
  reqCreateComment(comment);
}
defineExpose({addComments})

onMounted(()=>{
  // 获取历史所有的评论
  getComments();
  danmakuRef.value.play();

});
</script>

<style lang="scss" scoped>

</style>
