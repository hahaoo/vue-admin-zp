import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { isLogin } from "@/utils/routerAuth";
import { constantRoutes } from "./home.js"; // 静态路由

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRoutes //初始化加入静态路由
});

//全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  //没有登录跳登录页面
  if (!isLogin() && to.path !== "/login") {
    next({
      path: "/login"
    });
  } else {
    next();
  }
});

router.afterEach(() => {
  // alert("111");
  NProgress.done();
});

//解决路由重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
