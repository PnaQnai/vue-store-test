//导入vue包
import Vue from 'vue'

//导入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入路由包
import router from './router.js'


//导入路由组件
import app from './app.vue'


//导入固定头部组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//导入mui插件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'




//创建vm实例
var vm = new Vue({
    el:'#app',
    render:ap=>ap(app),
    router
})