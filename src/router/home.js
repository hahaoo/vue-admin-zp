import form from "./form"; //表单
import table from "./table"; //表格
import layout from "./layout"; //布局
import userCenter from "./userCenter"; //个人中心
//静态路由
const constantRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "user" */ "@/views/user/login")
  },
  {
    path: "/403",
    name: "403",
    component: () =>
      import(/* webpackChunkName: "exception" */ "@/views/exception/403")
  },
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "exception" */ "@/views/exception/404")
  }
];

//根级路由和静态路由是同级的；
var rootRoute = [
  {
    path: "/",
    name: "index",
    redirect: "/home",
    component: () =>
      import(/* webpackChunkName: "layouts" */ "@/views/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "layouts" */ "@/views/home.vue"),
        meta: {
          isTab: true,
          keepAlive: false,
          links: ["首页"]
        }
      }
    ] //二级子路由
  }
];

//动态路由
const asyncRoutes = [...form, ...table, ...layout, ...userCenter]; //动态路由，属于二级路由下

export { rootRoute, asyncRoutes, constantRoutes };
