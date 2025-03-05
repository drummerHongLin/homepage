
import { createRouter ,createWebHistory} from "vue-router";

export default createRouter({

    history:createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:()=>import('@/pages/HomeContent/index.vue'),
            name:'Home'
        },
        {
            path:'/about',
            component:()=>import('@/pages/AboutContent/index.vue'),
            name:'About'
        },
        {
            path:'/contact',
            component:()=>import('@/pages/ContactContent/index.vue'),
            name:'Contact'
        }
    ]
})