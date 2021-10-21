import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Games from '../views/Game/Games.vue'
import GameDetail from "@/views/Game/GameDetail";
import Anime from "@/views/Player/Anime";
import Bangumi from "@/views/Player/Bangumi";
import Video from "@/views/Player/Video";
import Search from "@/views/Search/Search";
import UserHome from "@/views/User/UserHome"
import Error404 from "@/views/Error/Error404";
import Upload from "@/views/User/Upload";
import Login from "@/views/User/Login";
import Mmd from "@/views/MikuMikuDance/Mmd";
import MmdDetail from '@/views/MikuMikuDance/Detail'
import Register from "@/views/User/Register";

// 阻止同路由跳转报错
const routerRePush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerRePush.call(this, location).catch(err => err)
};


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mmd',
    name: 'Mmd',
    component: Mmd
  },
  {
    path: '/mmd/detail:id',
    name: 'MmdDetail',
    component: MmdDetail
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/games/detail:id',
    name: 'GameDetail',
    component: GameDetail
  },
  {
    path: '/anime',
    name: 'Anime',
    component: Anime
  },
  {
    path: '/bangumi/detail/:id',
    name: 'Bangumi',
    component: Bangumi
  },
  {
    path: '/bangumi/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/search/:value',
    name: 'Search',
    component: Search
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/:userId',
    name: 'UserHome',
    component: UserHome
  },
  {
    path: '/*',
    name: 'error404',
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
