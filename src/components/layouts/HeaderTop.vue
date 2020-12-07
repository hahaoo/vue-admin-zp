<template>
  <div class="wh100 mp0">
    <el-row class="wh100">
      <el-col :span="1">
        <div class="fold-icon" @click="foldMenu">
          <i :class="foldType"></i>
        </div>
      </el-col>
      <el-col :span="19"><TagLink class="tag-links"></TagLink></el-col>
      <el-col :span="4" class="wh100">
        <div class="user-set">
          <el-dropdown>
            <span class="el-dropdown-link">
              <div class="user-img">
                <el-avatar
                  size="medium"
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
              </div>
              <div class="user-tool">
                用户名<i class="el-icon-arrow-down el-icon--right"></i>
              </div>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-picture-outline-round"
                ><span @click="themeSet('theme_default', '#304156')">
                  默认主题
                </span></el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-edit"
                ><span
                  @click="themeSet('theme_darkgreen', '#09573f')"
                  class="user-set-item"
                >
                  深绿主题
                </span></el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-setting"
                ><span @click="themeSet('theme_warm', '#75310a')">
                  暖色主题
                </span></el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-star-off">
                <span @click="themeSet('theme_warm')">
                  更改主题
                </span></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import TagLink from "./TagLink";

export default {
  name: "HeaderTop",
  components: {
    TagLink
  },
  props: {
    sideWidth: {
      type: String,
      default: "200px"
    }
  },
  data() {
    return {
      userName: "用户名",
      foldType: "el-icon-s-fold"
    };
  },
  computed: {
    ...mapState({
      isCollapse: state => state.layouts.isCollapse,
      menuBackColor: state => state.layouts.menuBackColor
    })
  },
  methods: {
    ...mapMutations("layouts", ["changeCollapse", "setMenuColor"]),
    //折叠/打开左侧菜单栏
    foldMenu() {
      if (this.sideWidth == "200px") {
        this.changeCollapse(true);
        this.$emit("setSideWidth", "60px");
        this.foldType = "el-icon-s-unfold";
      } else {
        this.changeCollapse(false);
        this.$emit("setSideWidth", "200px");
        this.foldType = "el-icon-s-fold";
      }
    },
    //
    themeSet(theme, color) {
      document.body.className = theme;
      this.setMenuColor(color);
      localStorage.setItem("themeColor", theme);
      localStorage.setItem("menuColor", color);
    }
  }
};
</script>
<style lang="less" scoped>
.fold-icon {
  font-size: 25px;
}
.tag-links {
  text-align: left;
}
.user-set {
  float: left;
  margin-left: 30px;
  .user-img {
    float: left;
    padding: 10px 10px 0px 0px;
  }
  .user-tool {
    float: left;
  }
  .user-set-item {
    display: block;
    height: 50px;
    width: 100px;
    background: blanchedalmond !important;
  }
}
</style>
