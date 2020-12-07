import { authApi } from "@/api/index";
import _ from "lodash";
import { addRoutesToPage } from "@/utils/routerAuth";

const state = {
  menuData: [], // 菜单数据
  isCollapse: false,
  // 防止刷新菜单底色丢失
  menuBackColor: localStorage.getItem("menuColor")
    ? localStorage.getItem("menuColor")
    : "#304156"
};
const getters = {
  getMenuDataSort: state => {
    //目前只按照一级路由排序
    let newMenuData = _.orderBy(state.menuData, ["menuSort"], ["asc"]);
    return newMenuData;
  }
};
const mutations = {
  changeCollapse(state, data) {
    state.isCollapse = data;
  },
  // 修改菜单底色
  setMenuColor(state, data) {
    state.menuBackColor = data;
  },
  // 菜单权限
  setMenuData(state, data) {
    state.menuData = data;
  }
};

const actions = {
  //获取菜单数据
  getMenuData: async ({ commit }) => {
    let resAuth = await authApi(); //获取菜单
    if (resAuth.status == 1) {
      commit("setMenuData", resAuth.data.menuData);
      addRoutesToPage(resAuth.data.menuData); //根据菜单权限获取动态路由权限
      return "success";
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
