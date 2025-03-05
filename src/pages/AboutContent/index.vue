<template>
    <div class="about">
        <div class="about-header">
            <img src="@/assets/me.png" alt="" />
            <div class="name-info">
                <h3>Honglin</h3>
                <p>Idealist</p>
            </div>
            
        </div>
        <div class="content-wrapper">
            <div class="time-liner" @wheel="hanleScroll" @touchmove="hanleScroll">
        <el-timeline>
            <el-timeline-item
            v-for="(activity, index) in activities"
            placement="top"
            :key="index"
            :id="index"
            :color="activity.color"
            size="large"
            :timestamp="activity.timestamp"
            :style="{'--i':index}"
            :class="{active:activeTime==index}"
            @click="changeActive(index)"
            >
            <div class="time-info">{{ activity.content }}</div>
            </el-timeline-item>
        </el-timeline>
        </div>
        <div class="about-img">
            <el-image
            :src="activeUrl"
            style="width: 100%;height: 100%; border-radius: 5%;"
            fit="cover"
            ></el-image>
        </div>

        </div>

    </div>
    
</template>

<script setup lang="ts">
import { ref ,onMounted} from 'vue';
const activities = [
  {
    content: 'Hello World! ',
    timestamp: '1996-03-23',
    color:'',
    url:'born.jpg'
  },
  {
    content: 'This period of time can be divided into two stages. At the first stage, I was addicted to electronic games and hung out with street thugs all day long. The street life ended up with being bullied by others, and It turned out that the only thing I could do was studying hard. ',
    size: 'large',
    timestamp: '2008-06 ~ 2011-06',
    color:'',
    url:'childhood.jpg'
  },
  
  {
    content: 'It was greatly astonishing that I was admitted into prominent high school in our county town, even for me. Joining a gang of city kids, being threatened with expulsion and falling in love with girls, these were joyful and precious memories. For last few months at high school, working hard had became common sense among students, but I really did not know what I was studying for. ',
    timestamp: '2011-09 ~ 2014-06',
    color:'',
    url:'highschool.jpg'
  },
  
  {
    content: "The goddess of luck has favored me once again as I was admitted into one of the most famouse universities in China, Xi'an Jiaotong University. Xi'an is a big city, hundreds times bigger than where I was born. Though I was really poor and from a poor family, I was fond of trying explorative things: mountain climbing, cycling and photography. These habits made me self-confidenct in font of whomerver, while prevent me from knowing how navive I was. ",
    timestamp: '2014-09 ~ 2018-06',
    color:'',
    url:'university.jpg'
  },
  
  {
    content: 'Maybe, getting 1st price in a national competition was the last luckiness I could ever gain. The consequences of overconfidence flocked in succession. failing in the postgraduate exam, failing in finding a good job , failing in giving a good concern to my girlfriend, failing... failing... failing... Finally I made my mind to quit my job and devoted entirely into study, but again failed. ',
    timestamp: '2018-06 ~ 2022-10',
    color:'',
    url:'guangzhou.jpg'
  },
  
  {
    content: 'All of a sudden, I realised life is not always so smooth that we can get what we want easily and it is luckiness that make me admitted into high school and into good university, rather than my effort. I have lost many chances to live a better life, and it is late to make change. Nevertheless, It is far from the definitive moment to give up. As long as my life is going on, my striving is going on. ',
    timestamp: 'to be continued...',
    color:'',
    url:'now.jpg'
  },
  

  
  
]
// 设置动效时间点
let activeTime = ref<number>(activities.length-1);
// 是否点击的标记，防止点击触发滚动的监听
let isClick = ref<boolean>(false);
// 当前生效的图片url
let activeUrl = ref<string>('');
// 设置生效图片更新事件
const changeImg = (url:string)=>{
    let m = new URL(`/src/assets/${url}`,import.meta.url);
    activeUrl.value = m.href;
}


// 设置滚动监听事件
const hanleScroll = ()=>{

    if(!isElementScrollable()){return}
    // 找到包裹容器
    let wrapper = document.querySelector('.time-liner')
    // 找到滚动子元素
    let item = document.querySelectorAll('.el-timeline-item');
    // 初始化个最大值
    let min_dis = wrapper?.offsetHeight;
    let min_index = activities.length-1;
    // 找到中间位置
    const mid = wrapper?.offsetTop + wrapper?.offsetHeight/2 -50 // 调高20
    // 遍历判断哪个在中间位置
    item.forEach(element => {
        // 距离中心的绝对距离
        let _min = Math.abs((element.offsetTop - wrapper.scrollTop)-mid);
        if(_min<min_dis){
            min_index = parseInt(element.id);
            min_dis = _min
        }
    });
    // 将值赋值给响应式
    activeTime.value = min_index
    // 改变图片
    changeImg(activities[min_index].url);
}
// 判断是否可滚动

function isElementScrollable() {
  let element = document.querySelector('.time-liner');
  return element.scrollHeight > element?.clientHeight;
}

// 点击后聚焦到对应的时间点

const changeActive = async (index:number)=>{
    activeTime.value = index;
    isClick.value = true;
    document.getElementById(`${index}`)?.scrollIntoView({behavior:'smooth',block:'center'});
    changeImg(activities[index].url);
}


// 挂载后启动监听
onMounted(()=>{
    changeImg(activities[activeTime.value].url);
})


</script>

<style scoped lang="scss">
    .about{
        .about-header{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0.8rem 0 ;
            img{
                border-radius: 50%;
                width: 3.2rem;
                animation: slideBottom 1s ease forwards;
                opacity: 0;
            }
            .name-info {
                padding-left: 1rem;
                animation: slideTop 1s ease forwards;
                opacity: 0;
                h3{
                    font-size: 1.6rem;
                    font-weight: 700;
                    line-height: 2rem;
                }
                p{  
                    font-size: 0.5rem;
                    color:  #b7b2a9;
                    margin-top: -0.2rem;
                }
            }
            
        }

        .content-wrapper{

            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            $time-width : calc(100vh - 10.25rem);
            .time-liner{
                padding-left: 1.6rem;
                padding-top: 0.6rem;
                max-height: $time-width;
                overflow-y: scroll;
                &::-webkit-scrollbar {display:none}
                /* 默认对齐底部 */
                display: flex;
                flex-flow: column-reverse;
                align-items: baseline;
                .el-timeline-item{
                    opacity: 0;
                    animation: slideBottom 1s ease forwards ;
                    animation-delay: calc(0.2s * (var(--i) + 1));
                    padding-bottom: 1rem;
                    cursor: pointer;
                    ::v-deep(.is-top){
                        margin-bottom: 0.4rem;
                        padding-top: 0.2rem;
                        font-size: 0.65rem;
                    }
                    &.active{
                        ::v-deep(.el-timeline-item__node ){
                            box-shadow: 0 0 20px #b7b2a9;
                            animation: blink 2s linear infinite;;
                            animation-delay: 1s;
                        }
                        .time-info{color: #b7b2a9;}
                    }

                }
                .time-info{
                    max-width: 50vw;
                    font-size: 1rem;
                    color: white;

                }
                
            }
            .about-img{
                width: 20vw;
                height: 20vw;
                opacity: 0;
                animation: zoomIn 1s ease forwards;
                animation-delay: 2s; 
                
            }
            }

    }
</style>