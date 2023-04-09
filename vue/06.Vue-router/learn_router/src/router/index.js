import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../Views/Home.vue";
import User from "../Views/User.vue";
import NotFound from "../Views/NotFound.vue";
import Recommend from "../Views/Home/HomeRecommend.vue";
import Ranking from "../Views/Home/HomeRanking.vue";
// 异步懒加载，会进行分包处理
// 下文的注释会让webpack打包时文件名前添加的自定义名
const About = () => import(/* webpackChunkName:'about' */ "../Views/About.vue");

const homeChildren = [
  {
    path: "/home",
    redirect: "/home/recommend",
  },
  {
    path: "recommend",
    component: Recommend,
  },
  {
    path: "ranking",
    component: Ranking,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 如果匹配不到路径，则显示这个组件
    { path: "/:pathMatch(.*)", component: NotFound },
    // 这种写法会将不能匹配的路径解析为数组，ho/bb 会被解析为['ho','bb']
    // { path: "/:pathMatch(.*)*", component: NotFound },
    // 重定位
    { path: "/", redirect: "/Home" },
    { path: "/login", component: ()=>import('../Views/Login.vue') },
    { name: "home", path: "/home", component: Home, children: homeChildren },
    {
      path: "/about",
      component: About,
      meta: {
        // 自定义属性
        name: "Money",
        age: 20,
      },
    },
    // 动态路由
    { path: "/user/:id", component: User },
  ],
});
// 动态添加路由
// 如果添加一个name重复的路由时，原有的路由会被删除
// 或者通过router.removeRoute方法传入路由的name也可以删除
// router.addRoute方法会返回一个函数，调用它可以删除这个路由
let isAdmin = true;
let isLogin = true;
if (isAdmin) {
  router.addRoute({
    path: "/admin",
    component: () => import("../Views/Admin.vue")
      ,
  });
  router.addRoute('home',{
  path: "songs",
  component: () => import("../Views/Home/Songs.vue"),
  });
}
// router.hasRoute()可以检查路由是否存在
// router.getRoutes()可以返回一个包含所以路由记录的数组


// 进行路由跳转之前都会回调这个函数,导航守卫
// 返回一个false表示取消本次导航，不返回或者返回undefinded进行默认导航
// 返回一个对象包含path query params等信息
// 返回一个字符串
// 有三个参数，to from next 
// 前两个参数表示到哪去从哪来
// vue2中使用next函数决定如何进行跳转但vue3不推荐

// 除此之外还有其他的守卫，看官方文档。
router.beforeEach((to,from)=>{
  if(to.path === '/about' && !isLogin){
    
  return '/login';
  }
})






export default router;
