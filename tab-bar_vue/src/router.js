import Vue from 'vue'
import VueRouter from 'vue-router'
//懒加载写入格式
// cost Home = ()=>import('./views/home/Home.vue')
import Home from './views/home/Home.vue'
import Cantory from './views/cantory/Cantory.vue'
import Car from './views/car/Car.vue'
import Profile from './views/profile/Profile.vue'
//1.安装路由
Vue.use(VueRouter)
//2.创建路由对象
//3.到处路由对象
export default new VueRouter({
  mode: 'history',
 
  routes: [
   {
    path:'/',
    redirect:'/home'
   },
   {
     path:'/home',
     component: Home
   },
   {
     path:'/cantory',
     component: Cantory
   },
   {
     path:'/car',
     component: Car
   },
   {
     path:'/profile',
     component: Profile
   }
  ]
})
