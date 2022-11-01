import VueRouter from "vue-router";
import HomeView from "@/components/HomeView";
export default new VueRouter({
    mode:'history', //해쉬값 제거 방식
    routes: [{
        path: '/',
        redirect: '/en'
    },{
        path:'/en',
        component: HomeView,
    }

    ]
});