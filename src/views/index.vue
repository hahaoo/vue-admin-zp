<template>
  <div class="wh100">
    <el-container class="wh100">
      <el-aside :width="sideWidth" :class="sideClass">
        <SideMenu></SideMenu>
      </el-aside>
      <el-container class="wh100">
        <el-header class="wh100 header-top">
          <HeaderTop
            class="header-top"
            @setSideWidth="setSideWidth"
            :sideWidth="sideWidth"
          ></HeaderTop>
        </el-header>
        <el-main>
          <keep-alive>
            <!-- 需要缓存的视图组件 -->
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <!-- 不需要缓存的视图组件 -->
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderTop from "@/components/layouts/HeaderTop";
import SideMenu from "@/components/layouts/SideMenu";
import { mapState } from "vuex";

export default {
  name: "index",
  components: {
    HeaderTop,
    SideMenu
  },
  data() {
    return {
      sideWidth: "200px",
      menuData: []
    };
  },
  methods: {
    setSideWidth(data) {
      this.sideWidth = data;
    }
  },
  computed: {
    ...mapState({
      isCollapse: state => state.layouts.isCollapse
    }),
    sideClass() {
      if (this.isCollapse) {
        return "sideClass-hide";
      } else {
        return "";
      }
    }
  }
};
</script>
<style lang="less">
@import url("../assets/common.less");
@import "../assets/theme.less";

.sideClass-hide {
  .el-submenu__icon-arrow {
    display: none !important;
  }
}
</style>
