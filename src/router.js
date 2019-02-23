//导入vue包
import Vue from 'vue'
//导入vue-router包
import VueRouter from 'vue-router'

import iView from 'iview';
import 'iview/dist/styles/iview.css'; 
Vue.use(iView);

import home from './components/homeContainer.vue'
import member from './components/memberContainer.vue'
import search from './components/searchContainer.vue'
import shopcar from './components/shopcarContainer.vue'

//创建路由
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/search',component:search},
        {path:'/shopcar',component:shopcar}
    ],
    linkActiveClass:'mui-active'
})

export default router