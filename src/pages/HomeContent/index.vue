<template>
  <div class="home-wrapper">

    <div class="home-content">
        <h3>Hello,It's Me</h3>
        <h1>Call Me Honglin</h1>
        <h3>And I'm a <span class="multiple-text"></span></h3>
        <p>
            Do not forget the lofty aspirations you set during your youth,
            where you were determined to become a top-tier figure in the world.
        </p>
        <div class="social-media">
          <a v-for="(item,index) in classArr" :key="index"
          @click="clickEvent(item)" :style="{'--i':index}"><i class="bx" :class="item" ></i></a>
        </div>
        <a class="btn" href="https://udo-tang.oss-cn-beijing.aliyuncs.com/%E5%94%90%E9%B8%BF%E6%9E%97-%E6%95%B0%E6%8D%AE%E5%BC%80%E5%8F%91.pdf">Download CV</a>
      </div>
      <div class="home-img">
        <img src="@/assets/me.png" alt="" />
    </div>
  </div>
    <SocialMedia v-show="socialShow" :socialType="socialType" @closeMedia="closeMedia"></SocialMedia>
</template>

<script>
import Typed from 'typed.js';
import SocialMedia from './SocialMedia/index.vue';
import {useBaseStore} from '@/store/index.ts';
import {mapActions} from 'pinia'
// 因为Typed需要this属性，所有用选项式
export default {
  data() {
    return {
        typed: '',
        classArr : ['bxl-tiktok','bx-envelope','bxl-google','bxl-linkedin-square'],
        // 控制社交媒体显现
        socialShow:false,
        socialType:"tiktok"
    }
  },
  methods:{
    // 目前只设计了抖音的二维码
    clickEvent(item){
        item = item.split('-')[1];
        if(item=='tiktok'){
            this.socialType = item
            this.socialShow = true
        }
        else{
            window.alert("功能暂未开发，敬请期待！")
        }

    },
    // 接受子组件传递过来的行为
    closeMedia(){
        this.socialShow = false;
    },
    // 调整本地储存的
    ...mapActions(useBaseStore,['changeActive'])

  }
  ,
  components:{SocialMedia}
  ,
  mounted(){
    // 挂载时初始化打字机组件
    this.typed = new Typed(".multiple-text", {
    strings: ['Full-Stack Developer', "Junior Economist", "Sports Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    });
    this.changeActive('Home');
  }
}

</script>

<style lang="scss" scoped>
    .home-wrapper{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .home-content {
        max-width: 600px;
        padding-right: 1rem;
        h3 {
          font-size: 1.6rem;
          font-weight: 700;
          opacity: 0;
          animation: slideBottom 1s ease forwards;
          animation-delay: .7s;
            &:nth-of-type(2) {
              margin-bottom: 1.5rem;
              opacity: 0;
              animation: slideTop 1s ease forwards;
              animation-delay: .7s;
            }
            span {
            color: #b7b2a9;
        }
        }
        h1 {
          font-size: 2.8rem;
          font-weight: 700;
          margin: -3px 0;
          opacity: 0;
          animation: slideRight 1s ease forwards;
          animation-delay: 1s;
        }
        p {
          font-size: 0.8rem;
          opacity: 0;
          animation: slideLeft 1s ease forwards;
          animation-delay: 0.7s;
        }
        .social-media a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: 2px solid #b7b2a9;
          border-radius: 50%;
          color: #b7b2a9;
          font-size: 1rem;
          text-decoration: none;
          margin: 1.5rem 0.75rem 1.5rem 0;
          transition: 0.5s ease;
          opacity: 0;
          animation: slideLeft 1s ease forwards;
          animation-delay: calc(0.2s * var(--i));
          &:hover {
            background: #b7b2a9;
            color: #1f242d;
            box-shadow: 0 0 20px #b7b2a9;
      }
        }
        .btn {
          display: inline-block;
          padding: 0.6rem 1.4rem;
          background: #b7b2a9;
          text-decoration: none;
          border-radius: 2rem;
          box-shadow: 0 0 0.5rem #b7b2a9;
          font-size: 1.8rem;
          color: #1f242d;
          letter-spacing: 1px;
          font-weight: 600;
          transition: 0.5s ease;
          opacity: 0;
          animation: slideTop 1s ease forwards;
          animation-delay: 2s;
          &:hover{
            box-shadow: 0 0 1rem #b7b2a9;
            cursor: pointer;
          }
          &:active{
            background: none;
            color: #b7b2a9;
            border: 2px solid #b7b2a9;
          }
        }


    }
    .home-img img {
    max-width: min(40vw,70vh);
    border-radius: 50%;
    margin-right: -1rem;
    box-shadow: 0 0 20px #b7b2a9;
    opacity: 0;
    animation: zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite;
    animation-delay: 2s, 3s;
    }
</style>
