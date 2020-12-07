<template>
  <div class="login">
    <el-form :model="form">
      <el-form-item label="用户名">
        <el-input v-model="form.loginName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { loginApi } from "@/api/index.js";
export default {
  name: "",
  components: {},
  data() {
    return {
      form: {}
    };
  },
  created() {},
  methods: {
    ...mapActions("layouts", ["getMenuData"]),

    async onSubmit() {
      let res = await loginApi(this.form);
      if (res.status == 1) {
        //假设登录成功，需要动态加入路由参数
        sessionStorage.setItem("token", "111111"); //假数据

        //登录成功，获取菜单权限
        let resAuth = await this.getMenuData(); //vuex 权限action
        if (resAuth == "success") {
          this.$router.replace({
            path: "/home"
          });
        }
      } else {
        this.$message.error("登录错误");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 500px;
  margin: 30px auto;
}
</style>
