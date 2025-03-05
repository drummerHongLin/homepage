
<template>
   <header class="header">
      <a href="#" class="logo">Protfolio.</a>

      <nav class="navbar">
        <a v-for="(item,index) in items" :key="index" class="item" :class="{active:baseStore.activeTag==item}"
         @click="clickEvent(item)" :style="{'--i':index}">{{ item }}</a>
      </nav>
    </header>
</template>


<script setup lang="ts">
import {ref,onUnmounted,onMounted} from 'vue';
import { useRouter} from 'vue-router';
import {useBaseStore} from '@/store/index.ts';

const $router = useRouter();
const baseStore = useBaseStore();





let items = ref<Array<string>>(
    ['Home','About','Ai-me','Portfolio','Contact']
)


const clickEvent = (item:string)=>{
    baseStore.changeActive(item);
    $router.push({path:`/${item.toLowerCase()}`});
    
}
// 不在顶端

const scrollHandler = () =>{
  if (window.scrollY >20 ) {
    document.querySelector('.header').classList.add('untop')
  } else {
    document.querySelector('.header').classList.remove('untop')
  }
}

// 增加监听器
onMounted(
  ()=>{
    window.addEventListener('scroll', scrollHandler);
  }
)

// 在退出时消除本地内容
onUnmounted(
  ()=>{
    baseStore.clear();
    // 清楚监听事件
    window.removeEventListener('scroll', scrollHandler);
  }
)


</script>

<style scoped lang="scss">

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 10%;
    background: transparent;
    //没在顶端的情况
    &.untop{
      background-color:#1f242d }
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    @media screen and (max-width: 1320px) {
      padding: 1rem 8%;
    }
    @media screen and (max-width:900px) {
        padding: 1rem 5%;
    }
      .logo {
      font-size: 1.25rem;
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      cursor: default;
      opacity: 0;
      animation: slideRight 1s ease forwards;
      }
      .navbar a {
      display: inline-block;
      font-size: 0.9rem;
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      margin-left: 1.75rem;
      opacity: 0;
      transition: 0.3s;
      animation: slideTop 1s ease forwards;
      animation-delay: calc(.2s * var(--i));
      &:hover{ cursor: pointer;color: #b7b2a9;}
      &.active{
        color: #b7b2a9;
      }
      }
}

</style>
