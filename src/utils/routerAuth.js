//路由权限的跳转控制模块
import { rootRoute, asyncRoutes } from "@/router/home.js";
import router from "@/router/index.js";
import _ from "lodash";
//1.判断是否登录，登录了之后判断是否有权限，没有登录，就跳登录页面
export function isLogin() {
  let token = sessionStorage.getItem("token");
  return token;
}

// 2.登录成功后，把生成的动态路由加载到router中
export function addRoutesToPage(menuData) {
  let menuDataCopy = _.cloneDeep(menuData); //深度拷贝，防止数据引用出错
  let menuArr = treeToList(menuDataCopy); //获取菜单需要的路由数组
  let functionAuthRoute = filterFunctionAuth(asyncRoutes, menuArr); //根据权限过滤路由
  let routes = _.cloneDeep(rootRoute); //深度拷贝，防止数据引用出错
  routes[0].children.push(...functionAuthRoute); //把获取到的动态路由合并到根路由上去
  router.addRoutes(routes); //加路由
}

//通过functionAuth的数据权限获取route
function filterFunctionAuth(asyncRoutes, menuArr) {
  return asyncRoutes
    .filter(item => {
      if (item.meta.functionAuth) {
        return menuArr.indexOf(item.meta.functionAuth) > -1;
      }
    })
    .map(item => {
      item = Object.assign({}, item);
      if (item.children) {
        item.children = filterFunctionAuth(item.children, menuArr);
      }
      return item;
    });
}
//方法转换菜单数据，把树形结构的菜单树转换成数组，获取functionAuth数组；
function treeToList(menuData) {
  let newMenuArr = [];
  if (Array.isArray(menuData)) {
    for (let i = 0, l = menuData.length; i < l; i++) {
      if (menuData[i].functionAuth) {
        var arr = menuData[i].functionAuth.split(",");
        for (let i = 0; i < arr.length; i++) {
          newMenuArr.push(arr[i]); //
        }
      }
      if (
        Array.isArray(menuData[i]["children"]) &&
        menuData[i]["children"].length > 0
      ) {
        // 若存在children则递归调用，把数据拼接到新数组中，并且删除该children
        newMenuArr = newMenuArr.concat(treeToList(menuData[i]["children"]));
        delete menuData[i]["children"];
      }
    }
  }
  return newMenuArr;
}
