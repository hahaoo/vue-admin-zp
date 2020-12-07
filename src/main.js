import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import _ from "lodash";

Vue.prototype._ = _;

// 引入echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
//引入换肤css
import "@/assets/color.less";
Vue.use(ElementUI, { size: "medium", zIndex: 3000 });

// 给body添加class名 实现换肤，第一次打开时添加默认样式的class就好了
var bodyClass = localStorage.getItem("themeColor")
  ? localStorage.getItem("themeColor")
  : "theme_default";
document.body.className = bodyClass;

Vue.config.productionTip = false;

//刷新页面，重新获取权限，重新加载路由

store.dispatch("layouts/getMenuData").then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});
