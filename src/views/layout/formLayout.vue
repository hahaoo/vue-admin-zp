<template>
  <div class="table-layout-example">
    <FormDetailTemplate>
      <template v-slot:detailHeader>
        <el-page-header @back="goBack" :content="headerContent">
        </el-page-header>
      </template>
      <template v-slot:detailContent>
        <el-form :model="formInline" label-width="150px">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </template>
      <template v-slot:detailFooter>
        <el-button type="primary">保存</el-button>
        <el-button plain>取消</el-button>
      </template>
    </FormDetailTemplate>
  </div>
</template>

<script>
import FormDetailTemplate from "@/components/template/FormDetailTemplate";
export default {
  name: "",
  props: {},
  components: {
    FormDetailTemplate
  },
  data() {
    return {
      headerContent: "表单详情模板",
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  created() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less"></style>
