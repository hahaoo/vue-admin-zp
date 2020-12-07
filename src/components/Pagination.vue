<template>
  <div class="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageData.pageNum"
      :page-sizes="pageSizes"
      :page-size="pageData.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageData.pageTotal"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSizes: [10, 20, 30]
    };
  },
  props: ["pageData"],
  methods: {
    handleSizeChange(val) {
      this.$emit("onPageSearch", this.pageData.pageNum, val);
    },
    handleCurrentChange(val) {
      this.$emit("onPageSearch", val, this.pageData.pageSize);
    }
  }
};
</script>

<style>
.pagination {
  margin: 20px 0 0 0;
}

.el-pagination {
  text-align: left;
}

.el-pagination .el-select .el-input .el-input__inner {
  padding-right: 25px;
  border-radius: 3px;
  height: 28px;
  line-height: 28px;
}
</style>
