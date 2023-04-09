import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../Views/Home.vue";
import User from "../Views/User.vue";
import NotFound from "../Views/NotFound.vue";
import Recommend from "../Views/Home/HomeRecommend.vue";
import Ranking from "../Views/Home/HomeRanking.vue";
// 异步懒加载，会进行分包处理
// 下文的注释会让webpack打包时文件名前添加的自定义名
const About = ()=> import(/* webpackChunkName:'about' */'../Views/About.vue');

const homeChildren = [
  {
    path: '/home',
    redirect: '/home/recommend'
  },
  {
    path: 'recommend',
    component: Recommend,
  },
  {
    path: 'ranking',
    component: Ranking,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 如果匹配不到路径，则显示这个组件
    { path: "/:pathMatch(.*)", component: NotFound },
    // 这种写法会将不能匹配的路径解析为数组，ho/bb 会被解析为['ho','bb']
    // { path: "/:pathMatch(.*)*", component: NotFound },
    // 重定位
    { path: "/", redirect: '/Home' },
    { name:'home', path: "/home", component: Home, children: homeChildren},
    { path: "/about", component: About ,meta:{
      // 自定义属性 
      name:'Money',
      age:20,
    }},
    // 动态路由
    { path: "/user/:id", component: User },

  ],
});

export default router;
