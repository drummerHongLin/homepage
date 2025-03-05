<template>
    <div class="social-media" @click="closeSocial">
        <img id='social' src="@/assets/tiktok.jpg">
    </div>
</template>

<script setup lang="ts">
// 接受父组件传参
let props = defineProps(['socialType']);
// 设置回调事件
let $emit = defineEmits(["closeMedia"])



// 点击当前关闭
const closeSocial = ()=>{
    $emit('closeMedia');
}
</script>

<style scoped lang="scss">
$top:calc((100vh - 20vw)/2);
.social-media {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.9;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 20vw;
        box-shadow: 0 0 1rem #b7b2a9;
        border-radius: 5%;
        opacity: 1;
        animation: zoomIn 1s ease forwards
    }
}


</style>