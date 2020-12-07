<template>
  <div class="wh100 shiftBgcolor">
    <el-menu
      :default-active="actRoute"
      unique-opened
      :collapse-transition="false"
      text-color="#ffffff"
      :background-color="menuBackColor"
      active-text-color="#67c23a"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
    >
      <el-menu-item index="/" class="sys-top">
        <i class="sys-icon">
          <img src="../../assets/sys-icon2.png" width="40px" />
        </i>
        <span slot="title" class="sys-title">功能模块化后台</span>
      </el-menu-item>
      <div v-for="(item, index) in menuData" :key="index">
        <div v-if="item.children.length == 0">
          <el-menu-item :index="item.url">
            <i :class="item.iconfont + ' iconfont'"></i>
            <span slot="title">{{ item.menuName }}+'0'</span>
          </el-menu-item>
        </div>
        <div v-if="item.children.length > 0">
          <el-submenu :index="index + ''" class="submenu-wrap">
            <template slot="title">
              <i :class="item.iconfont + ' iconfont'"></i>
              <span slot="title">{{ item.menuName }}</span>
            </template>
            <div v-for="(secondItem, index) in item.children" :key="index">
              <div v-if="!secondItem.children">
                <el-menu-item :index="secondItem.url"
                  >{{ secondItem.menuName }}
                </el-menu-item>
              </div>

              <div v-else class="thirdMenu">
                <el-submenu :index="secondItem.menuName + ''">
                  <template slot="title">
                    <div slot="title" :class="isCollapseStyle">
                      {{ secondItem.menuName }}
                    </div>
                  </template>
                  <el-menu-item
                    v-for="(thirdItem, index) in secondItem.children"
                    :index="thirdItem.url"
                    :key="index"
                    >{{ thirdItem.menuName }}
                  </el-menu-item>
                </el-submenu>
              </div>
            </div>
          </el-submenu>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SideMenu",
  data() {
    return {
      actRoute: "",
      isCollapseStyle: "thirdMenu-title"
    };
  },
  computed: {
    ...mapState({
      isCollapse: state => state.layouts.isCollapse,
      menuBackColor: state => state.layouts.menuBackColor
    }),
    menuData() {
      return this.$store.getters["layouts/getMenuDataSort"];
    }
  },
  watch: {
    $route: {
      handler(to) {
        this.actRoute = to.fullPath;
      },
      deep: true,
      immediate: true
    },
    isCollapse: {
      handler(nval) {
        if (nval == true) {
          this.isCollapseStyle = "";
        } else {
          this.isCollapseStyle = "thirdMenu-title";
        }
      },
      deep: true,
      immediate: true
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.el-menu {
  border-right-width: 0;
  overflow: hidden;
  .iconfont {
    color: rgb(231, 240, 247);
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-right: 24px;
  }
}
.el-submenu {
  text-align: left !important;
  font-size: 30px;
  .thirdMenu .thirdMenu-title {
    text-align: center !important;
  }
}
.el-menu-item,
.el-submenu__title {
  height: 56px;
  line-height: 56px;
  position: relative;
  white-space: nowrap;
  list-style: none;
  text-align: left !important;
}
</style>
